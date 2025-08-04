import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { ShareService } from '../../share/share.service';

const ShareToFacebookInput = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  message: z.string().min(1, 'Message is required'),
  link: z.string().url().optional(),
});

const ShareToInstagramInput = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  imageUrl: z.string().url('Image URL must be valid'),
  caption: z.string().optional(),
});

@Injectable()
export class ShareRouter {
  constructor(private readonly shareService: ShareService) {}

  getRoutes() {
    return router({
      shareToFacebook: publicProcedure
        .input(ShareToFacebookInput)
        .output(z.boolean())
        .mutation(async ({ input }) => {
          const { accessToken, message, link } = input;
          return await this.shareService.shareToFacebook(accessToken, message, link);
        }),

      shareToInstagram: publicProcedure
        .input(ShareToInstagramInput)
        .output(z.boolean())
        .mutation(async ({ input }) => {
          const { accessToken, imageUrl, caption } = input;
          return await this.shareService.shareToInstagram(accessToken, imageUrl, caption);
        }),
    });
  }
}
