import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { Venue, Tag, Gift, TagScan, User } from '@prisma/client';

export interface VenueWithStats extends Venue {
  tenant?: {
    id: string;
    name: string;
    description?: string;
  };
  tags: Tag[];
  gifts: Gift[];
  _count: {
    tags: number;
    gifts: number;
    tagScans: number;
  };
  averageRating?: number;
  totalScans?: number;
  popularityScore?: number;
}

export interface VenueDiscovery {
  venue: VenueWithStats;
  distance: number;
  scanCount: number;
  hasUserScanned: boolean;
}

export interface TagScanResult {
  success: boolean;
  pointsAwarded: number;
  newLevel?: number;
  alreadyScanned: boolean;
  venue: {
    id: string;
    name: string;
    tenant?: {
      name: string;
    };
  };
  tag: {
    id: string;
    type: string;
  };
}

// DTOs for controller compatibility
export interface VenueDiscoveryDto {
  latitude?: number;
  longitude?: number;
  radius?: number;
  category?: string;
  limit?: number;
  offset?: number;
}

export interface VenueDetailsDto {
  venueId: string;
  userId?: string;
}

export interface ScanVenueDto {
  venueId: string;
  userId: string;
  scanType: 'QR' | 'NFC';
  latitude?: number;
  longitude?: number;
  metadata?: Record<string, any>;
}

@Injectable()
export class VenueService {
  private readonly logger = new Logger(VenueService.name);

  constructor(private prisma: PrismaService) {}

  async getVenuesForMap(
    userId?: string,
    bounds?: { north: number; south: number; east: number; west: number }
  ): Promise<VenueWithStats[]> {
    try {
      const whereClause: any = {};
      
      // Since coordinates are on tags, we need to filter venues by their tags' coordinates
      if (bounds) {
        whereClause.tags = {
          some: {
            latitude: {
              gte: bounds.south,
              lte: bounds.north,
            },
            longitude: {
              gte: bounds.west,
              lte: bounds.east,
            },
          },
        };
      }

      const venues = await this.prisma.venue.findMany({
        where: whereClause,
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
          tags: {
            take: 5,
            orderBy: { id: 'desc' }, // Use id instead of createdAt
          },
          gifts: {
            where: { isActive: true },
            take: 3,
            orderBy: { id: 'desc' },
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
            },
          },
        },
        take: 100,
      });

      // Get tag scan counts separately
      const venuesWithStats = await Promise.all(
        venues.map(async (venue) => {
          const tagScanCount = await this.prisma.tagScan.count({
            where: {
              tag: {
                venueId: venue.id,
              },
            },
          });

          return {
            ...venue,
            totalScans: tagScanCount,
            popularityScore: this.calculatePopularityScore({
              tags: venue._count.tags,
              gifts: venue._count.gifts,
              tagScans: tagScanCount,
            }),
            _count: {
              ...venue._count,
              tagScans: tagScanCount,
            },
          };
        })
      );

