import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { GamesService } from '../../game/game.service';
import { GDevelopGamesService } from '../../game/gdevelop/gdevelop-games.service';
import { GameType } from '../../game/enums/game-type.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesRouter {
  constructor(
    private readonly gamesService: GamesService,
    private readonly gdevelopGamesService: GDevelopGamesService
  ) {}

  getRoutes() {
    return router({
      // Game Templates
      getTemplates: publicProcedure
        .input(z.object({
          category: z.string().optional(),
          type: z.nativeEnum(GameType).optional(),
        }))
        .query(async ({ input }) => {
          return this.gamesService.getGameTemplates(input.category, input.type);
        }),

      createTemplate: publicProcedure
        .input(z.object({
          name: z.string(),
          type: z.nativeEnum(GameType),
          category: z.string().optional(),
          difficulty: z.string().optional(),
          structure: z.string(),
          description: z.string().optional(),
          gdevelopProjectUrl: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          return this.gamesService.createGameTemplate({
            name: input.name,
            type: input.type,
            category: input.category,
            difficulty: input.difficulty,
            structure: input.structure ? JSON.parse(input.structure) : undefined,
            description: input.description,
            gdevelopProjectUrl: input.gdevelopProjectUrl,
          });
        }),

      // GDevelop Games
      gdevelop: router({
        getGames: publicProcedure
          .input(z.object({
            category: z.string().optional(),
            type: z.nativeEnum(GameType).optional(),
          }))
          .query(async ({ input }) => {
            const templates = await this.gdevelopGamesService.getGDevelopGameTemplates(input.category);
            
            return templates.map((t: any) => ({
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
            }));
          }),

        getById: publicProcedure
          .input(z.string())
          .query(async ({ input: id }) => {
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
          }),

        create: publicProcedure
          .input(z.object({
            name: z.string(),
            type: z.nativeEnum(GameType),
            category: z.string().optional(),
            difficulty: z.string().optional(),
            structure: z.string(),
            gdevelopProjectUrl: z.string().optional(),
          }))
          .mutation(async ({ input }) => {
            const template = await this.gdevelopGamesService.registerGDevelopGame({
              name: input.name,
              type: input.type,
              category: input.category,
              difficulty: input.difficulty,
              structure: input.structure ? JSON.parse(input.structure) : {},
              gdevelopProjectUrl: input.gdevelopProjectUrl,
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
          }),

        update: publicProcedure
          .input(z.object({
            id: z.string(),
            name: z.string().optional(),
            type: z.nativeEnum(GameType).optional(),
            category: z.string().optional(),
            difficulty: z.string().optional(),
            structure: z.string().optional(),
            gdevelopProjectUrl: z.string().optional(),
          }))
          .mutation(async ({ input }) => {
            const { id, ...updateData } = input;
            const template = await this.gdevelopGamesService.updateGDevelopGame(id, updateData);
            
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
          }),

        recordSession: publicProcedure
          .input(z.object({
            userId: z.string(),
            gameId: z.string(),
            score: z.number().optional(),
            timeSpent: z.number().optional(),
            completedAt: z.date().optional(),
          }))
          .mutation(async ({ input }) => {
            return this.gdevelopGamesService.recordGameSession({
              userId: input.userId,
              gameId: input.gameId,
              score: input.score,
              timeSpent: input.timeSpent,
              completedAt: input.completedAt,
            });
          }),
      }),

      // Get game categories
      getCategories: publicProcedure
        .query(async () => {
          // Return the available game categories
          return ['Puzzle', 'Music', 'Reaction', 'Arcade', 'Quiz'];
        }),
    });
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
