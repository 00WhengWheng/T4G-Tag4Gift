import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params?: {
    tenantId?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }) {
    const { tenantId, status, limit = 50, offset = 0 } = params || {};
    
    const where: any = {};
    if (tenantId) where.tenantId = tenantId;
    if (status) where.status = status;

    const [challenges, total] = await Promise.all([
      this.prisma.challenge.findMany({
        where,
        include: {
          gift: true,
          game: true,
          tenant: true,
          _count: {
            select: {
              participants: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      this.prisma.challenge.count({ where }),
    ]);

    // Transform the data to match the expected format
    const transformedChallenges = challenges.map(challenge => ({
      ...challenge,
      totalParticipants: challenge._count.participants,
    }));

    return {
      challenges: transformedChallenges,
      total,
      limit,
      offset,
    };
  }

  async findById(id: string) {
    return this.prisma.challenge.findUnique({
      where: { id },
      include: {
        gift: true,
        game: true,
        tenant: true,
        participants: {
          include: {
            user: true,
          },
        },
        _count: {
          select: {
            participants: true,
          },
        },
      },
    });
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.challenge.update({
      where: { id },
      data: { status },
      include: {
        gift: true,
        game: true,
        tenant: true,
      },
    });
  }

  async getStats() {
    const [
      totalChallenges,
      activeChallenges,
      scheduledChallenges,
      totalParticipants,
    ] = await Promise.all([
      this.prisma.challenge.count(),
      this.prisma.challenge.count({
        where: { status: 'ACTIVE' },
      }),
      this.prisma.challenge.count({
        where: { status: 'SCHEDULED' },
      }),
      this.prisma.challengeParticipant.count(),
    ]);

    return {
      totalChallenges,
      activeChallenges,
      scheduledChallenges,
      totalParticipants,
    };
  }
}
