import { 
  Controller, 
  Get, 
  Post,
  Body, 
  Param, 
  Query,
  BadRequestException,
} from '@nestjs/common';
import { 
  VenueService, 
  VenueDiscoveryDto, 
  VenueDetailsDto, 
  ScanVenueDto 
} from './venue.service';

/**
 * Venue Controller for User Platform
 * Handles venue operations for map visualization and venue scanning
 * Primary use: Map views, venue discovery, and QR/NFC scanning
 */
@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  /**
   * Get venues for map visualization
   * Essential for map views in webapp and mobile
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
   * Get popular venues
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
   * Search venues by name or location
   * Used for search functionality in webapp and mobile
   */
  @Get('search')
  async searchVenues(
    @Query('q') query?: string,
    @Query('lat') latitude?: string,
    @Query('lng') longitude?: string,
    @Query('radius') radius?: string,
  ) {
    if (!query) {
      throw new BadRequestException('Search query (q) is required');
    }

    let lat, lng, radiusKm = 10;

    if (latitude && longitude) {
      try {
        lat = parseFloat(latitude);
        lng = parseFloat(longitude);
      } catch (error) {
        throw new BadRequestException('Invalid latitude or longitude format');
      }
    }

    if (radius) {
      try {
        radiusKm = parseFloat(radius);
        if (radiusKm > 50) {
          throw new BadRequestException('Radius cannot exceed 50km');
        }
      } catch (error) {
        throw new BadRequestException('Invalid radius format');
      }
    }

    return this.venueService.searchVenues(query, lat, lng, radiusKm);
  }

  /**
   * Scan venue via QR code or NFC
   * Essential for mobile apps - venue check-ins and point rewards
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

    try {
      return await this.venueService.scanVenue(scanData);
    } catch (error) {
      if (error.message.includes('not found')) {
        throw new BadRequestException(error.message);
      }
      if (error.message.includes('already scanned') || error.message.includes('near the venue')) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Failed to scan venue');
    }
  }

  /**
   * Scan a specific tag for points
   * Alternative endpoint for direct tag scanning
   */
  @Post('scan-tag')
  async scanTag(@Body() scanData: {
    userId: string;
    tagId: string;
    latitude?: number;
    longitude?: number;
  }) {
    if (!scanData.userId || !scanData.tagId) {
      throw new BadRequestException('userId and tagId are required');
    }

    try {
      return await this.venueService.scanTag(
        scanData.userId,
        scanData.tagId,
        scanData.latitude,
        scanData.longitude
      );
    } catch (error) {
      if (error.message.includes('not found')) {
        throw new BadRequestException(error.message);
      }
      if (error.message.includes('already scanned') || error.message.includes('at the venue')) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Failed to scan tag');
    }
  }

  /**
   * Get detailed venue information
   * Used for venue detail pages and challenge/gift information
   * Must be after specific routes to avoid parameter conflicts
   */
  @Get(':id')
  async getVenueDetails(
    @Param('id') venueId: string,
    @Query('userId') userId?: string,
  ) {
    const venue = await this.venueService.getVenueDetails({
      venueId,
      userId,
    });

    if (!venue) {
      throw new BadRequestException('Venue not found');
    }

    return venue;
  }

  /**
   * Main venues endpoint - returns available endpoints
   */
  @Get()
  async getVenues() {
    return {
      message: 'Venue API endpoints',
      endpoints: [
        'GET /venues - This help message',
        'GET /venues/map - Get venues for map visualization',
        'GET /venues/discover - Discover venues by location',
        'GET /venues/popular - Get popular venues',
        'GET /venues/categories - Get venue categories',
        'GET /venues/search - Search venues by name/location',
        'POST /venues/scan - Scan venue for points',
        'POST /venues/scan-tag - Scan specific tag for points',
        'GET /venues/:id - Get venue details',
      ],
      note: 'tRPC endpoints also available at /trpc/venues for type-safe calls',
      documentation: {
        map: 'Query params: userId?, north?, south?, east?, west?',
        discover: 'Query params: lat?, lng?, radius?, category?, limit?, offset?',
        search: 'Query params: q (required), lat?, lng?, radius?',
        popular: 'Query params: limit?',
        scan: 'Body: { venueId, userId, scanType: "QR"|"NFC", latitude?, longitude?, metadata? }',
        'scan-tag': 'Body: { userId, tagId, latitude?, longitude? }',
        ':id': 'Params: id (venueId), Query params: userId?'
      }
    };
  }
}
