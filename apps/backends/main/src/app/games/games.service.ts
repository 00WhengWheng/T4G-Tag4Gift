import { Injectable } from '@nestjs/common';
import { prisma } from '../../../../../../libs/prisma/src/prisma.service';
import { GameType } from './enums/game.enum';

@Injectable()
export class GamesService {
  // Use the imported prisma instance

  async createGameTemplate(params: {
    name: string;
    type: GameType; // Changed from string to GameType
    category?: string;
    difficulty?: string;
    structure?: any;
    description?: string;
    gdevelopProjectUrl?: string;
  }) {
    return prisma.gameTemplate.create({
      data: {
        name: params.name,
        type: params.type,
        category: params.category,
        difficulty: params.difficulty,
        structure: params.structure,
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
    // Add static URL for GDevelop games
    const templates = await prisma.gameTemplate.findMany({
      where: {
        isActive: true,
        ...(category ? { category } : {}),
        ...(type ? { type: type as any } : {}),
      },
    });
    return templates.map((t: any) => {
      let gdevelopProjectUrl = t.gdevelopProjectUrl;
      if (!gdevelopProjectUrl) {
        if (t.type === 'QUIZ') {
          // Use static route for quiz games
          gdevelopProjectUrl = '/games/quiz';
        } else {
          // Use static URL for GDevelop games (by id and category)
          gdevelopProjectUrl = `/games/${t.category}/${t.id}/index.html`;
        }
      }
      return { ...t, gdevelopProjectUrl };
    });
  }

  async getGameData(gameId: string) {
    // Fetch game data for a specific game
    return prisma.gameData.findMany({
      where: { gameId },
    });
  }
}
