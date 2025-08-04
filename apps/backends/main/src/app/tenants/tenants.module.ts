import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './tenant.resolver';
import { PrismaService } from '@t4g/database';

@Module({
  providers: [TenantService, TenantResolver, PrismaService],
})
export class TenantsModule {}
