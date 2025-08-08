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

const ShareToTikTokInput = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  videoUrl: z.string().url('Video URL must be valid'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});

@Injectable()
export class ShareRouter {
  constructor(private readonly shareService: ShareService) {}

  getRoutes() {
    return router({
      shareToFacebook: publicProcedure
        .input(ShareToFacebookInput)
        .output(z.object({ id: z.string(), dbRecord: z.any().optional() }))
        .mutation(async ({ input }) => {
          const { accessToken, message, link } = input;
          return await this.shareService.shareToFacebookPage(accessToken, message, link, /* userId */ '', /* tenantId */ '');
        }),

      shareToInstagram: publicProcedure
        .input(ShareToInstagramInput)
        .output(z.object({ id: z.string(), dbRecord: z.any().optional() }))
        .mutation(async ({ input }) => {
          const { accessToken, imageUrl, caption } = input;
          return await this.shareService.shareToInstagramBusiness(accessToken, imageUrl, caption, /* userId */ '', /* tenantId */ '');
        }),

      shareToTikTok: publicProcedure
        .input(ShareToTikTokInput)
        .output(z.object({ publishId: z.string(), dbRecord: z.any().optional() }))
        .mutation(async ({ input }) => {
          const { accessToken, videoUrl, title, description } = input;
          return await this.shareService.shareToTikTok(accessToken, videoUrl, title, description, /* userId */ '', /* tenantId */ '');
        }),
    });
  }
}
