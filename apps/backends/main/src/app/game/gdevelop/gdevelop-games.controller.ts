import { Post, Body } from '@nestjs/common';
  // Endpoint: record win and update coin for quiz or gdevelop games
  @Post('/win')
  async recordGameWin(
    @Body() body: { gameId: string; type: GameType; userId: string; score?: number; quiz?: boolean }
  ): Promise<{ coinAwarded: boolean; reason?: string }> {
    // For quiz: type === GameType.QUIZ, for gdevelop: type in allowedTypes
    const allowedTypes = [GameType.MUSIC, GameType.REACTION, GameType.PUZZLE, GameType.QUIZ];
    if (!allowedTypes.includes(body.type)) {
      return { coinAwarded: false, reason: 'Invalid game type' };
    }
    // Check coin eligibility
    let eligible = false;
    if (body.type === GameType.QUIZ) {
      // Quiz: max 2 coins per week
      eligible = await this.isCoinEligible(body.userId, GameType.QUIZ);
    } else {
      eligible = await this.isCoinEligible(body.userId, body.type);
    }
    if (!eligible) {
      return { coinAwarded: false, reason: 'Coin limit reached for this week' };
    }
    // Award coin
    await this.prisma.coin.create({
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
import { Req } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
  constructor(
    private readonly gdevelopGamesService: GDevelopGamesService,
    private readonly prisma: PrismaService
  ) {}
  // Helper: check if user is eligible for coin for a game type
  private async isCoinEligible(userId: string, gameType: GameType): Promise<boolean> {
    // Only allow 2 coin rewards per week per user/gameType
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const coinCount = await this.prisma.coin.count({
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
  @Get('/coin-eligibility/:gameId')
  async getCoinEligibility(@Param('gameId') gameId: string, @Req() req: any): Promise<{ eligible: boolean }> {
    const userId = req.user?.userId;
    if (!userId) throw new BadRequestException('User not authenticated');
    const game = await this.gdevelopGamesService.getGDevelopGameById(gameId);
    if (!game) throw new BadRequestException('Game not found');
    const eligible = await this.isCoinEligible(userId, game.type);
    return { eligible };
  }
import { Controller, Get, Post, Put, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { GDevelopGamesService } from './gdevelop-games.service';
import { GameTemplate } from '../entities/game-template.entity';
import { GameType } from '../enums/game-type.enum';
import { CreateGameTemplateDto } from '../dto/create-game-template.dto';

@Controller('games/gdevelop')
export class GDevelopGamesController {
  constructor(private readonly gdevelopGamesService: GDevelopGamesService) {}

  @Get()
  async getGDevelopGames(
    @Query('category') category?: string,
    @Query('type') type?: GameType,
    @Req() req: any
  ): Promise<any[]> {
    // Only manage MUSIC, REACTION, PUZZLE types
    const allowedTypes = [GameType.MUSIC, GameType.REACTION, GameType.PUZZLE];
    const templates = await this.gdevelopGamesService.getGDevelopGameTemplates(category);
    const userId = req.user?.userId;
    return await Promise.all(
      templates
        .filter((t: any) => allowedTypes.includes(t.type as GameType))
        .map(async (t: any) => {
          let coinEligible = false;
          if (userId) {
            coinEligible = await this.isCoinEligible(userId, t.type);
          }
          return {
            id: t.id,
            name: t.name,
            description: t.description ?? undefined,
            type: t.type as GameType,
            category: t.category ?? undefined,
            difficulty: t.difficulty ?? undefined,
            structure: JSON.stringify(t.structure),
            isActive: t.isActive,
            gdevelopProjectUrl: (t.gdevelopProjectUrl ?? this.getDefaultGDevelopUrl(t.type, t.category ?? undefined)) ?? undefined,
            createdAt: t.createdAt,
            updatedAt: t.updatedAt,
            coinEligible,
          };
        })
    );
  }

  @Get(':id')
  async getGDevelopGame(@Param('id') id: string): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.getGDevelopGameById(id);
    
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type as GameType,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: (template.gdevelopProjectUrl ?? this.getDefaultGDevelopUrl(template.type, template.category ?? undefined)) ?? undefined,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
  }

  @Post()
  async createGDevelopGame(@Body() createGameDto: CreateGameTemplateDto): Promise<GameTemplate> {
    // Only allow MUSIC, REACTION, PUZZLE types for GDevelop
    const allowedTypes = [GameType.MUSIC, GameType.REACTION, GameType.PUZZLE];
    if (!allowedTypes.includes(createGameDto.type)) {
      throw new BadRequestException('Only MUSIC, REACTION, PUZZLE types are allowed for GDevelop games');
    }
    // DTO validation
    const dto = plainToInstance(CreateGameTemplateDto, createGameDto);
    const errors = await import('class-validator').then(({ validate }) => validate(dto));
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const template = await this.gdevelopGamesService.registerGDevelopGame({
        name: createGameDto.name,
        type: createGameDto.type,
        category: createGameDto.category,
        difficulty: createGameDto.difficulty,
        structure: createGameDto.structure ? JSON.parse(createGameDto.structure) : {},
        gdevelopProjectUrl: createGameDto.gdevelopProjectUrl,
      });
      return {
        id: template.id,
        name: template.name,
        description: template.description ?? undefined,
        type: template.type as GameType,
        category: template.category ?? undefined,
        difficulty: template.difficulty ?? undefined,
        structure: JSON.stringify(template.structure),
        isActive: template.isActive,
        gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
        createdAt: template.createdAt,
        updatedAt: template.updatedAt,
      };
    } catch (err) {
      throw new BadRequestException(err.message || 'Failed to create GDevelop game template');
    }
  }
  // QUIZ templates are handled internally via metadata fetch, not CRUD
  // Add endpoint for quiz metadata fetch
  @Get('/quiz/metadata')
  async getQuizMetadata(@Query('category') category?: string): Promise<any[]> {
    // Fetch quiz metadata (question+answer) from database or static source
    // Example: return [{ question: '...', answer: '...' }, ...]
    // Replace with actual fetch logic
    return [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'What is 2+2?', answer: '4' },
    ];
  }

  @Put(':id')
  async updateGDevelopGame(
    @Param('id') id: string,
    @Body() updateGameDto: Partial<CreateGameTemplateDto>
  ): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.updateGDevelopGame(id, updateGameDto);
    
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type as GameType,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
  }

  private getDefaultGDevelopUrl(type: GameType | string, category?: string): string {
    const typeStr = typeof type === 'string' ? type : String(type);
    const baseUrl = 'https://gdevelop-games.s3-website.eu-west-3.amazonaws.com/';
    
    switch (typeStr.toLowerCase()) {
      case 'quiz':
        return `${baseUrl}quiz/${category || 'general'}`;
      case 'puzzle':
        return `${baseUrl}puzzle/${category || 'basic'}`;
      case 'music':
        return `${baseUrl}music/${category || 'rhythm'}`;
      case 'reaction':
        return `${baseUrl}reaction/${category || 'flappy'}`;
      default:
        return `${baseUrl}games/${typeStr.toLowerCase()}`;
    }
  }
}
