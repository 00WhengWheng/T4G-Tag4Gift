import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CoinType, TransactionSource } from '@prisma/client';
import { GameType } from '../../games/enums/game-type.enum';

export interface EarnCoinsInput {
  auth0Id: string;
  type: CoinType;
  amount: number;
  source: TransactionSource;
  sourceId?: string;
  description?: string;
  metadata?: any;
}

@Injectable()
export class CoinsService {
  private readonly logger = new Logger(CoinsService.name);
  constructor(private prisma: PrismaService) {}

  /**
   * Helper method to get internal user ID from Auth0 ID
   */
  private async getUserIdFromAuth0(auth0Id: string): Promise<string> {
    await this.getUserCoinBalance(auth0Id);
    const user = await this.prisma.user.findUnique({ where: { auth0Id }, select: { id: true } });
    if (!user) throw new Error(`User not found for auth0Id: ${auth0Id}`);
    return user.id;
  }

  /**
   * Get user's current coin balance - creates user and balance if they don't exist
   */
  async getUserCoinBalance(auth0Id: string) {
    let user = await this.prisma.user.findUnique({ where: { auth0Id } });
    if (!user) {
      const tempEmail = `${auth0Id.replace('|', '_')}@temp.t4g.fun`;
      const tempUsername = auth0Id.replace('|', '_');
      try {
        user = await this.prisma.user.create({
          data: {
            auth0Id,
            email: tempEmail,
            username: tempUsername,
            firstName: 'Anonymous',
            lastName: 'User',
            role: 'USER',
            status: 'ACTIVE',
            authProvider: 'GOOGLE',
            language: 'en',
            timezone: 'UTC',
            password: '',
          },
        });
        this.logger.log(`Created new user for auth0Id: ${auth0Id}`);
      } catch (error) {
        this.logger.error(`Failed to create user for auth0Id: ${auth0Id}`, error);
        throw new Error('Failed to create user');
      }
    }
    let balance = await this.prisma.coinBalance.findUnique({ where: { userId: user.id } });
    if (!balance) {
      balance = await this.prisma.coinBalance.create({
        data: {
          userId: user.id,
          tagCoins: 0,
          shareCoins: 0,
          gameCoins: 0,
          totalCoins: 0,
        },
      });
      this.logger.log(`Created coin balance for user: ${user.id}`);
    }
    return balance;
  }

  /**
   * Unified coin generation for game, share, scan
   */
  async generateCoinForAction(params: {
    auth0Id: string;
    action: 'GAME' | 'SHARE' | 'SCAN';
    source: TransactionSource;
    sourceId?: string;
    description?: string;
    metadata?: any;
    gameType?: GameType;
    score?: number;
    tagId?: string;
    tenantId?: string;
    amount?: number;
  }): Promise<any> {
    const { auth0Id, action, source, sourceId, description, metadata, gameType, score, tagId, tenantId, amount } = params;
    const userId = await this.getUserIdFromAuth0(auth0Id);
    let coinAmount = amount ?? 1;

    // Game coin eligibility (max 2/week per gameType)
    if (action === 'GAME' && gameType) {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const coinCount = await this.prisma.coinTransaction.count({
        where: {
          userId,
          type: 'GAME',
          createdAt: { gte: oneWeekAgo },
          metadata: { path: ['gameType'], equals: gameType },
        },
      });
      if (coinCount >= 2) throw new BadRequestException('Game coin limit reached for this week');
    }

    // Scan coin eligibility (per tag/tenant logic)
    if (action === 'SCAN' && tagId) {
      // Example: check scan limit per tag per day
      const today = new Date();
      today.setHours(0,0,0,0);
      const scanCount = await this.prisma.scan.count({
        where: {
          userId,
          tagId,
          createdAt: { gte: today },
        },
      });
      const tag = await this.prisma.tag.findUnique({ where: { id: tagId } });
      if (tag && scanCount >= tag.maxScansPerUser) throw new BadRequestException('Scan limit reached');
    }

    // Share coin eligibility (can add logic if needed)

    // Create coin transaction and update balance
    return this.prisma.$transaction(async (tx) => {
      await tx.coinTransaction.create({
        data: {
          userId,
          type: action,
          amount: coinAmount,
          source,
          sourceId,
          description: description || `Earned ${coinAmount} ${action.toLowerCase()} coin(s)`,
          metadata: {
            ...(metadata || {}),
            ...(gameType ? { gameType } : {}),
            ...(score ? { score } : {}),
            ...(tagId ? { tagId } : {}),
            ...(tenantId ? { tenantId } : {}),
          },
        },
      });
      const coinBalance = await tx.coinBalance.upsert({
        where: { userId },
        update: {
          [action === 'TAG' ? 'tagCoins' : action === 'SHARE' ? 'shareCoins' : 'gameCoins']: {
            increment: coinAmount,
          },
        },
        create: {
          userId,
          tagCoins: action === 'TAG' ? coinAmount : 0,
          shareCoins: action === 'SHARE' ? coinAmount : 0,
          gameCoins: action === 'GAME' ? coinAmount : 0,
        },
      });
      await tx.coinBalance.update({
        where: { userId },
        data: {
          totalCoins: coinBalance.tagCoins + coinBalance.shareCoins + coinBalance.gameCoins,
        },
      });
      return { success: true };
    });
  }

