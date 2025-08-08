import { publicProcedure, router } from '../trpc';
import { ScanService } from '../../scan/scan.service';
import { z } from 'zod';

const CreateScanInput = z.object({
  tagId: z.string(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
});

export const scanRouter = router({
  processScan: publicProcedure
    .input(CreateScanInput)
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error('Not authenticated');
      const dto = {
        userId: ctx.user.id || ctx.user.sub,
        tagId: input.tagId,
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      };
      return await ctx.scanService.processScan(dto);
    }),
});
