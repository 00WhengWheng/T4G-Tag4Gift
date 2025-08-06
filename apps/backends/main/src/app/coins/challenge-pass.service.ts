import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CoinsService } from './coins.service';

export interface ChallengePassRequirement {
  tagCoins: number;
  shareCoins: number;
  gameCoins: number;
}

export interface WeeklyProgress {
  tagCoins: number;
  shareCoins: number;
  gameCoins: number;
  hasRequiredCoins: boolean;
  canGeneratePass: boolean;
  nextResetDate: Date;
}

@Injectable()
export class ChallengePassService {
  private readonly logger = new Logger(ChallengePassService.name);

  // Weekly requirement: 3 tag + 2 share + 4 game coins = 1 challenge pass
  private readonly WEEKLY_REQUIREMENT: ChallengePassRequirement = {
    tagCoins: 3,
    shareCoins: 2,
    gameCoins: 4,
  };

  constructor(
    private prisma: PrismaService,
    private coinsService: CoinsService,
  ) {}

  /**
   * Get the start of the current week (Monday 00:00:00 UTC)
   */
  private getWeekStart(date = new Date()): Date {
    const d = new Date(date);
    const day = d.getUTCDay();
    const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    d.setUTCDate(diff);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }

  /**
   * Get the end of the current week (Sunday 23:59:59 UTC)
   */
  private getWeekEnd(date = new Date()): Date {
    const weekStart = this.getWeekStart(date);
    const weekEnd = new Date(weekStart);
    weekEnd.setUTCDate(weekEnd.getUTCDate() + 6);
    weekEnd.setUTCHours(23, 59, 59, 999);
    return weekEnd;
  }

