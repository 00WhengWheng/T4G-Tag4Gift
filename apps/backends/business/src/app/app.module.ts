import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { AuthModule } from './auth/auth.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { TagModule } from './tag/tag.module';
import { GiftModule } from './gift/gift.module';
import { TrpcModule } from './trpc/trpc.module';
import { PrismaModule } from '@t4g/database';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';

/**
 * Business Application Module for T4G Business Platform
 * Domain: t4g.space (Venues, Analytics, Gift Management, Business Analytics)
 */
@Module({
  imports: [
    // Global configuration
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      expandVariables: true,
    }),
    
    // Global database module
    PrismaModule,
    
    // Core modules
    TrpcModule,
    AuthModule,
    
    // Business feature modules
    TenantModule,
    UserModule,
    ShareModule,
    TagModule,
    AnalyticsModule,
    GiftModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
