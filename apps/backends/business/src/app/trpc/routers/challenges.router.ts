import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { ChallengeService } from '../../challenge/challenge.service';

// Input schemas for tRPC procedures
const getChallengesSchema = z.object({
  tenantId: z.string().optional(),
  status: z.enum(['SCHEDULED', 'ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED']).optional(),
  limit: z.number().min(1).max(100).default(50),
  offset: z.number().min(0).default(0),
});

const getChallengeByIdSchema = z.object({
  id: z.string(),
});

const updateChallengeStatusSchema = z.object({
  id: z.string(),
  status: z.enum(['SCHEDULED', 'ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED']),
});

const getChallengeStatsSchema = z.object({
  tenantId: z.string().optional(),
});

@Injectable()
export class ChallengesRouter {
  constructor(private readonly challengeService: ChallengeService) {
    console.log('🎯 ChallengesRouter instantiated with ChallengeService:', !!this.challengeService);
  }

  getRoutes() {
    console.log('🔧 ChallengesRouter.getRoutes() called');
    return router({
      // Get all challenges with filtering
      getAll: publicProcedure
        .input(getChallengesSchema)
        .query(async ({ input }) => {
          console.log('📋 Getting all challenges with params:', input);
          return await this.challengeService.getAllChallenges(input);
        }),

      // Get challenge by ID
      getById: publicProcedure
        .input(getChallengeByIdSchema)
        .query(async ({ input }) => {
          console.log('🔍 Getting challenge by ID:', input.id);
          return await this.challengeService.getChallengeById(input.id);
        }),

      // Update challenge status
      updateStatus: publicProcedure
        .input(updateChallengeStatusSchema)
        .mutation(async ({ input }) => {
          console.log('✏️ Updating challenge status:', input);
          return await this.challengeService.updateChallengeStatus(input.id, input.status);
        }),

      // Get challenge statistics
      getStats: publicProcedure
        .input(getChallengeStatsSchema)
        .query(async ({ input }) => {
          console.log('📊 Getting challenge stats for tenant:', input.tenantId);
          return await this.challengeService.getChallengeStats(input.tenantId);
        }),
    });
  }
}
