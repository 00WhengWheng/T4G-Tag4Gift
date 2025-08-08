import { Controller, Post, Get, Body, Query, BadRequestException } from '@nestjs/common';
import { CoinsService } from './coin.service';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  // Unified endpoint for coin generation (game, share, scan)
  @Post('generate')
  async generateCoin(@Body() body: {
    auth0Id: string;
    action: 'GAME' | 'SHARE' | 'SCAN';
    source: string;
    sourceId?: string;
    description?: string;
    metadata?: any;
    gameType?: string;
    score?: number;
    tagId?: string;
    tenantId?: string;
    amount?: number;
  }) {
    try {
      return await this.coinsService.generateCoinForAction(body);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // Get user's coin transaction history
  @Get('history')
  async getUserCoinHistory(@Query('auth0Id') auth0Id: string, @Query('limit') limit = 50, @Query('offset') offset = 0) {
    return this.coinsService.getUserCoinHistory(auth0Id, Number(limit), Number(offset));
  }

  // Get leaderboard
  @Get('leaderboard')
  async getLeaderboard(@Query('limit') limit = 10) {
    return this.coinsService.getCoinLeaderboard(Number(limit));
  }
}
