import { Controller, Post, Get, Body, Param, Query, Req, BadRequestException } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { GameType } from '../../games/enums/game-type.enum';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Post('game')
  async createGameCoin(@Body() body: { userId: string; gameId: string; gameType: GameType; score?: number }) {
    const success = await this.coinsService.createGameCoin(body.userId, body.gameId, body.gameType, body.score);
    if (!success) throw new BadRequestException('Coin limit reached for this week');
    return { success };
  }

  @Post('scan')
  async createScanCoin(@Body() body: { userId: string; tagId: string; tenantId: string }) {
    const success = await this.coinsService.createScanCoin(body.userId, body.tagId, body.tenantId);
    return { success };
  }

  @Get('game/eligible/:userId/:gameType')
  async isGameCoinEligible(@Param('userId') userId: string, @Param('gameType') gameType: GameType) {
    const eligible = await this.coinsService.isGameCoinEligible(userId, gameType);
    return { eligible };
  }

  @Get('user/:userId')
  async getUserCoins(@Param('userId') userId: string, @Query('limit') limit = 20, @Query('offset') offset = 0) {
    return this.coinsService.getUserCoins(userId, Number(limit), Number(offset));
  }
}
