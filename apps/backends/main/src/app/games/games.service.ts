import { Injectable } from '@nestjs/common';
import { prisma } from '../../../../../../libs/prisma/src/prisma.service';
import { InputJsonValue } from '@prisma/client/runtime/library';
import { GameType } from './enums/game.enum';

@Injectable()
export class GamesService {
  // Use the imported prisma instance

  async createGameTemplate(params: {
    name: string;
    type: GameType; // Changed from string to GameType
    category?: string;
    difficulty?: string;
    structure?: InputJsonValue | null;
    description?: string;
    gdevelopProjectUrl?: string;
  }) {
    return prisma.gameTemplate.create({
      data: {
        name: params.name,
        type: params.type,
        category: params.category,
        difficulty: params.difficulty,
        structure: params.structure ?? null,
        description: params.description,
        isActive: true,
        gdevelopProjectUrl: params.gdevelopProjectUrl,
      },
    });
  }

  async getCategories(): Promise<string[]> {
    // Fetch distinct categories from GameTemplate
    const categories = await prisma.gameTemplate.findMany({
      where: { isActive: true },
      select: { category: true },
      distinct: ['category'],
    });
    return categories
      .map((c: { category: string | null }) => c.category)
      .filter((cat: string | null): cat is string => typeof cat === 'string');
  }

  async getGameTypes(): Promise<string[]> {
    // Fetch distinct types from GameTemplate
    const types = await prisma.gameTemplate.findMany({
      where: { isActive: true },
      select: { type: true },
      distinct: ['type'],
    });
    return types.map((t: { type: string }) => t.type);
  }

  async getGameTemplates(category?: string, type?: string) {
    // Fetch game templates filtered by category/type
    const templates = await prisma.gameTemplate.findMany({
      where: {
        isActive: true,
        ...(category ? { category } : {}),
        ...(type ? { type: type as GameType } : {}),
      },
    });

    return templates.map((t) => {
      // Robust gdevelopProjectUrl assignment
      let gdevelopProjectUrl = t.gdevelopProjectUrl;
      if (!gdevelopProjectUrl || gdevelopProjectUrl.trim() === '') {
        switch (t.type) {
          case 'QUIZ':
            gdevelopProjectUrl = '/games/quiz';
            break;
          case 'PUZZLE':
            gdevelopProjectUrl = '/games/puzzle';
            break;
          default:
            // Fallback to category/id-based URL if category and id exist
            if (t.category && t.id) {
              gdevelopProjectUrl = `/games/${t.category}/${t.id}/index.html`;
            } else {
              gdevelopProjectUrl = '/games/default';
            }
        }
      }

      // Strict GameType mapping
      // Always use enum lookup for strict GameType enforcement
      let mappedType: GameType;
      if (typeof t.type === 'string' && GameType[t.type as keyof typeof GameType]) {
        mappedType = GameType[t.type as keyof typeof GameType];
      } else if (typeof t.type === 'number' && Object.values(GameType).includes(t.type)) {
        mappedType = t.type as GameType;
      } else {
        mappedType = GameType.QUIZ;
      }

      // Return enhanced template object with correct types for GraphQL
      return {
        id: t.id,
        name: t.name,
        description: t.description ?? '',
        type: mappedType,
        category: t.category ?? '',
        difficulty: t.difficulty ?? '',
        structure: t.structure ? JSON.stringify(t.structure) : '',
        isActive: t.isActive,
        gdevelopProjectUrl,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      };
    });
  }

  async getGameData(gameId: string) {
    // Fetch game data for a specific game
    return prisma.gameData.findMany({
      where: { gameId },
    });
  }
}
