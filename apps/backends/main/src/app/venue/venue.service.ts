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

@Injectable()
export class VenueService {
  private readonly logger = new Logger(VenueService.name);

  constructor(private prisma: PrismaService) {}

  async getVenuesForMap(
    bounds: { north: number; south: number; east: number; west: number },
    userId?: string
  ): Promise<VenueWithStats[]> {
    try {
      const venues = await this.prisma.venue.findMany({
        where: {
          latitude: {
            gte: bounds.south,
            lte: bounds.north,
          },
          longitude: {
            gte: bounds.west,
            lte: bounds.east,
          },
        },
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
            orderBy: { createdAt: 'desc' },
          },
          gifts: {
            where: { isActive: true },
            take: 3,
          },
          _count: {
            select: {
              tags: true,
              gifts: true,
              tagScans: true,
            },
          },
        },
        take: 100,
      });

      return venues.map(venue => ({
        ...venue,
        totalScans: venue._count.tagScans,
        popularityScore: this.calculatePopularityScore(venue._count),
      }));
    } catch (error) {
      this.logger.error('Failed to fetch venues for map', error);
      throw new Error('Failed to fetch venues for map');
    }
  }

  private calculatePopularityScore(counts: {
    tags: number;
    gifts: number;
    tagScans: number;
  }): number {
    return (counts.tagScans * 3) + (counts.gifts * 2) + counts.tags;
  }
}
