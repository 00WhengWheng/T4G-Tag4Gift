import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { GDevelopGamesService } from '../services/gdevelop-games.service';
import { GameTemplate } from '../entities/game-template.entity';
import { GameType } from '../enums/game.enum';
import { UseGuards } from '@nestjs/common';
// Uncomment when you implement authentication
// import { AuthGuard } from '../../auth/guards/auth.guard';

@Resolver(() => GameTemplate)
export class GDevelopGamesResolver {
  constructor(private readonly gdevelopGamesService: GDevelopGamesService) {}

  @Query(() => [GameTemplate], { name: 'gdevelopGames' })
  async getGDevelopGames(
    @Args('category', { type: () => String, nullable: true }) category?: string,
  ): Promise<GameTemplate[]> {
    const templates = await this.gdevelopGamesService.getGDevelopGameTemplates(category);
    
    return templates.map((t: any) => ({
      id: t.id,
      name: t.name,
      description: t.description ?? undefined,
      type: t.type,
      category: t.category ?? undefined,
      difficulty: t.difficulty ?? undefined,
      structure: JSON.stringify(t.structure),
      isActive: t.isActive,
      gdevelopProjectUrl: (t.gdevelopProjectUrl ?? this.getDefaultGDevelopUrl(t.type, t.category ?? undefined)) ?? undefined,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));
  }

  @Query(() => GameTemplate, { name: 'gdevelopGame' })
  async getGDevelopGame(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.getGDevelopGameById(id);
    
    if (!template) {
      throw new Error(`Game template with ID ${id} not found`);
    }
    
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

  @Mutation(() => GameTemplate)
  // Uncomment when you implement authentication
  // @UseGuards(AuthGuard)
  async registerGDevelopGame(
    @Args('name', { type: () => String }) name: string,
    @Args('type', { type: () => String }) type: string,
    @Args('category', { type: () => String }) category: string,
    @Args('gdevelopProjectUrl', { type: () => String }) gdevelopProjectUrl: string,
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('difficulty', { type: () => String, nullable: true }) difficulty?: string,
    @Args('structure', { type: () => String, nullable: true }) structure?: string,
  ): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.registerGDevelopGame({
      name,
      type,
      category,
      description,
      difficulty,
      gdevelopProjectUrl,
      structure: structure ? JSON.parse(structure) : {},
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
  }

  @Mutation(() => GameTemplate)
  // Uncomment when you implement authentication
  // @UseGuards(AuthGuard)
  async updateGDevelopGame(
    @Args('id', { type: () => ID }) id: string,
    @Args('name', { type: () => String, nullable: true }) name?: string,
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('isActive', { type: () => Boolean, nullable: true }) isActive?: boolean,
    @Args('gdevelopProjectUrl', { type: () => String, nullable: true }) gdevelopProjectUrl?: string,
    @Args('structure', { type: () => String, nullable: true }) structure?: string,
  ): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.updateGDevelopGame(id, {
      name,
      description,
      isActive,
      gdevelopProjectUrl,
      structure: structure ? JSON.parse(structure) : undefined,
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
  }

  @Mutation(() => Boolean)
  // Uncomment when you implement authentication
  // @UseGuards(AuthGuard)
  async recordGDevelopGameSession(
    @Args('userId', { type: () => ID }) userId: string,
    @Args('gameId', { type: () => ID }) gameId: string,
    @Args('score', { type: () => Number, nullable: true }) score?: number,
    @Args('timeSpent', { type: () => Number, nullable: true }) timeSpent?: number,
  ): Promise<boolean> {
    try {
      await this.gdevelopGamesService.recordGameSession({
        userId,
        gameId,
        score,
        timeSpent,
        completedAt: new Date(),
      });
      return true;
    } catch (error) {
      console.error('Error recording game session:', error);
      return false;
    }
  }

  /**
   * Helper method to get default GDevelop URL based on game type and category
   */
  private getDefaultGDevelopUrl(type: string, category?: string): string {
    if (!category) {
      return `/games/${type.toLowerCase()}/index.html`;
    }
    return `/games/${type.toLowerCase()}/${category.toLowerCase().replace(/\s+/g, '-')}/index.html`;
  }
}