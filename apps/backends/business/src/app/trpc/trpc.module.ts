import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
import { TrpcService } from './trpc.service';
import { AppRouter } from './app.router';
import { AnalyticsRouter } from './routers/analytics.router';
import { VenuesRouter } from './routers/venues.router';
import { ChallengesRouter } from './routers/challenges.router';
import { TenantModule } from '../tenant/tenant.module';
import { VenueModule } from '../venue/venue.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { GiftModule } from '../gifts/gifts.module';
import { ChallengeModule } from '../challenge/challenge.module';
import { ChallengeService } from '../challenge/challenge.service';

/**
 * Business tRPC Module
 * Provides type-safe API for business operations
 */
@Module({
  imports: [TenantModule, VenueModule, AnalyticsModule, GiftModule, ChallengeModule],
  controllers: [TrpcController],
  providers: [
    TrpcService, 
    AppRouter, 
    AnalyticsRouter, 
    VenuesRouter,
    ChallengesRouter2,
    ChallengeService,
  ],
  exports: [TrpcService],
})
export class TrpcModule {}
