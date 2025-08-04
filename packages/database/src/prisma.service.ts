import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Enhanced Prisma Service for T4G Platform
 * Provides database connection management with proper lifecycle handling
 * Following Context7 best practices for NestJS + Prisma integration
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    this.logger.log('Connecting to database...');
    await this.$connect();
    this.logger.log('Database connected successfully');
  }

  async onModuleDestroy() {
    this.logger.log('Disconnecting from database...');
    await this.$disconnect();
    this.logger.log('Database disconnected');
  }

  /**
   * Setup shutdown hooks to gracefully close Prisma connection
   * Call this in your main application
   */
  async enableShutdownHooks(app: any) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
