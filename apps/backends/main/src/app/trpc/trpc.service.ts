import { Injectable } from '@nestjs/common';
import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';

import { AuthModule } from '../auth/auth.module';
import { GameService } from '../game/game.service';
import { GiftService } from '../gift/gift.service';
import { ScanService } from '../scan/scan.service';
import { ShareService } from '../share/share.service';
import { TenantsService } from '../tenants/tenants.service';
import { UserService } from '../user/user.service';

/**
 * Main tRPC Service
 * Handles tRPC operations for the main user platform
 */
@Injectable()
export class TrpcService {
  private t = initTRPC.create();

  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private giftService: GiftService,
    private scanService: ScanService,
    private shareService: ShareService,
    private tenantsService: TenantsService,
    private userService: UserService,
  ) {}


  createAppRouter() {
    return this.t.router({
      users: this.t.router({
        getProfile: this.t.procedure
          .input(z.object({ auth0Id: z.string().optional() }).optional())
          .query(async ({ input }) => {
            try {
              const auth0Id = input?.auth0Id || 'mock-auth0-id';
              return await this.usersService.findByAuth0Id(auth0Id);
            } catch (error) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'User profile not found',
              });
            }
          }),
      }),
      games: this.t.router({
        getAll: this.t.procedure
          .input(z.object({
            category: z.string().optional(),
            type: z.enum(['GDEVELOP', 'QUIZ', 'CUSTOM']).optional(),
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
          }).optional())
          .query(async ({ input }) => {
            const { category, type, limit = 20, offset = 0 } = input || {};
            return await this.gamesService.findMany({
              where: {
                ...(category && { category }),
                ...(type && { type }),
              },
              take: limit,
              skip: offset,
              orderBy: { created_at: 'desc' },
            });
          }),
      }),
      share: this.t.router({
        create: this.t.procedure
          .input(z.object({
            userId: z.string(),
            venueId: z.string(),
            platform: z.enum(['INSTAGRAM', 'FACEBOOK', 'TWITTER', 'TIKTOK']),
            postUrl: z.string().url(),
          }))
          .mutation(async ({ input }) => {
            try {
              return await this.shareService.createShare(
                input.userId,
                input.venueId,
                input.platform,
                input.postUrl
              );
            } catch (error) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: error instanceof Error ? error.message : 'Failed to create share',
              });
            }
          }),
      }),
      tenants: this.t.router({
        getAll: this.t.procedure
          .input(z.object({
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
          }).optional())
          .query(async ({ input }) => {
            const { limit = 20, offset = 0 } = input || {};
            return await this.tenantsService.findMany({
              take: limit,
              skip: offset,
              orderBy: { created_at: 'desc' },
            });
          }),
      }),
    });
  }

  getAppRouter() {
    return this.createAppRouter();
  }
}
