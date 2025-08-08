import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { ScanService } from '../../scan/scan.service';

const CreateScanInput = z.object({
  userId: z.string(),
  tagId: z.string(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
});

@Injectable()
export class ScanRouter {
  constructor(private readonly scanService: ScanService) {}

  getRoutes() {
    return router({
      processScan: publicProcedure
        .input(CreateScanInput)
        .mutation(async ({ input }) => {
          // Ensure all required fields are present
          const dto = {
            userId: input.userId,
            tagId: input.tagId,
            ipAddress: input.ipAddress,
            userAgent: input.userAgent,
          };
          return await this.scanService.processScan(dto);
        }),
    });
  }
}