  /**
   * Check user's weekly progress towards challenge pass eligibility
   */
  async checkWeeklyProgress(auth0Id: string): Promise<WeeklyProgress> {
    // Get internal user ID from auth0Id
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });

    if (!user) {
      // Return empty progress if user doesn't exist
      return {
        tagCoins: 0,
        shareCoins: 0,
        gameCoins: 0,
        hasRequiredCoins: false,
        canGeneratePass: false,
        nextResetDate: new Date(),
      };
    }

    const weekStart = this.getWeekStart();
    const weekEnd = this.getWeekEnd();

    this.logger.log(`Checking weekly progress for user ${auth0Id} (${weekStart.toISOString()} to ${weekEnd.toISOString()})`);

    // Get coin transactions for this week
    const stats = await this.coinsService.getUserCoinStats(user.id, weekStart, weekEnd);

    const progress: WeeklyProgress = {
      tagCoins: stats.tagCoins.earned,
      shareCoins: stats.shareCoins.earned,
      gameCoins: stats.gameCoins.earned,
      hasRequiredCoins: false,
      canGeneratePass: false,
      nextResetDate: new Date(weekEnd.getTime() + 1), // Next Monday
    };

    // Check if user has met the weekly requirements
    progress.hasRequiredCoins = 
      progress.tagCoins >= this.WEEKLY_REQUIREMENT.tagCoins &&
      progress.shareCoins >= this.WEEKLY_REQUIREMENT.shareCoins &&
      progress.gameCoins >= this.WEEKLY_REQUIREMENT.gameCoins;

    if (progress.hasRequiredCoins) {
      // Check if user has already generated a pass this week
      const existingPass = await this.prisma.challengePass.findFirst({
        where: {
          userId: user.id,
          weekStart,
        },
      });

      progress.canGeneratePass = !existingPass;
    }

    return progress;
  }

  /**
   * Generate a challenge pass for the user if they meet requirements
   */
  async generateChallengePass(auth0Id: string) {
    const progress = await this.checkWeeklyProgress(auth0Id);

    if (!progress.hasRequiredCoins) {
      throw new Error(
        `User does not meet weekly requirements. ` +
        `Needs: ${this.WEEKLY_REQUIREMENT.tagCoins} tag coins (has ${progress.tagCoins}), ` +
        `${this.WEEKLY_REQUIREMENT.shareCoins} share coins (has ${progress.shareCoins}), ` +
        `${this.WEEKLY_REQUIREMENT.gameCoins} game coins (has ${progress.gameCoins})`
      );
    }

    if (!progress.canGeneratePass) {
      throw new Error('User has already generated a challenge pass this week');
    }

    // Get the user ID
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const weekStart = this.getWeekStart();
    const weekEnd = this.getWeekEnd();

    this.logger.log(`Generating challenge pass for user ${auth0Id}`);

    return this.prisma.$transaction(async (tx) => {
      // Spend the required coins
      await this.coinsService.spendCoins({
        auth0Id,
        type: 'TAG',
        amount: this.WEEKLY_REQUIREMENT.tagCoins,
        source: 'CHALLENGE_PASS',
        description: 'Spent tag coins for weekly challenge pass',
      });

      await this.coinsService.spendCoins({
        auth0Id,
        type: 'SHARE',
        amount: this.WEEKLY_REQUIREMENT.shareCoins,
        source: 'CHALLENGE_PASS',
        description: 'Spent share coins for weekly challenge pass',
      });

      await this.coinsService.spendCoins({
        auth0Id,
        type: 'GAME',
        amount: this.WEEKLY_REQUIREMENT.gameCoins,
        source: 'CHALLENGE_PASS',
        description: 'Spent game coins for weekly challenge pass',
      });

      // Create the challenge pass
      const challengePass = await tx.challengePass.create({
        data: {
          userId: user.id,
          weekStart,
          weekEnd,
          tagCoins: this.WEEKLY_REQUIREMENT.tagCoins,
          shareCoins: this.WEEKLY_REQUIREMENT.shareCoins,
          gameCoins: this.WEEKLY_REQUIREMENT.gameCoins,
          isEligible: true,
          isUsed: false,
        },
      });

      return challengePass;
    });
  }

  /**
   * Use a challenge pass (when entering a challenge)
   */
  async useChallengePass(auth0Id: string, challengeId: string) {
    // Get user ID first
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Find an unused challenge pass for the user
    const availablePass = await this.prisma.challengePass.findFirst({
      where: {
        userId: user.id,
        isUsed: false,
        isEligible: true,
      },
      orderBy: { createdAt: 'desc' }, // Use most recent pass first
    });

    if (!availablePass) {
      throw new Error('No available challenge pass found. Generate one first by earning weekly coins.');
    }

    this.logger.log(`Using challenge pass ${availablePass.id} for user ${auth0Id} on challenge ${challengeId}`);

    // Mark the pass as used
    return this.prisma.challengePass.update({
      where: { id: availablePass.id },
      data: {
        isUsed: true,
        usedAt: new Date(),
        challengeId: challengeId,
      },
    });
  }

  /**
   * Get user's challenge passes
   */
  async getUserChallengePasses(auth0Id: string) {
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });

    if (!user) {
      return [];
    }

    return this.prisma.challengePass.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get user's available (unused) challenge passes
   */
  async getAvailableChallengePasses(auth0Id: string) {
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      select: { id: true },
    });

    if (!user) {
      return [];
    }

    return this.prisma.challengePass.findMany({
      where: {
        userId: user.id,
        isUsed: false,
        isEligible: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get challenge pass requirements for display
   */
  getWeeklyRequirements(): ChallengePassRequirement {
    return this.WEEKLY_REQUIREMENT;
  }

  /**
   * Get user's challenge pass statistics
   */
  async getUserChallengePassStats(auth0Id: string) {
    const passes = await this.getUserChallengePasses(auth0Id);
    const available = passes.filter(p => !p.isUsed && p.isEligible);
    const used = passes.filter(p => p.isUsed);

    return {
      total: passes.length,
      available: available.length,
      used: used.length,
      weeklyProgress: await this.checkWeeklyProgress(auth0Id),
      requirements: this.WEEKLY_REQUIREMENT,
    };
  }
}
