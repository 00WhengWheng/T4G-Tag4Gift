import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Global Prisma Module for T4G Platform
 * Provides database access across all applications (main + business backends)
 * Following Context7 NestJS + Prisma best practices
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
