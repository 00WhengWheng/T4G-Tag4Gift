import { Module } from '@nestjs/common';
import { TenantService } from './tenants.service';
import { TenantController } from './tenants.controller';
import { PrismaService } from '@t4g/database';

@Module({
  controllers: [TenantController],
  providers: [TenantService, PrismaService],
  exports: [TenantService],
})
export class TenantsModule {}
