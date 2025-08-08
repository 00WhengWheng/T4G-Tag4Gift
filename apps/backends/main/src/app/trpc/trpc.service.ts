import { Injectable } from '@nestjs/common';
import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import { UserService } from '../users/user.service';
import { ChallengeService } from '../challenge/challenge.service';
import { GamesService } from '../game/game.service';
import { TagService } from '../tags/tag.service';
import { ShareService } from '../share/share.service';
import { TenantService } from '../tenants/tenant.service';

/**
 * Main tRPC Service
 * Handles tRPC operations for the main user platform
 */
@Injectable()
export class TrpcService {
  private t = initTRPC.create();

  constructor(
    private usersService: UserService,
    private challengeService: ChallengeService,
    private gamesService: GamesService,
    private tagsService: TagService,
    private shareService: ShareService,
    private tenantsService: TenantService
  ) {}

  createAppRouter() {
    return this.t.router({
      users: this.t.router({
        getProfile: this.t.procedure
          .input(z.object({ auth0Id: z.string().optional() }).optional())
          .query(async ({ input }) => {
            try {
              // In a real app, get auth0Id from JWT token
              const auth0Id = input?.auth0Id || 'mock-auth0-id';
              return await this.usersService.findByAuth0Id(auth0Id);
            } catch (error) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'User profile not found',
              });
            }
          }),

        updateProfile: this.t.procedure
          .input(z.object({
            auth0Id: z.string(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            displayName: z.string().optional(),
            username: z.string().optional(),
            dateOfBirth: z.date().optional(),
            profilePictureUrl: z.string().optional(),
          }))
          .mutation(async ({ input }) => {
            try {
              return await this.usersService.updateProfile(input.auth0Id, {
                first_name: input.firstName,
                last_name: input.lastName,
              });
            } catch (error) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Failed to update profile',
              });
            }
          }),

        getAchievements: this.t.procedure
          .input(z.object({ auth0Id: z.string().optional() }).optional())
          .query(async ({ input }) => {
            // Mock achievements - replace with real service
            return {
              challengeWins: 5,
              tournamentWins: 2,
              venuesTagged: 12,
            };
          }),
      }),

      challenges: this.t.router({
        getAll: this.t.procedure
          .input(z.object({
            status: z.enum(['ACTIVE', 'COMPLETED', 'EXPIRED']).optional(),
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
          }).optional())
          .query(async ({ input }) => {
            const { status, limit = 20, offset = 0 } = input || {};
            return await this.challengeService.findMany({
              where: status ? { status } : undefined,
              take: limit,
              skip: offset,
              orderBy: { created_at: 'desc' },
            });
          }),

        getById: this.t.procedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input }) => {
            const challenge = await this.challengeService.findById(input.id);
            if (!challenge) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Challenge not found',
              });
            }
            return challenge;
          }),

        join: this.t.procedure
          .input(z.object({
            challengeId: z.string(),
            userId: z.string(),
          }))
          .mutation(async ({ input }) => {
            try {
              return await this.challengeService.joinChallenge(
                input.challengeId,
                input.userId
              );
            } catch (error) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: error instanceof Error ? error.message : 'Failed to join challenge',
              });
            }
          }),

        submitResult: this.t.procedure
          .input(z.object({
            challengeId: z.string(),
            userId: z.string(),
            timeMs: z.number().min(0),
          }))
          .mutation(async ({ input }) => {
            try {
              return await this.challengeService.submitResult(
                input.challengeId,
                input.userId,
                input.timeMs
              );
            } catch (error) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: error instanceof Error ? error.message : 'Failed to submit result',
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

        getById: this.t.procedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input }) => {
            const game = await this.gamesService.findById(input.id);
            if (!game) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Game not found',
              });
            }
            return game;
          }),

        getBySlug: this.t.procedure
          .input(z.object({ slug: z.string() }))
          .query(async ({ input }) => {
            const game = await this.gamesService.findBySlug(input.slug);
            if (!game) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Game not found',
              });
            }
            return game;
          }),
      }),

      tags: this.t.router({
        create: this.t.procedure
          .input(z.object({
            userId: z.string(),
            venueId: z.string(),
            latitude: z.number(),
            longitude: z.number(),
          }))
          .mutation(async ({ input }) => {
            try {
              return await this.tagsService.createTag(
                input.userId,
                input.venueId,
                input.latitude,
                input.longitude
              );
            } catch (error) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: error instanceof Error ? error.message : 'Failed to create tag',
              });
            }
          }),

        getUserTags: this.t.procedure
          .input(z.object({
            userId: z.string(),
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
          }))
          .query(async ({ input }) => {
            return await this.tagsService.getUserTags(
              input.userId,
              input.limit,
              input.offset
            );
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

        getUserShares: this.t.procedure
          .input(z.object({
            userId: z.string(),
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
          }))
          .query(async ({ input }) => {
            return await this.shareService.getUserShares(
              input.userId,
              input.limit,
              input.offset
            );
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

        getById: this.t.procedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input }) => {
            const tenant = await this.tenantsService.findById(input.id);
            if (!tenant) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Tenant not found',
              });
            }
            return tenant;
          }),
      }),
    });
  }

  getAppRouter() {
    return this.createAppRouter();
  }
}
