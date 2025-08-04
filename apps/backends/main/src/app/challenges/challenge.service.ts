import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { ChallengeStatus, ChallengeType as PrismaChallengeType } from '@prisma/client';
import { ChallengeType } from './enums/challenge-type.enum';
import { GameType } from '../games/enums/game-type.enum';

export class CreateChallengeInput {
  name: string;
  description?: string;
  giftId: string;
  gameId: string;
  tenantId: string;
  startDate: string;
  endDate: string;
  participantIds: string[];
  type: ChallengeType;
  createdById: string;
}

export class SubmitResultInput {
  challengeId: string;
  userId: string;
  timeMs: number;
}

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async createChallenge(dto: CreateChallengeInput) {
    // Create challenge with gift association and schedule
    const challenge = await this.prisma.challenge.create({
      data: {
        name: dto.name,
        description: dto.description,
        gift: { connect: { id: dto.giftId } },
        game: { connect: { id: dto.gameId } },
        startDate: dto.startDate,
        endDate: dto.endDate,
        status: ChallengeStatus.SCHEDULED,
        tenant: { connect: { id: dto.tenantId } },
        type: dto.type as unknown as PrismaChallengeType,
        createdById: dto.createdById,
        participants: {
          create: dto.participantIds.map(userId => ({ userId })),
        },
      },
      include: { gift: true, participants: true, game: true },
    });
    return this.toChallengeType(challenge);
  }

  async findMany(options: {
    where?: any;
    take?: number;
    skip?: number;
    orderBy?: any;
  }) {
    const challenges = await this.prisma.challenge.findMany({
      where: options.where,
      take: options.take,
      skip: options.skip,
      orderBy: options.orderBy,
      include: { gift: true, participants: true, game: true },
    });
    return challenges.map(challenge => this.toChallengeType(challenge));
  }

  async findById(id: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id },
      include: { gift: true, participants: true, game: true },
    });
    return challenge ? this.toChallengeType(challenge) : null;
  }

  async joinChallenge(challengeId: string, userId: string) {
    // Add participant to challenge
    await this.prisma.challengeParticipant.create({
      data: { challengeId, userId },
    });
    // Return updated challenge
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
      include: { gift: true, participants: true, game: true },
    });
    return this.toChallengeType(challenge);
  }

  async addParticipant(challengeId: string, userId: string) {
    // Add participant to challenge
    return this.prisma.challengeParticipant.create({
      data: { challengeId, userId },
    });
  }

  async removeParticipant(challengeId: string, userId: string) {
    // Remove participant from challenge
    return this.prisma.challengeParticipant.delete({
      where: { userId_challengeId: { userId, challengeId } },
    });
  }

  async updateChallengeStatus(challengeId: string, status: ChallengeStatus) {
    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: { status },
    });
  }

  async submitResult(challengeId: string, userId: string, timeMs: number) {
    // Fetch the correct gameId for the challenge
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
      include: { game: true },
    });
    const gameId = challenge?.game?.id;
    if (!gameId) {
      throw new Error('No game found for this challenge');
    }
    // Store result for participant
    await this.prisma.gameResult.create({
      data: {
        userId,
        gameId,
        participantId: `${userId}_${challengeId}`,
        timeSpent: timeMs,
      },
    });
    // Return updated challenge
    const updatedChallenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
      include: { gift: true, participants: true, game: true },
    });
    return this.toChallengeType(updatedChallenge);
  }

  async getChallenge(challengeId: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
      include: { gift: true, participants: true, game: true },
    });
    return this.toChallengeType(challenge);
  }

  // Helper to map Prisma challenge to GraphQL Challenge type
  async toChallengeType(challenge: {
    id: string;
    games?: Array<{
      id: string;
      type: string;
      createdAt: Date;
      updatedAt: Date;
      status: string;
      challengeId: string;
      config: unknown;
      timeLimit: number;
      content: unknown;
      questions: unknown;
      gameTemplateId: string;
    }>;
    participants?: Array<{ userId: string }>;
    gift?: {
      id: string;
      name: string;
      description?: string;
    };
  } | null) {
    if (!challenge) return null;
    // Fetch results for this challenge
    const results = await this.prisma.gameResult.findMany({
      where: { gameId: challenge.games?.[0]?.id },
    });
    const participants = Array.isArray(challenge.participants)
      ? challenge.participants.map((p) => p.userId)
      : [];
    let winnerId: string | null = null;
    if (results.length) {
      const best = results.reduce((best, curr) => curr.timeSpent < best.timeSpent ? curr : best);
      winnerId = best.userId;
    }
    // Map Prisma GameType enum to GraphQL GameType enum
    let game = null;
    if (challenge.games && challenge.games.length > 0) {
      const g = challenge.games[0];
      let mappedType: GameType = GameType.QUIZ;
      if (typeof g.type === 'string') {
        if (g.type === GameType.QUIZ) mappedType = GameType.QUIZ;
        else if (g.type === GameType.PUZZLE) mappedType = GameType.PUZZLE;
        else if (g.type === GameType.MUSIC) mappedType = GameType.MUSIC;
        else if (g.type === GameType.REACTION) mappedType = GameType.REACTION;
        else mappedType = GameType.QUIZ;
      } else if (Object.values(GameType).includes(g.type)) {
        mappedType = g.type as GameType;
      }
      game = {
        id: g.id,
        type: mappedType,
        status: g.status,
        // The following fields are not present in Prisma, set as undefined
        category: undefined,
        name: undefined,
        description: undefined,
        gdevelopProjectUrl: undefined,
      };
    }
    return {
      id: challenge.id,
      type: (challenge as any).type as ChallengeType, // ensure type is present
      game,
      participants,
      results: results.map(r => ({ userId: r.userId, timeMs: r.timeSpent })),
      winnerId,
      gift: challenge.gift,
    };
  }

  async calculateWinner(challengeId: string) {
    // Find participant with best result (lowest timeMs)
    const results = await this.prisma.gameResult.findMany({
      where: { participant: { challengeId } },
      orderBy: { timeSpent: 'asc' },
      take: 1,
    });
    return results[0]?.userId;
  }
}
