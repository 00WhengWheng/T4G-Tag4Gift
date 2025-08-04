import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
import { TrpcService } from './trpc.service';
import { TenantModule } from '../tenant/tenant.module';
import { VenueModule } from '../venue/venue.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { GiftModule } from '../gift/gift.module';

/**
 * Business tRPC Module
 * Provides type-safe API for business operations
 */
@Module({
  imports: [TenantModule, VenueModule, AnalyticsModule, GiftModule],
  controllers: [TrpcController],
  providers: [TrpcService],
  exports: [TrpcService],
})
export class TrpcModule {}
