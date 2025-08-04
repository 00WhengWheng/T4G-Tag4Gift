import { Controller, Get, Post, Body } from '@nestjs/common';
import { VenueService } from './venue.service';

/**
 * Venue Controller
 * REST endpoints for venue management
 */
@Controller('venues')
export class VenueController {
  constructor(private venueService: VenueService) {}

  @Get()
  getVenues() {
    return this.venueService.getVenues();
  }

  @Post()
  createVenue(@Body() venueData: any) {
    return this.venueService.createVenue(venueData);
  }
}