      return venuesWithStats;
    } catch (error) {
      this.logger.error('Failed to fetch venues for map', error);
      throw new Error('Failed to fetch venues for map');
    }
  }

  /**
   * Discover venues near user location
   */
  async discoverVenues(params: VenueDiscoveryDto): Promise<VenueDiscovery[]> {
    try {
      const { latitude, longitude, radius = 5, category, limit = 20, offset = 0 } = params;

      if (!latitude || !longitude) {
        // Return popular venues if no location provided
        const venues = await this.getPopularVenues(limit);
        return venues.map(venue => ({
          venue,
          distance: 0,
          scanCount: venue.totalScans || 0,
          hasUserScanned: false,
        }));
      }

      // Get venues with tags (since tags have the coordinates)
      const venues = await this.prisma.venue.findMany({
        where: {},
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
          tags: {
            take: 5,
            orderBy: { id: 'desc' },
          },
          gifts: {
            where: { isActive: true },
            take: 3,
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
            },
          },
        },
        take: limit,
        skip: offset,
      });

      // Calculate distances and filter by radius
      const venuesWithDistance = await Promise.all(
        venues.map(async (venue) => {
          // Get the first tag to calculate distance (or average of all tags)
          const firstTag = venue.tags[0];
          const distance = firstTag
            ? this.calculateDistance(latitude, longitude, firstTag.latitude, firstTag.longitude)
            : Infinity;

          if (distance > radius) return null;

          const tagScanCount = await this.prisma.tagScan.count({
            where: {
              tag: {
                venueId: venue.id,
              },
            },
          });

          const venueWithStats: VenueWithStats = {
            ...venue,
            totalScans: tagScanCount,
            popularityScore: this.calculatePopularityScore({
              tags: venue._count.tags,
              gifts: venue._count.gifts,
              tagScans: tagScanCount,
            }),
            _count: {
              ...venue._count,
              tagScans: tagScanCount,
            },
          };

          return {
            venue: venueWithStats,
            distance,
            scanCount: tagScanCount,
            hasUserScanned: false, // TODO: Check user scans
          };
        })
      );

      return venuesWithDistance
        .filter(Boolean)
        .sort((a, b) => a!.distance - b!.distance) as VenueDiscovery[];
    } catch (error) {
      this.logger.error('Failed to discover venues', error);
      throw new Error('Failed to discover venues');
    }
  }

  /**
   * Get detailed venue information
   */
  async getVenueDetails(params: VenueDetailsDto): Promise<VenueWithStats | null> {
    try {
      const { venueId, userId } = params;

      const venue = await this.prisma.venue.findUnique({
        where: { id: venueId },
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
          tags: {
            orderBy: { id: 'desc' },
          },
          gifts: {
            where: { isActive: true },
            orderBy: { id: 'desc' },
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
            },
          },
        },
      });

      if (!venue) return null;

      const tagScanCount = await this.prisma.tagScan.count({
        where: {
          tag: {
            venueId: venue.id,
          },
        },
      });

      return {
        ...venue,
        totalScans: tagScanCount,
        popularityScore: this.calculatePopularityScore({
          tags: venue._count.tags,
          gifts: venue._count.gifts,
          tagScans: tagScanCount,
        }),
        _count: {
          ...venue._count,
          tagScans: tagScanCount,
        },
      };
    } catch (error) {
      this.logger.error(`Failed to get venue details for ${params.venueId}`, error);
      throw new Error('Failed to get venue details');
    }
  }

  /**
   * Scan venue for points/coins
   */
  async scanVenue(params: ScanVenueDto): Promise<TagScanResult> {
    try {
      const { venueId, userId, scanType, latitude, longitude } = params;

      // Find a tag at this venue to scan
      const tag = await this.prisma.tag.findFirst({
        where: { venueId },
        include: {
          venue: {
            include: {
              tenant: true,
            },
          },
        },
      });

      if (!tag) {
        throw new Error('No scannable tags found at this venue');
      }

      // Check if user already scanned this tag
      const existingScan = await this.prisma.tagScan.findFirst({
        where: {
          userId,
          tagId: tag.id,
        },
      });

      if (existingScan) {
        return {
          success: false,
          pointsAwarded: 0,
          alreadyScanned: true,
          venue: {
            id: tag.venue.id,
            name: tag.venue.name,
            tenant: tag.venue.tenant ? { name: tag.venue.tenant.name } : undefined,
          },
          tag: {
            id: tag.id,
            type: tag.type,
          },
        };
      }

      // Validate location if provided (using tag coordinates)
      if (latitude && longitude) {
        const distance = this.calculateDistance(
          latitude,
          longitude,
          tag.latitude,
          tag.longitude
        );

        // Allow scanning within 100 meters
        if (distance > 0.1) {
          throw new Error('You must be near the venue to scan');
        }
      }

      // Get user's current points
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: { totalPoints: true },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const currentLevel = this.calculateLevel(user.totalPoints);
      const pointsToAward = 10; // Base points for venue scan

      // Create scan record and update user points
      const [scan, updatedUser] = await this.prisma.$transaction([
        this.prisma.tagScan.create({
          data: {
            userId,
            tagId: tag.id,
            tenantId: tag.venue.tenantId,
            scanType: scanType === 'QR' ? 'QR_CODE' : 'NFC',
          },
        }),
        this.prisma.user.update({
          where: { id: userId },
          data: {
            totalPoints: {
              increment: pointsToAward,
            },
          },
        }),
      ]);

      const newLevel = this.calculateLevel(updatedUser.totalPoints);
      const leveledUp = newLevel > currentLevel;

      return {
        success: true,
        pointsAwarded: pointsToAward,
        newLevel: leveledUp ? newLevel : undefined,
        alreadyScanned: false,
        venue: {
          id: tag.venue.id,
          name: tag.venue.name,
          tenant: tag.venue.tenant ? { name: tag.venue.tenant.name } : undefined,
        },
        tag: {
          id: tag.id,
          type: tag.type,
        },
      };
    } catch (error) {
      this.logger.error(`Failed to scan venue ${params.venueId}`, error);
      throw error;
    }
  }

  /**
   * Get popular venues
   */
  async getPopularVenues(limit: number = 10): Promise<VenueWithStats[]> {
    try {
      const venues = await this.prisma.venue.findMany({
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
          tags: {
            take: 3,
            orderBy: { id: 'desc' },
          },
          gifts: {
            where: { isActive: true },
            take: 3,
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
            },
          },
        },
        take: limit,
      });

      // Calculate popularity based on scan counts
      const venuesWithStats = await Promise.all(
        venues.map(async (venue) => {
          const tagScanCount = await this.prisma.tagScan.count({
            where: {
              tag: {
                venueId: venue.id,
              },
            },
          });

          return {
            ...venue,
            totalScans: tagScanCount,
            popularityScore: this.calculatePopularityScore({
              tags: venue._count.tags,
              gifts: venue._count.gifts,
              tagScans: tagScanCount,
            }),
            _count: {
              ...venue._count,
              tagScans: tagScanCount,
            },
          };
        })
      );

      // Sort by popularity
      return venuesWithStats.sort((a, b) => b.popularityScore! - a.popularityScore!);
    } catch (error) {
      this.logger.error('Failed to get popular venues', error);
      throw new Error('Failed to get popular venues');
    }
  }

  /**
   * Get venue categories
   */
  async getVenueCategories(): Promise<string[]> {
    try {
      // Since venue doesn't have category field, return gift categories or a default list
      const gifts = await this.prisma.gift.findMany({
        select: { type: true },
        distinct: ['type'],
      });

      const categories = gifts.map(g => g.type);
      
      // Add some default venue categories
      const defaultCategories = ['Restaurant', 'Bar', 'Cafe', 'Shop', 'Entertainment', 'Hotel'];
      
      return [...new Set([...categories, ...defaultCategories])];
    } catch (error) {
      this.logger.error('Failed to get venue categories', error);
      throw new Error('Failed to get venue categories');
    }
  }

  /**
   * Scan a tag at venue for points (used by tRPC)
   */
  async scanTag(
    userId: string,
    tagId: string,
    latitude?: number,
    longitude?: number
  ): Promise<TagScanResult> {
    try {
      // Get tag with venue info
      const tag = await this.prisma.tag.findUnique({
        where: { id: tagId },
        include: {
          venue: {
            include: {
              tenant: true,
            },
          },
        },
      });

      if (!tag) {
        throw new Error('Tag not found');
      }

      // Check if user already scanned this tag
      const existingScan = await this.prisma.tagScan.findFirst({
        where: {
          userId,
          tagId,
        },
      });

      if (existingScan) {
        return {
          success: false,
          pointsAwarded: 0,
          alreadyScanned: true,
          venue: {
            id: tag.venue.id,
            name: tag.venue.name,
            tenant: tag.venue.tenant ? { name: tag.venue.tenant.name } : undefined,
          },
          tag: {
            id: tag.id,
            type: tag.type,
          },
        };
      }

      // Validate location if provided (using tag coordinates)
      if (latitude && longitude) {
        const distance = this.calculateDistance(
          latitude,
          longitude,
          tag.latitude,
          tag.longitude
        );

        // Allow scanning within 100 meters of tag location
        if (distance > 0.1) {
          throw new Error('You must be at the venue to scan this tag');
        }
      }

      // Get user's current points for level calculation
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: { totalPoints: true },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const currentLevel = this.calculateLevel(user.totalPoints);
      const pointsToAward = 10; // Base points for scanning

      // Create scan record and update user points in transaction
      const [scan, updatedUser] = await this.prisma.$transaction([
        this.prisma.tagScan.create({
          data: {
            userId,
            tagId,
            tenantId: tag.venue.tenantId,
            scanType: 'NFC', // Default scan type from ScanType enum
          },
        }),
        this.prisma.user.update({
          where: { id: userId },
          data: {
            totalPoints: {
              increment: pointsToAward,
            },
          },
        }),
      ]);

      const newLevel = this.calculateLevel(updatedUser.totalPoints);
      const leveledUp = newLevel > currentLevel;

      this.logger.log(`User ${userId} scanned tag ${tagId}, awarded ${pointsToAward} points`);

      return {
        success: true,
        pointsAwarded: pointsToAward,
        newLevel: leveledUp ? newLevel : undefined,
        alreadyScanned: false,
        venue: {
          id: tag.venue.id,
          name: tag.venue.name,
          tenant: tag.venue.tenant ? { name: tag.venue.tenant.name } : undefined,
        },
        tag: {
          id: tag.id,
          type: tag.type,
        },
      };
    } catch (error) {
      this.logger.error(`Failed to scan tag ${tagId} for user ${userId}`, error);
      throw error;
    }
  }

  /**
   * Search venues by name or location (used by tRPC)
   */
  async searchVenues(
    query: string,
    latitude?: number,
    longitude?: number,
    radiusKm: number = 10
  ): Promise<VenueWithStats[]> {
    try {
      const searchCondition = {
        OR: [
          { name: { contains: query, mode: 'insensitive' as const } },
          { address: { contains: query, mode: 'insensitive' as const } },
          {
            tenant: {
              name: { contains: query, mode: 'insensitive' as const },
            },
          },
        ],
      };

      const venues = await this.prisma.venue.findMany({
        where: searchCondition,
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
          tags: {
            take: 3,
          },
          gifts: {
            where: { isActive: true },
            take: 3,
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
            },
          },
        },
        take: 50,
      });

      const venuesWithStats = await Promise.all(
        venues.map(async (venue) => {
          const tagScanCount = await this.prisma.tagScan.count({
            where: {
              tag: {
                venueId: venue.id,
              },
            },
          });

          // Calculate distance using first tag coordinates
          const firstTag = venue.tags[0];
          const distance = latitude && longitude && firstTag
            ? this.calculateDistance(latitude, longitude, firstTag.latitude, firstTag.longitude)
            : null;

          return {
            ...venue,
            totalScans: tagScanCount,
            popularityScore: this.calculatePopularityScore({
              tags: venue._count.tags,
              gifts: venue._count.gifts,
              tagScans: tagScanCount,
            }),
            _count: {
              ...venue._count,
              tagScans: tagScanCount,
            },
            distance,
          };
        })
      );

      // Filter by radius if location provided
      let filteredVenues = venuesWithStats;
      if (latitude && longitude) {
        filteredVenues = venuesWithStats.filter(
          venue => venue.distance === null || venue.distance <= radiusKm
        );
      }

      // Sort by distance if location provided, otherwise by popularity
      return filteredVenues.sort((a, b) => {
        if (a.distance !== null && b.distance !== null) {
          return a.distance - b.distance;
        }
        return (b.popularityScore || 0) - (a.popularityScore || 0);
      });
    } catch (error) {
      this.logger.error('Failed to search venues', error);
      throw new Error('Failed to search venues');
    }
  }

  /**
   * Calculate distance between two coordinates in kilometers
   */
  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.degToRad(lat2 - lat1);
    const dLon = this.degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degToRad(lat1)) *
        Math.cos(this.degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  /**
   * Calculate user level based on total points
   */
  private calculateLevel(totalPoints: number): number {
    // Simple level calculation: every 100 points = 1 level
    return Math.floor(totalPoints / 100) + 1;
  }

  /**
   * Calculate popularity score based on tags, gifts, and scans
   */
  private calculatePopularityScore(counts: {
    tags: number;
    gifts: number;
    tagScans: number;
  }): number {
    return (counts.tagScans * 3) + (counts.gifts * 2) + counts.tags;
  }
}
