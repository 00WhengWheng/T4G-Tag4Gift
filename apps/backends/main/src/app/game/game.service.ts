import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { InputJsonValue } from '@prisma/client/runtime/library';
import { GameType } from './enums/game-type.enum';
import { GDevelopGamesService } from './gdevelop/gdevelop-games.service';

@Injectable()
export class GameService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gdevelopGamesService: GDevelopGamesService
  ) {}

  async findMany(options?: {
    where?: any;
    take?: number;
    skip?: number;
    orderBy?: any;
  }) {
    return this.prisma.gameTemplate.findMany({
      where: options?.where,
      take: options?.take,
      skip: options?.skip,
      orderBy: options?.orderBy || { createdAt: 'desc' },
    });
  }

  async findById(gameId: string) {
    const game = await this.prisma.gameTemplate.findUnique({
      where: { id: gameId },
    });
    
    if (!game) return null;
    
    const gdevelopProjectUrl = typeof game.gdevelopProjectUrl === 'string' ? game.gdevelopProjectUrl : '';
    return {
      id: game.id,
      name: game.name,
      description: game.description ?? '',
      type: game.type as GameType,
      category: game.category ?? '',
      difficulty: game.difficulty ?? '',
      structure: game.structure ? JSON.stringify(game.structure) : '',
      isActive: game.isActive,
      gdevelopProjectUrl,
      createdAt: game.createdAt,
      updatedAt: game.updatedAt,
    };
  }

  async findBySlug(slug: string) {
    const game = await this.prisma.gameTemplate.findFirst({
      where: { 
        OR: [
          { name: { contains: slug, mode: 'insensitive' } },
          { id: slug }
        ]
      },
    });
    
    if (!game) return null;
    
    const gdevelopProjectUrl = typeof game.gdevelopProjectUrl === 'string' ? game.gdevelopProjectUrl : '';
    return {
      id: game.id,
      name: game.name,
      description: game.description ?? '',
      type: game.type as GameType,
      category: game.category ?? '',
      difficulty: game.difficulty ?? '',
      structure: game.structure ? JSON.stringify(game.structure) : '',
      isActive: game.isActive,
      gdevelopProjectUrl,
      createdAt: game.createdAt,
      updatedAt: game.updatedAt,
    };
  }

  async createGameTemplate(params: {
    name: string;
    type: GameType;
    category?: string;
    difficulty?: string;
    structure?: InputJsonValue | null;
    description?: string;
    gdevelopProjectUrl?: string;
  }) {
    // Basic validation
    if (!params.name || !params.type) {
      throw new Error('Missing required fields: name, type');
    }
    try {
      return await this.prisma.gameTemplate.create({
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
    } catch (err) {
      throw new Error('Failed to create game template: ' + (err.message || err));
    }
  }

  async getCategories(): Promise<string[]> {
    // Fetch distinct categories from GameTemplate
    const categories = await this.prisma.gameTemplate.findMany({
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
    const types = await this.prisma.gameTemplate.findMany({
      where: { isActive: true },
      select: { type: true },
      distinct: ['type'],
    });
    return types.map((t: { type: string }) => t.type);
  }

  async getGameTemplates(category?: string, type?: GameType) {
    // Use GDevelopGamesService for GDevelop types, fallback to Prisma for others
    const gdevelopTypes = [GameType.PUZZLE, GameType.REACTION, GameType.MUSIC];
    if (type && gdevelopTypes.includes(type)) {
      // Delegate to GDevelopGamesService for GDevelop games
      return await this.gdevelopGamesService.getGDevelopGameTemplates(category);
    }
    // Otherwise, fetch from Prisma directly
    const templates = await this.prisma.gameTemplate.findMany({
      where: {
        isActive: true,
        ...(category ? { category } : {}),
        ...(type ? { type } : {}),
      },
    });
    return templates.map((t) => {
      let gdevelopProjectUrl = t.gdevelopProjectUrl;
      if (!gdevelopProjectUrl || gdevelopProjectUrl.trim() === '') {
        switch (t.type) {
          case 'QUIZ':
            gdevelopProjectUrl = '/games/quiz';
            break;
          case 'PUZZLE':
            gdevelopProjectUrl = '/games/puzzle';
            break;
          case 'MUSIC':
            gdevelopProjectUrl = '/games/music';
            break;
          case 'REACTION':
            gdevelopProjectUrl = '/games/reaction';
            break;
          default:
            if (t.category && t.id) {
              gdevelopProjectUrl = `/games/${t.category}/${t.id}/index.html`;
            } else {
              gdevelopProjectUrl = '/games/default';
            }
        }
      }
      return {
        id: t.id,
        name: t.name,
        description: t.description ?? '',
        type: t.type as GameType,
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
    return this.prisma.gameData.findMany({
      where: { gameId },
    });
  }
}
