import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@t4g/database';

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async listAvailableChallenges(userId: string) {
    // List challenges user can join (active, not already joined)
    const joinedIds = (await this.prisma.challengeParticipant.findMany({ where: { userId } })).map(p => p.challengeId);
    return await this.prisma.challenge.findMany({
      where: {
        status: 'ACTIVE',
        NOT: { id: { in: joinedIds } },
      },
      include: { gift: true, game: true },
      orderBy: { startDate: 'asc' },
    });
  }

  async joinChallenge(challengeId: string, userId: string) {
    // Join challenge if not already joined
    const exists = await this.prisma.challengeParticipant.findUnique({ where: { userId_challengeId: { userId, challengeId } } });
    if (exists) throw new BadRequestException('Already joined');
    await this.prisma.challengeParticipant.create({ data: { challengeId, userId } });
    return await this.prisma.challenge.findUnique({ where: { id: challengeId }, include: { gift: true, game: true } });
  }

  async submitResult(challengeId: string, userId: string, timeMs: number) {
    // Submit result for challenge
    const challenge = await this.prisma.challenge.findUnique({ where: { id: challengeId }, include: { game: true } });
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
    return await this.prisma.challenge.findUnique({ where: { id: challengeId }, include: { gift: true, game: true } });
  }

  async getChallenge(challengeId: string) {
    return await this.prisma.challenge.findUnique({ where: { id: challengeId }, include: { gift: true, game: true } });
  }

  async getWinner(challengeId: string) {
    const results = await this.prisma.gameResult.findMany({
      where: { participantId: { contains: challengeId } },
      orderBy: { timeSpent: 'asc' },
      take: 1,
    });
    return results[0]?.userId;
  }
}
