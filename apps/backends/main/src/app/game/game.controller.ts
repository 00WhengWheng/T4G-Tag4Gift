import { Controller, Get, Post, Put, Body, Query, Param, Req, BadRequestException } from '@nestjs/common';
import { ValidateNested } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { GamesService } from './game.service';
import { GameTemplate } from './entities/game-template.entity';
import { CreateGameTemplateDto } from './dto/create-game-template.dto';
import { GameType } from './enums/game-type.enum';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('templates')
  async getGameTemplates(
    @Query('category') category?: string,
    @Query('type') type?: GameType,
    @Req() req?: any
  ): Promise<any[]> {
    // Unified: includes GDevelop and other game templates
    const templates = await this.gamesService.getGameTemplates(category, type);
    const userId = req?.user?.userId;
    // Add coin eligibility for GDevelop types
    return await Promise.all(
      templates.map(async (t: any) => {
        let coinEligible = false;
        if (userId && [GameType.MUSIC, GameType.REACTION, GameType.PUZZLE].includes(t.type)) {
          coinEligible = await this.isCoinEligible(userId, t.type);
        }
        return {
          ...t,
          coinEligible,
        };
      })
    );
  }

  @Post('template')
  async createGameTemplate(@Body() body: CreateGameTemplateDto): Promise<GameTemplate> {
    // DTO validation
    const dto = plainToInstance(CreateGameTemplateDto, body);
    const errors = await import('class-validator').then(({ validate }) => validate(dto));
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const template = await this.gamesService.createGameTemplate({
        name: body.name,
        type: body.type as GameType,
        category: body.category ?? undefined,
        difficulty: body.difficulty ?? undefined,
        structure: body.structure ? JSON.parse(body.structure) : undefined,
        description: body.description ?? undefined,
        gdevelopProjectUrl: body.gdevelopProjectUrl ?? undefined,
      });
      const prismaType = template.type;
      const controllerType = (prismaType as string) as import('./enums/game-type.enum').GameType;
      return {
        ...template,
        type: controllerType,
        description: template.description ?? undefined,
        category: template.category ?? undefined,
        difficulty: template.difficulty ?? undefined,
        gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
        structure: JSON.stringify(template.structure)
      };
    } catch (err) {
      throw new BadRequestException(err.message || 'Failed to create game template');
    }
  }

  // Endpoint: record win and update coin for quiz or gdevelop games
  @Post('win')
  async recordGameWin(
    @Body() body: { gameId: string; type: GameType; userId: string; score?: number; quiz?: boolean }
  ): Promise<{ coinAwarded: boolean; reason?: string }> {
    const allowedTypes = [GameType.MUSIC, GameType.REACTION, GameType.PUZZLE, GameType.QUIZ];
    if (!allowedTypes.includes(body.type)) {
      return { coinAwarded: false, reason: 'Invalid game type' };
    }
    let eligible = false;
    if (body.type === GameType.QUIZ) {
      eligible = await this.isCoinEligible(body.userId, GameType.QUIZ);
    } else {
      eligible = await this.isCoinEligible(body.userId, body.type);
    }
    if (!eligible) {
      return { coinAwarded: false, reason: 'Coin limit reached for this week' };
    }
    await this.gamesService.prisma.coin.create({
      data: {
        userId: body.userId,
        coinType: 'GAME',
        amount: 1,
        description: `Win in ${body.type} game`,
        gameType: body.type,
        gameId: body.gameId,
        score: body.score,
      },
    });
    return { coinAwarded: true };
  }

  // Helper: check if user is eligible for coin for a game type
  private async isCoinEligible(userId: string, gameType: GameType): Promise<boolean> {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const coinCount = await this.gamesService.prisma.coin.count({
      where: {
        userId,
        coinType: 'GAME',
        createdAt: { gte: oneWeekAgo },
        gameType,
      },
    });
    return coinCount < 2;
  }

  // Endpoint: get coin eligibility for a user/game
  @Get('coin-eligibility/:gameId')
  async getCoinEligibility(@Param('gameId') gameId: string, @Req() req: any): Promise<{ eligible: boolean }> {
    const userId = req.user?.userId;
    if (!userId) throw new BadRequestException('User not authenticated');
    const game = await this.gamesService.findById(gameId);
    if (!game) throw new BadRequestException('Game not found');
    const eligible = await this.isCoinEligible(userId, game.type);
    return { eligible };
  }

  // Endpoint: get quiz metadata
  @Get('quiz/metadata')
  async getQuizMetadata(@Query('category') category?: string): Promise<any[]> {
    // Replace with actual DB fetch logic for quiz questions/answers
    return [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'What is 2+2?', answer: '4' },
    ];
  }

  @Put('template/:id')
  async updateGameTemplate(
    @Param('id') id: string,
    @Body() updateGameDto: Partial<CreateGameTemplateDto>
  ): Promise<GameTemplate> {
    const template = await this.gamesService.createGameTemplate({ ...updateGameDto, id });
    return {
      ...template,
      structure: JSON.stringify(template.structure),
    };
  }
}
