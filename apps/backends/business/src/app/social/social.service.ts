import { Injectable } from '@nestjs/common';
import { PrismaService, SocialType } from '@t4g/database';

export interface CreateSocialDto {
  userId: string;
  tenantId: string;
  socialType: SocialType;
  socialUrl?: string;
}

@Injectable()
export class SocialService {
  constructor(private readonly prisma: PrismaService) {}

  async createSocial(dto: CreateSocialDto) {
    // Create a social record and award coins
    const social = await this.prisma.social.create({
      data: {
        userId: dto.userId,
        tenantId: dto.tenantId,
        socialType: dto.socialType,
        socialUrl: dto.socialUrl,
      },
    });
    // Award coin for sharing
    await this.prisma.coin.create({
      data: {
        userId: dto.userId,
        coinType: 'SHARE',
        amount: 1,
        description: `Sociald on ${dto.socialType}`,
        socialId: social.id,
      },
    });
    return social;
  }

  async getSocialsByTenant(tenantId: string) {
    return this.prisma.social.findMany({
      where: { tenantId },
      include: { user: true },
    });
  }

  async getSocialsByUser(userId: string) {
    return this.prisma.social.findMany({
      where: { userId },
      include: { tenant: true },
    });
  }
}
