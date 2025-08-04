import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ChallengeService, CreateChallengeInput } from './challenge.service';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  async createChallenge(@Body() input: CreateChallengeInput) {
    return await this.challengeService.createChallenge(input);
  }

  @Post(':challengeId/join')
  async joinChallenge(@Param('challengeId') challengeId: string, @Body('userId') userId: string) {
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
