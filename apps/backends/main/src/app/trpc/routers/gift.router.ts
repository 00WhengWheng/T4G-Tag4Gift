import { publicProcedure, router } from '../trpc';
import { GiftService } from '../../gift/gift.service';
import { CreateGiftDto } from '../../gift/dto/create-gift.dto';
import { GiftStatus } from '@prisma/client';
import { z } from 'zod';

export const giftRouter = router({
  // List gifts (public)
  list: publicProcedure
    .input(z.object({ tenantId: z.string().optional(), status: z.nativeEnum(GiftStatus).optional() }))
    .query(async ({ input, ctx }) => {
      return await ctx.giftService.listGifts(input.tenantId, input.status);
    }),

  // Create gift (protected, business only)
  create: publicProcedure
    .input(z.object({
      tenantId: z.string(),
      name: z.string(),
      description: z.string().optional(),
      giftType: z.string(),
      value: z.number().optional(),
      quantity: z.number().optional(),
      expiresAt: z.date().optional(),
      coinScanRequirement: z.number().optional(),
      coinShareRequirement: z.number().optional(),
      coinGameRequirement: z.number().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error('Unauthorized');
      // TODO: Add business user check if needed
      return await ctx.giftService.createGift(input as CreateGiftDto);
    }),

  // Claim gift (protected, user only)
  claim: publicProcedure
    .input(z.object({ giftId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error('Unauthorized');
      return await ctx.giftService.claimGift(input.giftId, ctx.user.id || ctx.user.sub);
    }),

  // Update gift (protected, business only)
  update: publicProcedure
    .input(z.object({ giftId: z.string(), data: z.record(z.any()) }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error('Unauthorized');
      // TODO: Add business user check if needed
      return await ctx.giftService.updateGift(input.giftId, input.data);
    }),
});
