import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { TenantService } from '../../tenants/tenant.service';

// Input validation schemas
const createTenantSchema = z.object({
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(100),
  email: z.string().email(),
  description: z.string().optional(),
  type: z.enum(['VENUE', 'RESTAURANT', 'BAR', 'STORE', 'EVENT', 'OTHER']).default('VENUE'),
  status: z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']).default('ACTIVE'),
  totalChallenges: z.number().default(0),
  totalUsers: z.number().default(0),
  subscriptionPlan: z.string().default('FREE'),
  subscriptionExpiry: z.date().optional(),
  maxUsers: z.number().default(100),
  maxVenues: z.number().default(1),
});

const updateTenantSchema = createTenantSchema.partial();

const tenantIdSchema = z.object({
  id: z.string(),
});

const tenantSlugSchema = z.object({
  slug: z.string(),
});

@Injectable()
export class TenantsRouter {
  constructor(private readonly tenantService: TenantService) {}

  getRoutes() {
    return router({
      create: publicProcedure
        .input(createTenantSchema)
        .mutation(async ({ input }) => {
          // Transform input to match CreateTenantDto with defaults
          const tenantInput = {
            ...input,
            type: input.type || 'VENUE',
            status: input.status || 'ACTIVE',
            totalChallenges: input.totalChallenges ?? 0,
            totalUsers: input.totalUsers ?? 0,
            subscriptionPlan: input.subscriptionPlan || 'FREE',
            maxUsers: input.maxUsers ?? 100,
            maxVenues: input.maxVenues ?? 1,
          } as any;
          return await this.tenantService.createTenant(tenantInput);
        }),

      findById: publicProcedure
        .input(tenantIdSchema)
        .query(async ({ input }) => {
          return await this.tenantService.findTenantById(input.id);
        }),

      findBySlug: publicProcedure
        .input(tenantSlugSchema)
        .query(async ({ input }) => {
          return await this.tenantService.findTenantBySlug(input.slug);
        }),

      update: publicProcedure
        .input(z.object({
          id: z.string(),
          data: updateTenantSchema,
        }))
        .mutation(async ({ input }) => {
          return await this.tenantService.updateTenant(input.id, input.data as any);
        }),

      delete: publicProcedure
        .input(tenantIdSchema)
        .mutation(async ({ input }) => {
          return await this.tenantService.deleteTenant(input.id);
        }),
    });
  }
}
