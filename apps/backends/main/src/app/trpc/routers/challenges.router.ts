import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { ChallengeService } from '../../challenges/challenge.service';
import { ChallengeType } from '../../challenges/enums/challenge-type.enum';

// Input schemas for tRPC procedures
const createChallengeSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  giftId: z.string(),
  tenantId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  participantIds: z.array(z.string()),
  type: z.nativeEnum(ChallengeType),
  createdById: z.string(),
});

const joinChallengeSchema = z.object({
  challengeId: z.string(),
  userId: z.string(),
});

const submitResultSchema = z.object({
  challengeId: z.string(),
  userId: z.string(),
  timeMs: z.number(),
});

const getChallengeSchema = z.object({
  challengeId: z.string(),
});

@Injectable()
export class ChallengesRouter {
  constructor(private readonly challengeService: ChallengeService) {}

  getRoutes() {
    return router({
      // Create a new challenge
      create: publicProcedure
        .input(createChallengeSchema)
        .mutation(async ({ input }) => {
          // TypeScript knows input is validated by zod schema
          return await this.challengeService.createChallenge(input as any);
        }),

      // Join an existing challenge
      join: publicProcedure
        .input(joinChallengeSchema)
        .mutation(async ({ input }) => {
          return await this.challengeService.joinChallenge(input.challengeId, input.userId);
        }),

      // Submit result for a challenge
      submitResult: publicProcedure
        .input(submitResultSchema)
        .mutation(async ({ input }) => {
          return await this.challengeService.submitResult(
            input.challengeId,
            input.userId,
            input.timeMs
          );
        }),

      // Get challenge details
      getById: publicProcedure
        .input(getChallengeSchema)
        .query(async ({ input }) => {
          return await this.challengeService.getChallenge(input.challengeId);
        }),

      // Get challenge winner
      getWinner: publicProcedure
        .input(getChallengeSchema)
        .query(async ({ input }) => {
          return await this.challengeService.calculateWinner(input.challengeId);
        }),
    });
  }
}
