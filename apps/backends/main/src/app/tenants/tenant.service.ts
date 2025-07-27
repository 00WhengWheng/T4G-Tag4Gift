import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../../prisma/prisma.service';
import { CreateTenantDto } from './tenant.dto';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async createTenant(data: CreateTenantDto) {
    return this.prisma.tenant.create({ data });
  }

  async findTenantById(id: string) {
    return this.prisma.tenant.findUnique({ where: { id } });
  }

  async findTenantBySlug(slug: string) {
    return this.prisma.tenant.findUnique({ where: { slug } });
  }

  async updateTenant(id: string, data: Partial<CreateTenantDto>) {
    return this.prisma.tenant.update({ where: { id }, data });
  }

  async deleteTenant(id: string) {
    return this.prisma.tenant.delete({ where: { id } });
  }
}
