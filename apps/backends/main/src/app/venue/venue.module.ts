import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { PrismaService } from '@t4g/database';

/**
 * Venue Module for User Platform
 * Handles venue discovery, scanning, map visualization, and user interactions
 */
@Module({
  providers: [VenueService, PrismaService],
  controllers: [VenueController],
  exports: [VenueService],
})
export class VenueModule {}