  /**
   * Get user's coin transaction history
   */
  async getUserCoinHistory(auth0Id: string, limit = 50, offset = 0) {
    const userId = await this.getUserIdFromAuth0(auth0Id);
    return this.prisma.coinTransaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });
  }

  /**
   * Get leaderboard based on total coins
   */
  async getCoinLeaderboard(limit = 10) {
    return this.prisma.coinBalance.findMany({
      take: limit,
      orderBy: { totalCoins: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
    });
  }
}
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CoinType, TransactionSource } from '@prisma/client';

export interface EarnCoinsInput {
  auth0Id: string;
  type: CoinType;
  amount: number;
  source: TransactionSource;
  sourceId?: string;
  description?: string;
  metadata?: any;
}

export interface SpendCoinsInput {
  auth0Id: string;
  type: CoinType;
  amount: number;
  source: TransactionSource;
  sourceId?: string;
  description?: string;
  metadata?: any;
}

@Injectable()
export class CoinsService {
  private readonly logger = new Logger(CoinsService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Helper method to get internal user ID from Auth0 ID
   */
  private async getUserIdFromAuth0(auth0Id: string): Promise<string> {
    // Ensure the user exists (will create if needed)
    await this.getUserCoinBalance(auth0Id);
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });
    
    if (!user) {
      throw new Error(`User not found for auth0Id: ${auth0Id}`);
    }
    
