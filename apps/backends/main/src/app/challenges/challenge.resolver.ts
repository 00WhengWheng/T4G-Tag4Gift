import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ChallengeService, CreateChallengeInput } from './challenge.service';
import { Challenge } from '../games/types';

@Resolver(() => Challenge)
export class ChallengeResolver {
  constructor(private readonly challengeService: ChallengeService) {}

  @Mutation(() => Challenge)
  async createChallenge(@Args('input') input: CreateChallengeInput): Promise<Challenge> {
    // Validate input, then delegate to service
    return await this.challengeService.createChallenge(input);
  }

  @Mutation(() => Challenge)
  async joinChallenge(
    @Args('challengeId') challengeId: string,
    @Args('userId') userId: string
  ): Promise<Challenge> {
    return await this.challengeService.joinChallenge(challengeId, userId);
  }

  @Mutation(() => Challenge)
  async submitResult(
    @Args('challengeId') challengeId: string,
    @Args('userId') userId: string,
    @Args('timeMs') timeMs: number
  ): Promise<Challenge> {
    return await this.challengeService.submitResult(challengeId, userId, timeMs);
  }

  @Query(() => Challenge)
  async getChallenge(@Args('challengeId') challengeId: string): Promise<Challenge> {
    return await this.challengeService.getChallenge(challengeId);
  }
}
