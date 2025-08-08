import { Injectable } from '@nestjs/common';
import { PrismaService, ShareType } from '@t4g/database';

export interface CreateShareDto {
  userId: string;
  tenantId: string;
  socialType: ShareType;
  shareUrl?: string;
}

@Injectable()
export class ShareService {
  constructor(private readonly prisma: PrismaService) {}

  async createShare(dto: CreateShareDto) {
    // Create a share record and award coins
    const share = await this.prisma.share.create({
      data: {
        userId: dto.userId,
        tenantId: dto.tenantId,
        socialType: dto.socialType,
        shareUrl: dto.shareUrl,
      },
    });
    // Award coin for sharing
    await this.prisma.coin.create({
      data: {
        userId: dto.userId,
        coinType: 'SHARE',
        amount: 1,
        description: `Shared on ${dto.socialType}`,
        shareId: share.id,
      },
    });
    return share;
  }

  async getSharesByTenant(tenantId: string) {
    return this.prisma.share.findMany({
      where: { tenantId },
      include: { user: true },
    });
  }

  async getSharesByUser(userId: string) {
    return this.prisma.share.findMany({
      where: { userId },
      include: { tenant: true },
    });
  }
}
