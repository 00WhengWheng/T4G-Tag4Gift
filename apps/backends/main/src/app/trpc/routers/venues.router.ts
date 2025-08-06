import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { VenueService } from '../../venue/venue.service';
import { PrismaService } from '@t4g/database';
import { TRPCError } from '@trpc/server';

// Input validation schemas
const VenueMapQuerySchema = z.object({
  userId: z.string().optional(),
  bounds: z.object({
    north: z.number(),
    south: z.number(),
    east: z.number(),
    west: z.number(),
  }).optional(),
});

const VenueDiscoverySchema = z.object({
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  radius: z.number().min(0.1).max(50).optional(),
  category: z.string().optional(),
  limit: z.number().min(1).max(100).optional(),
  offset: z.number().min(0).optional(),
});

const VenueDetailsSchema = z.object({
  venueId: z.string(),
  userId: z.string().optional(),
});

const ScanVenueSchema = z.object({
  venueId: z.string(),
  userId: z.string(),
  scanType: z.enum(['QR', 'NFC']), // Converted to QR_CODE in service
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  metadata: z.record(z.any()).optional(),
});

const PopularVenuesSchema = z.object({
  limit: z.number().min(1).max(50).optional(),
});

/**
 * Venues tRPC Router
 * Provides type-safe API for venue operations in the user platform
 */
@Injectable()
export class VenuesRouter {
  constructor(
    private readonly venueService: VenueService,
    private readonly prisma: PrismaService,
  ) {}

  getRoutes() {
    return router({
      /**
       * Get venues for map visualization
       */
      getMapVenues: publicProcedure
        .input(VenueMapQuerySchema)
        .query(async ({ input }) => {
          try {
            const bounds = input.bounds && 
              input.bounds.north !== undefined && 
              input.bounds.south !== undefined && 
              input.bounds.east !== undefined && 
              input.bounds.west !== undefined
              ? input.bounds as { north: number; south: number; east: number; west: number }
              : undefined;

            return await this.venueService.getVenuesForMap(input.userId, bounds);
          } catch (error) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to fetch venues for map',
            });
          }
        }),

      /**
       * Discover venues by location and filters
       */
      discoverVenues: publicProcedure
        .input(VenueDiscoverySchema)
        .query(async ({ input }) => {
          try {
            return await this.venueService.discoverVenues(input);
          } catch (error) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to discover venues',
            });
          }
        }),

      /**
       * Get detailed venue information
       */
      getVenueDetails: publicProcedure
        .input(VenueDetailsSchema)
        .query(async ({ input }) => {
          try {
            const venue = await this.venueService.getVenueDetails({
              venueId: input.venueId,
              userId: input.userId,
            });
            
            if (!venue) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Venue not found',
              });
            }

            return venue;
          } catch (error) {
            if (error instanceof TRPCError) throw error;
            
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to get venue details',
            });
          }
        }),

      /**
       * Scan venue for coins (QR/NFC)
       */
      scanVenue: publicProcedure
        .input(ScanVenueSchema)
        .mutation(async ({ input }) => {
          try {
            return await this.venueService.scanVenue({
              venueId: input.venueId,
              userId: input.userId,
              scanType: input.scanType,
              latitude: input.latitude,
              longitude: input.longitude,
              metadata: input.metadata,
            });
          } catch (error) {
            if (error.message?.includes('not found')) {
              throw new TRPCError({
                code: 'NOT_FOUND',
                message: error.message,
              });
            }
            
            if (error.message?.includes('already scanned') || error.message?.includes('near the venue')) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                message: error.message,
              });
            }
            
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to scan venue',
            });
          }
        }),

      /**
       * Get popular/trending venues
       */
      getPopularVenues: publicProcedure
        .input(PopularVenuesSchema)
        .query(async ({ input }) => {
          try {
            return await this.venueService.getPopularVenues(input.limit);
          } catch (error) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to get popular venues',
            });
          }
        }),

      /**
       * Get venue categories for filtering
       */
      getVenueCategories: publicProcedure
        .query(async () => {
          try {
            return await this.venueService.getVenueCategories();
          } catch (error) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: error instanceof Error ? error.message : 'Failed to get venue categories',
            });
          }
        }),
    });
  }
}
