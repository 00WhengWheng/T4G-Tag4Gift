import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GamesService } from '../games/games.service';

@Controller('trpc')
export class TrpcController {
  constructor(private readonly gamesService: GamesService) {}

  // Games endpoints following tRPC naming convention
  @Get('games.getAll')
  async getGames() {
    try {
      const result = await this.gamesService.getGameTemplates();
      return { result: { data: result } };
    } catch (error) {
      return { 
        error: { 
          message: 'Failed to fetch games',
          code: 'INTERNAL_SERVER_ERROR'
        } 
      };
    }
  }

  @Get('games.getCategories')
  async getGameCategories() {
    try {
      const result = await this.gamesService.getCategories();
      return { result: { data: result } };
    } catch (error) {
      return { 
        error: { 
          message: 'Failed to fetch game categories',
          code: 'INTERNAL_SERVER_ERROR'
        } 
      };
    }
  }

  @Post('games.getByType')
  async getGamesByType(@Body() input: { type: string }) {
    try {
      const result = await this.gamesService.getGameTemplates(undefined, input.type as any);
      return { result: { data: result } };
    } catch (error) {
      return { 
        error: { 
          message: 'Failed to fetch games by type',
          code: 'INTERNAL_SERVER_ERROR'
        } 
      };
    }
  }

  @Get('games.getByType')
  async getGamesByTypeQuery(@Query('type') type: string) {
    try {
      const result = await this.gamesService.getGameTemplates(undefined, type as any);
      return { result: { data: result } };
    } catch (error) {
      return { 
        error: { 
          message: 'Failed to fetch games by type',
          code: 'INTERNAL_SERVER_ERROR'
        } 
      };
    }
  }
}
