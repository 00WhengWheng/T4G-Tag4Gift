import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CreateTenantDto } from './tenant.dto';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async createTenant(data: CreateTenantDto) {
    // Convert local enums to Prisma enums
    const prismaData = {
      ...data,
      type: data.type as any, // Cast to Prisma enum
      status: data.status as any, // Cast to Prisma enum
    };
    return this.prisma.tenant.create({ data: prismaData });
  }

  async findTenantById(id: string) {
    return this.prisma.tenant.findUnique({ where: { id } });
  }

  async findTenantBySlug(slug: string) {
    return this.prisma.tenant.findUnique({ where: { slug } });
  }

  async updateTenant(id: string, data: Partial<CreateTenantDto>) {
    // Convert local enums to Prisma enums for update
    const prismaData = {
      ...data,
      ...(data.type && { type: data.type as any }),
      ...(data.status && { status: data.status as any }),
    };
    return this.prisma.tenant.update({ where: { id }, data: prismaData });
  }

  async deleteTenant(id: string) {
    return this.prisma.tenant.delete({ where: { id } });
  }
}
