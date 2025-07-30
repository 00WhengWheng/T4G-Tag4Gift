import { Injectable } from '@nestjs/common';
import { prisma } from '../../../../../../../libs/prisma/src/prisma.service';
import { GameType } from '../enums/game-type.enum';

@Injectable()
export class GDevelopGamesService {
  /**
   * Get all GDevelop game templates
   * @param category Optional category filter
   * @returns Array of game templates
   */
  async getGDevelopGameTemplates(category?: string) {
    const gameTypes = [GameType.PUZZLE, GameType.REACTION, GameType.MUSIC];
    
    return prisma.gameTemplate.findMany({
      where: {
        isActive: true,
        type: { in: gameTypes },
        ...(category ? { category } : {}),
      },
    });
  }

  /**
   * Register a new GDevelop game template
   * @param params Game template parameters
   * @returns Created game template
   */
  async registerGDevelopGame(params: {
    name: string;
    type: GameType;
    category: string;
    description?: string;
    difficulty?: string;
    gdevelopProjectUrl: string;
    structure?: any;
  }) {
    const { name, type, category, description, difficulty, gdevelopProjectUrl, structure } = params;
    return prisma.gameTemplate.create({
      data: {
        name,
        description,
        type,
        category,
        difficulty,
        gdevelopProjectUrl,
        structure: structure || {},
        isActive: true,
      },
    });
  }

  /**
   * Get game template by ID
   * @param id Template ID
   * @returns Game template
   */
  async getGDevelopGameById(id: string) {
    return prisma.gameTemplate.findUnique({
      where: { id },
    });
  }

  /**
   * Update GDevelop game template
   * @param id Template ID
   * @param data Update data
   * @returns Updated template
   */
  async updateGDevelopGame(id: string, data: {
    name?: string;
    description?: string;
    isActive?: boolean;
    gdevelopProjectUrl?: string;
    structure?: any;
  }) {
    return prisma.gameTemplate.update({
      where: { id },
      data,
    });
  }

  /**
   * Record game session result
   * @param params Session parameters
   * @returns Created game result
   */
  async recordGameSession(params: {
    userId: string;
    gameId: string;
    score?: number;
    timeSpent?: number;
    completedAt?: Date;
  }) {
    const { userId, gameId, score, timeSpent, completedAt } = params;
    
    return prisma.standaloneGameSession.create({
      data: {
        userId,
        sessionId: `${userId}-${gameId}-${Date.now()}`,
        gameType: await this.getGameTypeById(gameId),
        score,
        timeSpent,
        completedAt,
        difficulty: 'medium', // Default value, can be made dynamic
        createdAt: new Date(),
      },
    });
  }

  /**
   * Helper method to get game type by ID
   * @param gameId Game ID
   * @returns Game type
   */
  private async getGameTypeById(gameId: string): Promise<GameType> {
    const game = await prisma.gameTemplate.findUnique({
      where: { id: gameId },
      select: { type: true },
    });
    return (game?.type as GameType) || GameType.PUZZLE;
  }
}