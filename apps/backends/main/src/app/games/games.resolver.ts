import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { GameCategory, GameType, GameTemplate, Game, GAME_CATEGORIES, GAME_TYPES } from './types';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => [GameTemplate], { name: 'quizTemplatesByCategory' })
  async getQuizTemplatesByCategory(
    @Args('category', { type: () => String }) category: string,
  ): Promise<GameTemplate[]> {
    const templates = await this.gamesService.getGameTemplates(category, 'QUIZ');
    return templates.map(t => ({
      id: t.id,
      name: t.name,
      description: t.description ?? undefined,
      type: t.type,
      category: t.category ?? undefined,
      difficulty: t.difficulty ?? undefined,
      structure: JSON.stringify(t.structure),
      isActive: t.isActive,
      gdevelopProjectUrl: (t as any).gdevelopProjectUrl ?? `https://gdevelop.io/project/${t.id}`,
    }));
  }

  @Mutation(() => GameTemplate)
  async createQuizTemplate(
    @Args('name', { type: () => String }) name: string,
    @Args('questions', { type: () => String }) questions: string, // JSON string
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('gdevelopProjectUrl', { type: () => String, nullable: true }) gdevelopProjectUrl?: string,
  ): Promise<GameTemplate> {
    // Save quiz template to DB using Prisma
    const template = await this.gamesService.createQuizTemplate({
      name,
      description,
      questions: JSON.parse(questions),
      gdevelopProjectUrl,
    });
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? `https://gdevelop.io/project/${template.id}`,
    };
  }

  @Query(() => [GameCategory], { name: 'gameCategories' })
  getCategories(): GameCategory[] {
    return GAME_CATEGORIES.map(name => ({ name }));
  }

  @Query(() => [GameType], { name: 'gameTypes' })
  getGameTypes(): GameType[] {
    return GAME_TYPES;
  }

  @Query(() => [GameTemplate], { name: 'gameTemplates' })
  async getGameTemplates(
    @Args('category', { type: () => String, nullable: true }) category?: string,
    @Args('type', { type: () => String, nullable: true }) type?: string,
  ): Promise<GameTemplate[]> {
    const templates = await this.gamesService.getGameTemplates(category, type);
    // Map Prisma results to GraphQL type
    return templates.map(t => ({
      id: t.id,
      name: t.name,
      description: t.description ?? undefined,
      type: t.type,
      category: t.category ?? undefined,
      difficulty: t.difficulty ?? undefined,
      structure: JSON.stringify(t.structure),
      isActive: t.isActive,
      gdevelopProjectUrl: t.gdevelopProjectUrl ?? undefined,
    }));
  }

  @Query(() => [Game], { name: 'gameData' })
  async getGameData(
    @Args('gameId', { type: () => String }) gameId: string,
  ): Promise<Game[]> {
    const data = await this.gamesService.getGameData(gameId);
    // Map Prisma results to GraphQL type
    return data.map(d => ({
      id: d.id,
      type: '', // You may want to fetch type from Game model if needed
      status: undefined,
      category: undefined,
      name: undefined,
      description: undefined,
      gdevelopProjectUrl: `https://gdevelop.io/project/${d.id}`,
    }));
  }
}
