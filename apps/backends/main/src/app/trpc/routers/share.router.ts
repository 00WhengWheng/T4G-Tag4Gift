import { publicProcedure, router } from '../trpc';
import type { TrpcContext } from '../trpc.controller';
import { ShareService } from '../../share/share.service';
import { z } from 'zod';

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

export const shareRouter = router({
  shareToFacebook: publicProcedure
    .input(ShareToFacebookInput)
    .output(z.object({ id: z.string(), dbRecord: z.any().optional() }))
  .mutation(async ({ input, ctx }: { input: any; ctx: TrpcContext }) => {
      if (!ctx.user) throw new Error('Not authenticated');
      const { accessToken, message, link } = input;
      return await ctx.shareService.shareToFacebookPage(accessToken, message, link, ctx.user.id || ctx.user.sub, ctx.user.tenantId);
    }),

  shareToInstagram: publicProcedure
    .input(ShareToInstagramInput)
    .output(z.object({ id: z.string(), dbRecord: z.any().optional() }))
  .mutation(async ({ input, ctx }: { input: any; ctx: TrpcContext }) => {
      if (!ctx.user) throw new Error('Not authenticated');
      const { accessToken, imageUrl, caption } = input;
      return await ctx.shareService.shareToInstagramBusiness(accessToken, imageUrl, caption, ctx.user.id || ctx.user.sub, ctx.user.tenantId);
    }),

  shareToTikTok: publicProcedure
    .input(ShareToTikTokInput)
    .output(z.object({ publishId: z.string(), dbRecord: z.any().optional() }))
  .mutation(async ({ input, ctx }: { input: any; ctx: TrpcContext }) => {
      if (!ctx.user) throw new Error('Not authenticated');
      const { accessToken, videoUrl, title, description } = input;
      return await ctx.shareService.shareToTikTok(accessToken, videoUrl, title, description, ctx.user.id || ctx.user.sub, ctx.user.tenantId);
    }),
});
