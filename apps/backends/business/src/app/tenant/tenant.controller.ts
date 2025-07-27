import { Controller, Get, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get(':tenantId/stats')
  async getTenantStats(@Param('tenantId') tenantId: string) {
    return this.tenantService.getTenantUserStats(tenantId);
  }

  @Get(':tenantId/users')
  async getTenantUserInteractions(@Param('tenantId') tenantId: string) {
    return this.tenantService.getUserInteractions(tenantId);
  }
}
