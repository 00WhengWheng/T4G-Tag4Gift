import { Injectable } from '@nestjs/common';
import { PrismaClient, Gift } from '@prisma/client';
import { CreateGiftDto, UpdateGiftDto } from './dto/gifts.dto';

@Injectable()
export class GiftService {
  private prisma = new PrismaClient();

  async createGift(data: CreateGiftDto): Promise<Gift> {
    // Map frontend fields to DB fields
    const gift = await this.prisma.gift.create({
      data: {
        name: data.name,
        description: data.description,
        giftType: data.type, // Prisma expects giftType
        value: data.value,
        currency: data.currency ?? 'USD',
        imageUrl: data.image,
        quantity: data.totalQuantity ?? 1,
        tenantId: data.tenantId,
        venueId: data.venueId,
        status: 'AVAILABLE',
        expiresAt: data.endDate ? new Date(data.endDate) : undefined,
        giftData: {
          coinRequirements: data.giftData?.coinRequirements || data.coinRequirements || {},
        },
        challenge: data.challengeId
          ? { connect: { id: data.challengeId } }
          : undefined,
      },
    });
    return gift;
  }

  async getGift(id: string): Promise<Gift | null> {
    return this.prisma.gift.findUnique({ where: { id } });
  }

  async updateGift(id: string, data: UpdateGiftDto): Promise<Gift> {
    return this.prisma.gift.update({ where: { id }, data });
  }

  async deleteGift(id: string): Promise<Gift> {
    return this.prisma.gift.delete({ where: { id } });
  }

  async listGiftsByTenant(tenantId: string): Promise<Gift[]> {
    return this.prisma.gift.findMany({ where: { tenantId } });
  }

  async listGiftsByChallenge(challengeId: string): Promise<Gift[]> {
    // The relation is 'challenge', not 'challenges', and each gift can have at most one challenge
    return this.prisma.gift.findMany({
      where: {
        challenge: {
          id: challengeId,
        },
      },
    });
  }
}
