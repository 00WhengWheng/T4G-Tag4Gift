import { 
  Controller, 
  Get, 
  Post,
  Body, 
  Param, 
  Query,
  BadRequestException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { 
  VenueService, 
  VenueDiscoveryDto, 
  VenueDetailsDto, 
  ScanVenueDto 
} from './venue.service';

/**
 * Venue Controller for User Platform
 * REST endpoints for venue discovery, scanning, challenges, and map visualization
 * Used by webapp frontend for map display and mobile apps for venue scanning
 */
@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  /**
   * Get venues for map visualization
   * Used by webapp frontend to display venues on map
   */
  @Get('map')
  async getVenuesForMap(
    @Query('userId') userId?: string,
    @Query('north') north?: string,
    @Query('south') south?: string,
    @Query('east') east?: string,
    @Query('west') west?: string,
  ) {
    let bounds;
    if (north && south && east && west) {
      try {
        bounds = {
          north: parseFloat(north),
          south: parseFloat(south),
          east: parseFloat(east),
          west: parseFloat(west),
        };
      } catch (error) {
        throw new BadRequestException('Invalid coordinate format. Provide numeric values.');
      }
    }

    return this.venueService.getVenuesForMap(userId, bounds);
  }

  /**
   * Discover venues near user location
   * Used by mobile apps for location-based venue discovery
   */
  @Get('discover')
  async discoverVenues(
    @Query('lat') latitude?: string,
    @Query('lng') longitude?: string,
    @Query('radius') radius?: string,
    @Query('category') category?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const discoveryParams: VenueDiscoveryDto = {};

    if (latitude && longitude) {
      try {
        discoveryParams.latitude = parseFloat(latitude);
        discoveryParams.longitude = parseFloat(longitude);
      } catch (error) {
        throw new BadRequestException('Invalid latitude or longitude format');
      }
    }

    if (radius) {
      try {
        discoveryParams.radius = parseFloat(radius);
        if (discoveryParams.radius > 50) {
          throw new BadRequestException('Radius cannot exceed 50km');
        }
      } catch (error) {
        throw new BadRequestException('Invalid radius format');
      }
    }

    if (category) {
      discoveryParams.category = category;
    }

    if (limit) {
      try {
        discoveryParams.limit = parseInt(limit, 10);
        if (discoveryParams.limit > 100) {
          throw new BadRequestException('Limit cannot exceed 100');
        }
      } catch (error) {
        throw new BadRequestException('Invalid limit format');
      }
    }

    if (offset) {
      try {
        discoveryParams.offset = parseInt(offset, 10);
      } catch (error) {
        throw new BadRequestException('Invalid offset format');
      }
    }

    return this.venueService.discoverVenues(discoveryParams);
  }

  /**
   * Get detailed venue information
   * Used for venue detail pages and challenge/gift information
   */
  @Get(':id')
  async getVenueDetails(
    @Param('id') venueId: string,
    @Query('userId') userId?: string,
  ) {
    return this.venueService.getVenueDetails({
      venueId,
      userId,
    });
  }

  /**
   * Scan venue via QR code or NFC
   * Used by mobile apps for venue check-ins and coin rewards
   */
  @Post('scan')
  async scanVenue(@Body() scanData: ScanVenueDto) {
    // Validate required fields
    if (!scanData.venueId || !scanData.userId || !scanData.scanType) {
      throw new BadRequestException('venueId, userId, and scanType are required');
    }

    if (!['QR', 'NFC'].includes(scanData.scanType)) {
      throw new BadRequestException('scanType must be either QR or NFC');
    }

    return this.venueService.scanVenue(scanData);
  }

  /**
   * Get popular/trending venues
   * Used for homepage recommendations and discovery
   */
  @Get('popular')
  async getPopularVenues(@Query('limit') limit?: string) {
    const parsedLimit = limit ? parseInt(limit, 10) : 10;
    if (parsedLimit > 50) {
      throw new BadRequestException('Limit cannot exceed 50');
    }

    return this.venueService.getPopularVenues(parsedLimit);
  }

  /**
   * Get venue categories for filtering
   * Used for category-based venue discovery
   */
  @Get('categories')
  async getVenueCategories() {
    return this.venueService.getVenueCategories();
  }

  /**
   * Legacy endpoint - moved to /venues/map
   * @deprecated Use /venues/map instead
   */
  @Get()
  async getVenues() {
    return {
      venues: [],
      message: 'This endpoint is deprecated. Use /venues/map, /venues/discover, or /venues/popular instead.',
      deprecated: true,
      alternatives: [
        'GET /venues/map - Get venues for map visualization',
        'GET /venues/discover - Discover venues by location',
        'GET /venues/popular - Get popular venues',
        'GET /venues/categories - Get venue categories',
        'GET /venues/:id - Get venue details',
        'POST /venues/scan - Scan venue for coins',
      ]
    };
  }
}
