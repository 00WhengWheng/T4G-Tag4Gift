import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { CoinsService } from '../../coins/coins.service';
import { ChallengePassService } from '../../coins/challenge-pass.service';
import { PrismaService } from '@t4g/database';

@Injectable()
export class CoinsRouter {
  constructor(
    private readonly coinsService: CoinsService,
    private readonly challengePassService: ChallengePassService,
    private readonly prisma: PrismaService,
  ) {}

  getRoutes() {
    return router({
      // Get user's coin balance
      getBalance: publicProcedure
        .input(z.object({ userId: z.string() })) // Keep as userId for frontend compatibility
        .query(async ({ input }) => {
          return this.coinsService.getUserCoinBalance(input.userId); // userId here is actually auth0Id
        }),

      // Get user's coin transaction history
      getHistory: publicProcedure
        .input(z.object({ 
          userId: z.string(),
          limit: z.number().optional().default(50),
          offset: z.number().optional().default(0),
        }))
        .query(async ({ input }) => {
          return this.coinsService.getUserCoinHistory(input.userId, input.limit, input.offset);
        }),

      // Get coin leaderboard
      getLeaderboard: publicProcedure
        .input(z.object({ limit: z.number().optional().default(10) }))
        .query(async ({ input }) => {
          return this.coinsService.getCoinLeaderboard(input.limit);
        }),

      // Get coin statistics for a time period
      getStats: publicProcedure
        .input(z.object({
          userId: z.string(),
          startDate: z.string().transform((str) => new Date(str)),
          endDate: z.string().transform((str) => new Date(str)),
        }))
        .query(async ({ input }) => {
          // For this one, we need to convert auth0Id to internal userId since getUserCoinStats expects internal ID
          const user = await this.prisma.user.findUnique({
            where: { auth0Id: input.userId },
            select: { id: true },
          });
          if (!user) throw new Error('User not found');
          return this.coinsService.getUserCoinStats(user.id, input.startDate, input.endDate);
        }),

      // Check weekly progress for challenge pass
      checkWeeklyProgress: publicProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
          return this.challengePassService.checkWeeklyProgress(input.userId);
        }),

      // Generate challenge pass
      generateChallengePass: publicProcedure
        .input(z.object({ userId: z.string() }))
        .mutation(async ({ input }) => {
          return this.challengePassService.generateChallengePass(input.userId);
        }),

      // Get user's challenge passes
      getChallengePasses: publicProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
          return this.challengePassService.getUserChallengePasses(input.userId);
        }),

      // Get available challenge passes
      getAvailableChallengePasses: publicProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
          return this.challengePassService.getAvailableChallengePasses(input.userId);
        }),

      // Get challenge pass statistics
      getChallengePassStats: publicProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
          return this.challengePassService.getUserChallengePassStats(input.userId);
        }),

      // Get weekly requirements
      getWeeklyRequirements: publicProcedure
        .query(async () => {
          return this.challengePassService.getWeeklyRequirements();
        }),

      // Award coins for activities (would typically be called by other services)
      awardTagCoins: publicProcedure
        .input(z.object({
          userId: z.string(),
          tagId: z.string(),
          venueId: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          return this.coinsService.awardTagCoins(input.userId, input.tagId, input.venueId);
        }),

      awardShareCoins: publicProcedure
        .input(z.object({
          userId: z.string(),
          shareId: z.string(),
          platform: z.string(),
        }))
        .mutation(async ({ input }) => {
          return this.coinsService.awardShareCoins(input.userId, input.shareId, input.platform);
        }),

      awardGameCoins: publicProcedure
        .input(z.object({
          userId: z.string(),
          gameId: z.string(),
          score: z.number().optional(),
        }))
        .mutation(async ({ input }) => {
          return this.coinsService.awardGameCoins(input.userId, input.gameId, input.score);
        }),
    });
  }
}
