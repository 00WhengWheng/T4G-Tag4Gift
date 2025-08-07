import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { ChallengeStatus, ChallengeType as PrismaChallengeType } from '@prisma/client';
import { ChallengeType } from './enums/challenge-type.enum';
import { GameType } from '../games/enums/game-type.enum';

export interface GiftInput {
  name: string;
  description?: string;
  giftType: string;
  value: number;
  quantity: number;
  tenantId: string;
}

export interface CreateChallengeInput {
  title: string;
  description?: string;
  coinScanCost?: number;
  coinShareCost?: number;
  coinGameCost?: number;
  startDate: string;
  endDate: string;
  tenantId: string;
  maxParticipants?: number;
  gift: GiftInput;
}

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async createChallenge(dto: CreateChallengeInput) {
    if (!dto.title || !dto.gift || !dto.tenantId || !dto.startDate || !dto.endDate) {
      throw new BadRequestException('Missing required fields');
    }
    // Create Gift first
    const gift = await this.prisma.gift.create({
      data: {
        name: dto.gift.name,
        description: dto.gift.description,
        giftType: dto.gift.giftType,
        value: dto.gift.value,
        quantity: dto.gift.quantity,
        tenantId: dto.tenantId,
        status: 'AVAILABLE',
      }
    });
    // Create Challenge and link Gift
    const challenge = await this.prisma.challenge.create({
      data: {
        title: dto.title,
        description: dto.description,
        coinScanCost: dto.coinScanCost,
        coinShareCost: dto.coinShareCost,
        coinGameCost: dto.coinGameCost,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        tenantId: dto.tenantId,
        maxParticipants: dto.maxParticipants,
        status: 'ACTIVE',
        gifts: { connect: [{ id: gift.id }] },
      },
      include: { gifts: true },
    });
    // Update Gift to link challengeId
    await this.prisma.gift.update({
      where: { id: gift.id },
      data: { challengeId: challenge.id },
    });
    return challenge;
  }

  async findMany(options: { where?: any; take?: number; skip?: number; orderBy?: any }) {
    return await this.prisma.challenge.findMany({
      where: options.where,
      take: options.take,
      skip: options.skip,
      orderBy: options.orderBy,
      include: { gift: true, participants: true, game: true },
    });
  }

  async findById(id: string) {
    return await this.prisma.challenge.findUnique({
      where: { id },
      include: { gift: true, participants: true, game: true },
    });
  }

  async updateChallengeStatus(challengeId: string, status: ChallengeStatus) {
    return await this.prisma.challenge.update({
      where: { id: challengeId },
      data: { status },
    });
  }

  async joinChallenge(challengeId: string, userId: string) {
    await this.prisma.challengeParticipant.create({ data: { challengeId, userId } });
    return await this.findById(challengeId);
  }

  async submitResult(challengeId: string, userId: string, timeMs: number) {
    const challenge = await this.findById(challengeId);
    const gameId = challenge?.game?.id;
    if (!gameId) throw new BadRequestException('No game found for this challenge');
    await this.prisma.gameResult.create({
      data: {
        userId,
        gameId,
        participantId: `${userId}_${challengeId}`,
        timeSpent: timeMs,
      },
    });
    return await this.findById(challengeId);
  }

  async calculateWinner(challengeId: string) {
    const results = await this.prisma.gameResult.findMany({
      where: { participantId: { contains: challengeId } },
      orderBy: { timeSpent: 'asc' },
      take: 1,
    });
    return results[0]?.userId;
  }

  async claimGiftForWinner(challengeId: string, userId: string) {
    const challenge = await this.prisma.challenge.findUnique({ where: { id: challengeId }, include: { gift: true } });
    if (!challenge || !challenge.gift) throw new BadRequestException('Challenge or gift not found');
    const winnerId = await this.calculateWinner(challengeId);
    if (winnerId !== userId) throw new BadRequestException('User is not the winner');
    return await this.prisma.gift.update({
      where: { id: challenge.gift.id },
      data: { status: 'CLAIMED', userId },
    });
  }
}
