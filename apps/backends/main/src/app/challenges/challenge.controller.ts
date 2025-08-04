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
    return await this.challengeService.joinChallenge(challengeId, userId);
  }

  @Post(':challengeId/submit')
  async submitResult(
    @Param('challengeId') challengeId: string,
    @Body('userId') userId: string,
    @Body('timeMs') timeMs: number
  ) {
    return await this.challengeService.submitResult(challengeId, userId, timeMs);
  }

  @Get(':challengeId')
  async getChallenge(@Param('challengeId') challengeId: string) {
    return await this.challengeService.getChallenge(challengeId);
  }

  @Get(':challengeId/winner')
  async getWinner(@Param('challengeId') challengeId: string) {
    return await this.challengeService.calculateWinner(challengeId);
  }
}
