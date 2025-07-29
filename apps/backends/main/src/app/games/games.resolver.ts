import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GamesService } from './games.service';
import {
  GameCategory,
  GameTypeInfo,
  Game,
  GAME_CATEGORIES,
  GAME_TYPES,
} from './types';
import { GameTemplate } from './entities/game-template.entity';
import { GameType } from './enums/game.enum';
import { CreateGameTemplateDto } from './dto/create-game-template.dto';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => [GameTemplate], { name: 'quizTemplatesByCategory' })
  async getQuizTemplatesByCategory(
    @Args('category', { type: () => String }) category: string
  ): Promise<GameTemplate[]> {
    const templates = await this.gamesService.getGameTemplates(
      category,
      GameType.QUIZ
    );
    return templates.map((t): GameTemplate => {
      let mappedType: GameType = GameType.QUIZ;
      if (typeof t.type === 'string' && GameType[t.type as keyof typeof GameType]) {
        mappedType = GameType[t.type as keyof typeof GameType];
      } else if (typeof t.type === 'number' && Object.values(GameType).includes(t.type)) {
        mappedType = t.type as GameType;
      }
      const instance = new GameTemplate();
      Object.assign(instance, {
        id: t.id,
        name: t.name,
        description: t.description ?? undefined,
        type: mappedType,
        category: t.category ?? undefined,
        difficulty: t.difficulty ?? undefined,
        structure: JSON.stringify(t.structure),
        isActive: t.isActive,
        gdevelopProjectUrl: t.gdevelopProjectUrl ?? `https://gdevelop.io/project/${t.id}`,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      });
      return instance;
    });
  }

  @Mutation(() => GameTemplate)
  async createGameTemplate(
    @Args('input') input: CreateGameTemplateDto
  ): Promise<GameTemplate> {
    // Parse structure if needed (if sent as JSON string)
    const parsedInput = {
      ...input,
      structure: input.structure ? JSON.parse(input.structure) : undefined,
    };
    const template = await this.gamesService.createGameTemplate(parsedInput);
    let mappedType: GameType = GameType.QUIZ;
    if (template?.type && typeof template.type === 'string' && GameType[template.type as keyof typeof GameType]) {
      mappedType = GameType[template.type as keyof typeof GameType];
    }
    const instance = new GameTemplate();
    Object.assign(instance, {
      ...template,
      description: template.description ?? undefined,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      structure: JSON.stringify(template.structure),
      type: mappedType,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    });
    return instance;
  }

  @Query(() => [GameCategory], { name: 'gameCategories' })
  getCategories(): GameCategory[] {
    return GAME_CATEGORIES.map((name) => ({ name }));
  }

  @Query(() => [GameTypeInfo], { name: 'gameTypes' })
  getGameTypes(): GameTypeInfo[] {
    return GAME_TYPES;
  }

  @Query(() => [GameTemplate], { name: 'gameTemplates' })
  async getGameTemplates(
    @Args('category', { type: () => String, nullable: true }) category?: string,
    @Args('type', { type: () => GameType, nullable: true }) type?: GameType
  ): Promise<GameTemplate[]> {
    const templates = await this.gamesService.getGameTemplates(category, type);
    // Map Prisma results to GraphQL type
    return templates.map((t): GameTemplate => {
      let mappedType: GameType = GameType.QUIZ;
      if (typeof t.type === 'string' && GameType[t.type as keyof typeof GameType]) {
        mappedType = GameType[t.type as keyof typeof GameType];
      } else if (typeof t.type === 'number' && Object.values(GameType).includes(t.type)) {
        mappedType = t.type as GameType;
      }
      const instance = new GameTemplate();
      Object.assign(instance, {
        id: t.id,
        name: t.name,
        description: t.description ?? undefined,
        type: mappedType,
        category: t.category ?? undefined,
        difficulty: t.difficulty ?? undefined,
        structure: JSON.stringify(t.structure),
        isActive: t.isActive,
        gdevelopProjectUrl: t.gdevelopProjectUrl ?? undefined,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      });
      return instance;
    });
  }

  @Query(() => [Game], { name: 'gameData' })
  async getGameData(
    @Args('gameId', { type: () => String }) gameId: string
  ): Promise<Game[]> {
    const data = await this.gamesService.getGameData(gameId);
    
    // Get the game template to get more information
    const gameTemplates = await this.gamesService.getGameTemplates();
    
    // Map Prisma results to GraphQL type
    return data.map((d): Game => {
      // Find matching template if possible
      const template = gameTemplates.find((t: GameTemplate) => t.id === d.gameId);
      let mappedType: GameType = GameType.QUIZ;
      if (template?.type && typeof template.type === 'string' && GameType[template.type as keyof typeof GameType]) {
        mappedType = GameType[template.type as keyof typeof GameType];
      }
      const instance = new Game();
      Object.assign(instance, {
        id: d.id,
        type: mappedType,
        status: 'ACTIVE', // Default status or get from data if available
        category: template?.category || undefined,
        name: template?.name || `Game ${d.id}`,
        description: template?.description || undefined,
        gdevelopProjectUrl: template?.gdevelopProjectUrl || `/games/${template?.category || 'default'}/index.html`,
      });
      return instance;
    });
  }
}
