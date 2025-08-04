import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
/**
 * Enhanced Prisma Service for T4G Platform
 * Provides database connection management with proper lifecycle handling
 * Following Context7 best practices for NestJS + Prisma integration
 */
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    /**
     * Setup shutdown hooks to gracefully close Prisma connection
     * Call this in your main application
     */
    enableShutdownHooks(app: any): Promise<void>;
}
//# sourceMappingURL=prisma.service.d.ts.map