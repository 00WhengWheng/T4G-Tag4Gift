import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';

/**
 * Venue Management Module
 * Handles business venue creation, management, and configuration
 */
@Module({
  providers: [VenueService],
  controllers: [VenueController],
  exports: [VenueService],
})
export class VenueModule {}
