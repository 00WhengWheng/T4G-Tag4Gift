
import { Injectable } from '@nestjs/common';
import { prisma } from '../../../../../../libs/prisma/src/prisma.service';

@Injectable()
export class GamesService {
  // Use the imported prisma instance

  async createCategoryQuizTemplate(params: { name: string; category: string; questions: any; description?: string; gdevelopProjectUrl?: string }) {
    const { name, category, questions, description, gdevelopProjectUrl } = params;
    return prisma.gameTemplate.create({
      data: {
        name,
        description,
        type: 'QUIZ',
        category,
        structure: { questions },
        isActive: true,
        gdevelopProjectUrl,
      },
    });
  }


  async createQuizTemplate(params: { name: string; questions: any; description?: string; gdevelopProjectUrl?: string }) {
    const { name, questions, description, gdevelopProjectUrl } = params;
    return prisma.gameTemplate.create({
      data: {
        name,
        description,
        type: 'QUIZ',
        category: 'knowledge',
        structure: { questions },
        isActive: true,
        gdevelopProjectUrl,
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
      if (!gdevelopProjectUrl && t.type !== 'QUIZ') {
        // Use static URL for GDevelop games
        gdevelopProjectUrl = `/games/${t.category}/index.html`;
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
