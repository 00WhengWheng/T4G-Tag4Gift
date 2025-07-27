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
      return {
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
      };
    });
  }

  @Mutation(() => GameTemplate)
  async createGameTemplate(
    @Args('name', { type: () => String }) name: string,
    @Args('type', { type: () => String }) type: string,
    @Args('category', { type: () => String, nullable: true }) category?: string,
    @Args('difficulty', { type: () => String, nullable: true }) difficulty?: string,
    @Args('structure', { type: () => String, nullable: true }) structure?: string,
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('gdevelopProjectUrl', { type: () => String, nullable: true }) gdevelopProjectUrl?: string,
  ): Promise<GameTemplate> {
    const template = await this.gamesService.createGameTemplate({
      name,
      type: type as GameType,
      category,
      difficulty,
      structure: structure ? JSON.parse(structure) : undefined,
      description: description ?? undefined,
      gdevelopProjectUrl: gdevelopProjectUrl ?? undefined,
    });
    let mappedType: GameType = GameType.QUIZ;
    if (template?.type && typeof template.type === 'string' && GameType[template.type as keyof typeof GameType]) {
      mappedType = GameType[template.type as keyof typeof GameType];
    }
    return {
      ...template,
      description: template.description ?? undefined,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      structure: JSON.stringify(template.structure),
      type: mappedType,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
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
    @Args('type', { type: () => String, nullable: true }) type?: string
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
      return {
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
      };
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
      return {
        id: d.id,
        type: mappedType,
        status: 'ACTIVE', // Default status or get from data if available
        category: template?.category || undefined,
        name: template?.name || `Game ${d.id}`,
        description: template?.description || undefined,
        gdevelopProjectUrl: template?.gdevelopProjectUrl || `/games/${template?.category || 'default'}/index.html`,
      };
    });
  }
}
