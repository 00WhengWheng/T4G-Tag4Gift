import { Injectable } from '@nestjs/common';
import { PrismaClient, ChallengeStatus, ChallengeType } from '@prisma/client';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChallengeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  giftId: string;

  @Field()
  tenantId: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [String])
  participantIds: string[];

  @Field()
  type: ChallengeType;

  @Field()
  createdById: string;
}

@InputType()
export class SubmitResultInput {
  @Field()
  challengeId: string;

  @Field()
  userId: string;

  @Field()
  timeMs: number;
}

@Injectable()
export class ChallengeService {
  private prisma = new PrismaClient();

  async createChallenge(dto: CreateChallengeInput) {
    // Create challenge with gift association and schedule
    return this.prisma.challenge.create({
      data: {
        name: dto.name,
        description: dto.description,
        gift: { connect: { id: dto.giftId } },
        startDate: dto.startDate,
        endDate: dto.endDate,
        status: ChallengeStatus.SCHEDULED,
        tenant: { connect: { id: dto.tenantId } },
        type: dto.type,
        createdById: dto.createdById,
        participants: {
          create: dto.participantIds.map(userId => ({ userId })),
        },
      },
      include: { gift: true, participants: true },
    });
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

  async submitResult(dto: SubmitResultInput) {
    // Fetch the correct gameId for the challenge
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: dto.challengeId },
      include: { games: true },
    });
    const gameId = challenge?.games?.[0]?.id;
    if (!gameId) {
      throw new Error('No game found for this challenge');
    }
    // Store result for participant
    return this.prisma.gameResult.create({
      data: {
        userId: dto.userId,
        gameId,
        participantId: `${dto.userId}_${dto.challengeId}`,
        timeSpent: dto.timeMs,
      },
    });
  }

  async getChallenge(challengeId: string) {
    return this.prisma.challenge.findUnique({
      where: { id: challengeId },
      include: { gift: true, participants: true },
    });
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
