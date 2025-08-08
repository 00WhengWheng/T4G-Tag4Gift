import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ShareService, CreateShareDto } from './share.service';

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post()
  async createShare(@Body() dto: CreateShareDto) {
    return this.shareService.createShare(dto);
  }

  @Get('tenant/:tenantId')
  async getSharesByTenant(@Param('tenantId') tenantId: string) {
    return this.shareService.getSharesByTenant(tenantId);
  }

  @Get('user/:userId')
  async getSharesByUser(@Param('userId') userId: string) {
    return this.shareService.getSharesByUser(userId);
  }
}
