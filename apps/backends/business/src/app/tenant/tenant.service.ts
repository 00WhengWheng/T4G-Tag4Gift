import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../../prisma/prisma.service';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async getTenantUserStats(tenantId: string) {
    // Aggregate statistics for users belonging to this tenant
    const totalUsers = await this.prisma.user.count({ where: { tenantId } });
    const totalGiftsAwarded = await this.prisma.userGift.count({ where: { gift: { tenantId } } });
    const totalChallengesCompleted = await this.prisma.challengeParticipant.count({
      where: {
        challenge: { tenantId },
        status: 'COMPLETED',
      },
    });
    return {
      totalUsers,
      totalGiftsAwarded,
      totalChallengesCompleted,
    };
  }

  async getUserInteractions(tenantId: string) {
    // Return detailed user interaction stats for this tenant
    return this.prisma.user.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        totalPoints: true,
        level: true,
        awardedGifts: { select: { gift: true } },
        challengeParticipants: {
          select: {
            challenge: true,
            status: true,
            score: true,
          },
        },
      },
    });
  }
}