    return user.id;
  }

  /**
   * Get user's current coin balance - creates user and balance if they don't exist
   */
  async getUserCoinBalance(auth0Id: string) {
    // First, try to find the user by auth0Id
    let user = await this.prisma.user.findUnique({
      where: { auth0Id },
    });

    // If user doesn't exist, create them
    if (!user) {
      // Extract email from auth0Id if possible, or generate a temporary one
      const tempEmail = `${auth0Id.replace('|', '_')}@temp.t4g.fun`;
      const tempUsername = auth0Id.replace('|', '_');
      
      try {
        user = await this.prisma.user.create({
          data: {
            auth0Id,
            email: tempEmail,
            username: tempUsername,
            firstName: 'Anonymous',
            lastName: 'User',
            role: 'USER',
            status: 'ACTIVE',
            authProvider: 'GOOGLE', // Closest to Auth0 from available options
            language: 'en',
            timezone: 'UTC',
            password: '', // Auth0 handles authentication
          },
        });
        this.logger.log(`Created new user for auth0Id: ${auth0Id}`);
      } catch (error) {
        this.logger.error(`Failed to create user for auth0Id: ${auth0Id}`, error);
        throw new Error('Failed to create user');
      }
    }

    // Now get or create the coin balance using the internal user.id
    let balance = await this.prisma.coinBalance.findUnique({
      where: { userId: user.id },
    });

    if (!balance) {
      // Create initial balance if it doesn't exist
      balance = await this.prisma.coinBalance.create({
        data: {
          userId: user.id,
          tagCoins: 0,
          shareCoins: 0,
          gameCoins: 0,
          totalCoins: 0,
        },
      });
      this.logger.log(`Created coin balance for user: ${user.id}`);
    }

    return balance;
  }

  /**
   * Earn coins for a user and update their balance
   */
  async earnCoins(input: EarnCoinsInput) {
    const { auth0Id, type, amount, source, sourceId, description, metadata } = input;
    const userId = await this.getUserIdFromAuth0(auth0Id);

    this.logger.log(`User ${auth0Id} earning ${amount} ${type} coins from ${source}`);

    return this.prisma.$transaction(async (tx) => {
      // Create transaction record
      await tx.coinTransaction.create({
        data: {
          userId,
          type,
          amount: Math.abs(amount), // Ensure positive for earning
          source,
          sourceId,
          description: description || `Earned ${amount} ${type.toLowerCase()} coins from ${source.toLowerCase()}`,
          metadata,
        },
      });

      // Update user's coin balance
      const coinBalance = await tx.coinBalance.upsert({
        where: { userId },
        update: {
          [type === 'TAG' ? 'tagCoins' : type === 'SHARE' ? 'shareCoins' : 'gameCoins']: {
            increment: Math.abs(amount),
          },
        },
        create: {
          userId,
          tagCoins: type === 'TAG' ? Math.abs(amount) : 0,
          shareCoins: type === 'SHARE' ? Math.abs(amount) : 0,
          gameCoins: type === 'GAME' ? Math.abs(amount) : 0,
        },
      });

      // Update total coins
      const updatedBalance = await tx.coinBalance.update({
        where: { userId },
        data: {
          totalCoins: coinBalance.tagCoins + coinBalance.shareCoins + coinBalance.gameCoins + Math.abs(amount),
        },
      });

      return updatedBalance;
    });
  }

  /**
   * Spend coins for a user (for challenge entry, etc.)
   */
  async spendCoins(input: SpendCoinsInput) {
    const { auth0Id, type, amount, source, sourceId, description, metadata } = input;
    const userId = await this.getUserIdFromAuth0(auth0Id);

    this.logger.log(`User ${auth0Id} spending ${amount} ${type} coins for ${source}`);

    // First check if user has enough coins
    const balance = await this.getUserCoinBalance(auth0Id);
    const currentAmount = type === 'TAG' ? balance.tagCoins : 
                         type === 'SHARE' ? balance.shareCoins : 
                         balance.gameCoins;

    if (currentAmount < Math.abs(amount)) {
      throw new Error(`Insufficient ${type.toLowerCase()} coins. Has ${currentAmount}, needs ${Math.abs(amount)}`);
    }

    return this.prisma.$transaction(async (tx) => {
      // Create negative transaction record
      await tx.coinTransaction.create({
        data: {
          userId,
          type,
          amount: -Math.abs(amount), // Negative for spending
          source,
          sourceId,
          description: description || `Spent ${amount} ${type.toLowerCase()} coins for ${source.toLowerCase()}`,
          metadata,
        },
      });

      // Update user's coin balance
      const coinBalance = await tx.coinBalance.update({
        where: { userId },
        data: {
          [type === 'TAG' ? 'tagCoins' : type === 'SHARE' ? 'shareCoins' : 'gameCoins']: {
            decrement: Math.abs(amount),
          },
        },
      });

      // Update total coins
      const updatedBalance = await tx.coinBalance.update({
        where: { userId },
        data: {
          totalCoins: coinBalance.tagCoins + coinBalance.shareCoins + coinBalance.gameCoins,
        },
      });

      return updatedBalance;
    });
  }

  /**
   * Get user's coin transaction history
   */
  async getUserCoinHistory(auth0Id: string, limit = 50, offset = 0) {
    const userId = await this.getUserIdFromAuth0(auth0Id);
    
    return this.prisma.coinTransaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });
  }

  /**
   * Get user's coin statistics for a specific time period
   */
  async getUserCoinStats(userId: string, startDate: Date, endDate: Date) {
    const transactions = await this.prisma.coinTransaction.findMany({
      where: {
        userId,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const stats = {
      tagCoins: { earned: 0, spent: 0 },
      shareCoins: { earned: 0, spent: 0 },
      gameCoins: { earned: 0, spent: 0 },
    };

    transactions.forEach((tx) => {
      const coinField = tx.type.toLowerCase() + 'Coins' as keyof typeof stats;
      if (tx.amount > 0) {
        stats[coinField].earned += tx.amount;
      } else {
        stats[coinField].spent += Math.abs(tx.amount);
      }
    });

    return stats;
  }

  /**
   * Get leaderboard based on total coins
   */
  async getCoinLeaderboard(limit = 10) {
    return this.prisma.coinBalance.findMany({
      take: limit,
      orderBy: { totalCoins: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
    });
  }

  /**
   * Award coins for tag scanning
   */
  async awardTagCoins(auth0Id: string, tagId: string, venueId?: string) {
    return this.earnCoins({
      auth0Id,
      type: 'TAG',
      amount: 1, // 1 coin per tag scan
      source: 'TAG_SCAN',
      sourceId: tagId,
      description: 'Earned by scanning QR/NFC tag',
      metadata: { tagId, venueId },
    });
  }

  /**
   * Award coins for social sharing
   */
  async awardShareCoins(auth0Id: string, shareId: string, platform: string) {
    return this.earnCoins({
      auth0Id,
      type: 'SHARE',
      amount: 1, // 1 coin per social share
      source: 'SOCIAL_SHARE',
      sourceId: shareId,
      description: `Earned by sharing on ${platform}`,
      metadata: { shareId, platform },
    });
  }

  /**
   * Award coins for game completion
   */
  async awardGameCoins(auth0Id: string, gameId: string, score?: number) {
    // Base amount: 1 coin for playing, bonus based on performance
    let amount = 1;
    
    // TODO: Add performance-based bonus logic
    // if (score && score > someThreshold) amount += bonusAmount;

    return this.earnCoins({
      auth0Id,
      type: 'GAME',
      amount,
      source: 'GAME_PLAY',
      sourceId: gameId,
      description: 'Earned by playing game',
      metadata: { gameId, score },
    });
  }
}
