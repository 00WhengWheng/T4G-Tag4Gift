import { Controller, Post, Get, Param, Body, Query, Put, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ChallengeService, CreateChallengeInput } from './challenge.service';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  async createChallenge(@Body() input: CreateChallengeInput) {
    // No validation for brevity, add class-validator if needed
    return await this.challengeService.createChallenge(input);
  }

  @Get()
  async listChallenges(@Query('tenantId') tenantId?: string, @Query('status') status?: string) {
    return await this.challengeService.findMany({
      where: {
        ...(tenantId ? { tenantId } : {}),
        ...(status ? { status } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Put(':challengeId/status')
  async updateStatus(@Param('challengeId') challengeId: string, @Body('status') status: string) {
    return await this.challengeService.updateChallengeStatus(challengeId, status);
  }

  @Post(':challengeId/claim-gift')
  async claimGiftForWinner(@Param('challengeId') challengeId: string, @Body('userId') userId: string) {
    return await this.challengeService.claimGiftForWinner(challengeId, userId);
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
    return await this.challengeService.findById(challengeId);
  }

  @Get(':challengeId/winner')
  async getWinner(@Param('challengeId') challengeId: string) {
    return await this.challengeService.calculateWinner(challengeId);
  }
}
