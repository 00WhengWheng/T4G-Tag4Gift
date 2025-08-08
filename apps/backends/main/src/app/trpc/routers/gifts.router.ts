import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { PrismaService } from '@t4g/database';

const AssignGiftInput = z.object({
  userId: z.string(),
  giftId: z.string(),
});

@Injectable()
export class GiftsRouter {
  constructor(private readonly prisma: PrismaService) {}

  getRoutes() {
    return router({
      assignGiftToUser: publicProcedure
        .input(AssignGiftInput)
        .mutation(async ({ input }) => {
          // Update gift to assign to user
          return await this.prisma.gift.update({
            where: { id: input.giftId },
            data: { userId: input.userId, status: 'CLAIMED' },
          });
        }),
      // ...other gift procedures can be added here
    });
  }
}
