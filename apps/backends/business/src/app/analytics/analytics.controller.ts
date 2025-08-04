import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

/**
 * Analytics Controller
 * REST endpoints for business analytics
 */
@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get('metrics')
  getBusinessMetrics() {
    return this.analyticsService.getBusinessMetrics();
  }

  @Get('venue/:id')
  getVenueAnalytics(@Param('id') venueId: string) {
    return this.analyticsService.getVenueAnalytics(venueId);
  }
}
