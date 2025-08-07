import { Injectable, BadRequestException } from '@nestjs/common';
  async claimGift(giftId: string, userId: string) {
    // Find gift and check availability
    const gift = await this.prisma.gift.findUnique({ where: { id: giftId } });
    if (!gift || gift.status !== GiftStatus.AVAILABLE || gift.quantity < 1) {
      throw new BadRequestException('Gift not available');
    }
    // Update gift status and assign to user
    return await this.prisma.gift.update({
      where: { id: giftId },
      data: {
        status: GiftStatus.CLAIMED,
        userId,
        quantity: gift.quantity - 1,
      },
    });
  }

  async listGifts(tenantId?: string, status?: GiftStatus) {
    return await this.prisma.gift.findMany({
      where: {
        ...(tenantId ? { tenantId } : {}),
        ...(status ? { status } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateGift(giftId: string, data: Partial<CreateGiftDto>) {
    return await this.prisma.gift.update({
      where: { id: giftId },
      data,
    });
  }
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { GiftType, GiftStatus } from '@prisma/client';

export interface CreateGiftDto {
  tenantId: string;
  name: string;
  description?: string;
  giftType: GiftType;
  value?: number; // euro
  quantity?: number;
  expiresAt?: Date;
  coinScanRequirement?: number;
  coinShareRequirement?: number;
  coinGameRequirement?: number;
}

@Injectable()
export class GiftService {
  constructor(private readonly prisma: PrismaService) {}

  async createGift(dto: CreateGiftDto) {
    // Defaults
    const now = new Date();
    const expiresAt = dto.expiresAt ?? new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 1 month
    const value = dto.value ?? 5;
    const quantity = dto.quantity ?? 1;
    const coinScanRequirement = dto.coinScanRequirement ?? 10;
    const coinShareRequirement = dto.coinShareRequirement ?? 3;
    const coinGameRequirement = dto.coinGameRequirement ?? 10;

    // Create gift entity
    return await this.prisma.gift.create({
      data: {
        tenantId: dto.tenantId,
        name: dto.name,
        description: dto.description ?? '',
        giftType: dto.giftType,
        value,
        quantity,
        status: GiftStatus.AVAILABLE,
        expiresAt,
        coinScanRequirement,
        coinShareRequirement,
        coinGameRequirement,
      },
    });
  }
}
