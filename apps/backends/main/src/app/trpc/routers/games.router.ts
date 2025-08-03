import { Injectable } from '@nestjs/common';
import { GamesService } from '../../games/games.service';
import { z } from 'zod';

// Define input/output schemas
const gameTypeSchema = z.enum(['QUIZ', 'PUZZLE', 'ACTION', 'STRATEGY']);
const gameTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: gameTypeSchema,
  category: z.string(),
  difficulty: z.string(),
  structure: z.string(),
  isActive: z.boolean(),
  gdevelopProjectUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

@Injectable()
export class GamesRouter {
  constructor(private readonly gamesService: GamesService) {}

  // Games router procedures
  getRoutes() {
    return {
      getAll: {
        input: z.object({}).optional(),
        output: z.array(gameTemplateSchema),
        handler: async () => {
          return await this.gamesService.getGameTemplates();
        },
      },
      getByType: {
        input: z.object({
          type: gameTypeSchema,
        }),
        output: z.array(gameTemplateSchema),
        handler: async (input: { type: string }) => {
          return await this.gamesService.getGameTemplates(undefined, input.type as any);
        },
      },
      getCategories: {
        input: z.object({}).optional(),
        output: z.array(z.string()),
        handler: async () => {
          return await this.gamesService.getCategories();
        },
      },
    };
  }
}
