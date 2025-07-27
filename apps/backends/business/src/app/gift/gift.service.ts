import { Injectable } from '@nestjs/common';
import { PrismaClient, Gift, GiftType } from '@prisma/client';
import { IsEnum, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateGiftDto {
  @IsString()
  identity: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(GiftType)
  type: GiftType;

  @IsNumber()
  value: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  totalQuantity?: number;

  @IsString()
  tenantId: string;

  @IsOptional()
  @IsString()
  venueId?: string;

  @IsOptional()
  @IsString()
  challengeId?: string;

  @IsOptional()
  giftData?: any;
}

export class UpdateGiftDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(GiftType)
  type?: GiftType;

  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  totalQuantity?: number;

  @IsOptional()
  @IsString()
  venueId?: string;

  @IsOptional()
  @IsString()
  challengeId?: string;

  @IsOptional()
  giftData?: any;
}

@Injectable()
export class GiftService {
  private prisma = new PrismaClient();

  async createGift(data: CreateGiftDto): Promise<Gift> {
    // If challengeId is provided, associate gift to challenge
    const gift = await this.prisma.gift.create({
      data: {
        identity: data.identity,
        name: data.name,
        description: data.description,
        type: data.type,
        value: data.value,
        currency: data.currency ?? 'USD',
        image: data.image,
        totalQuantity: data.totalQuantity ?? 1,
        tenantId: data.tenantId,
        venueId: data.venueId,
        giftData: data.giftData,
        challenges: data.challengeId
          ? { connect: [{ id: data.challengeId }] }
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
    return this.prisma.gift.findMany({
      where: {
        challenges: {
          some: { id: challengeId },
        },
      },
    });
  }
}
