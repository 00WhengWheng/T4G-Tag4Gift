import { IsEnum, IsString, IsOptional, IsNumber } from 'class-validator';
import { GiftType } from '@prisma/client';

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
