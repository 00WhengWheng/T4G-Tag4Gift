import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('register')
  async createTenant(@Body() dto: CreateTenantDto) {
    return this.tenantService.createTenant(dto);
  }

  @Get(':tenantId/stats')
  async getTenantStats(@Param('tenantId') tenantId: string) {
    return this.tenantService.getTenantUserStats(tenantId);
  }

  @Get(':tenantId/users')
  async getTenantUserInteractions(@Param('tenantId') tenantId: string) {
    return this.tenantService.getUserInteractions(tenantId);
  }
}
