import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './tenant.resolver';
import { PrismaService } from '../../../../../../prisma/prisma.service';

@Module({
  providers: [TenantService, TenantResolver, PrismaService],
})
export class TenantsModule {}
