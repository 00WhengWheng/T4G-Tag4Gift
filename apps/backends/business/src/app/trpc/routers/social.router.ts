import { router, publicProcedure } from '../trpc';
import { SocialService } from '../../social/social.service';
import { z } from 'zod';

const CreateSocialInput = z.object({
  userId: z.string(),
  tenantId: z.string(),
  socialType: z.string(),
  socialUrl: z.string().optional(),
});

export function SocialRouter(socialService: SocialService) {
  return router({
    createSocial: publicProcedure.input(CreateSocialInput).mutation(async ({ input }) => {
      return socialService.createSocial(input);
    }),
    getSocialsByTenant: publicProcedure.input(z.string()).query(async ({ input }) => {
      return socialService.getSocialsByTenant(input);
    }),
    getSocialsByUser: publicProcedure.input(z.string()).query(async ({ input }) => {
      return socialService.getSocialsByUser(input);
    }),
  });
}
