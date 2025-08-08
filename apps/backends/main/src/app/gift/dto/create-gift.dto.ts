import { GiftType } from '@prisma/client';

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
