import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CreateTenantDto } from './dto/tenants.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create tenant
  async createTenant(data: CreateTenantDto) {
    return await this.prisma.tenant.create({
      data: {
        ...data,
        venueType: data.venueType as any,
      },
    });
  }

  // Find tenant by ID
  async findTenantById(id: string) {
    return await this.prisma.tenant.findUnique({
      where: { id },
    });
  }

  // Find tenant by slug
  async findTenantBySlug(slug: string) {
    return await this.prisma.tenant.findUnique({
      where: { slug },
    });
  }

  // Update tenant
  async updateTenant(id: string, data: Partial<CreateTenantDto>) {
    return await this.prisma.tenant.update({
      where: { id },
      data,
    });
  }

  // Delete tenant
  async deleteTenant(id: string) {
    return await this.prisma.tenant.delete({
      where: { id },
    });
  }

  // List tenants with pagination
  async listTenants(limit = 20, offset = 0) {
    const [tenants, total] = await Promise.all([
      this.prisma.tenant.findMany({
        take: limit,
        skip: offset,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.tenant.count(),
    ]);
    return {
      tenants,
      total,
      hasMore: offset + limit < total,
    };
  }
