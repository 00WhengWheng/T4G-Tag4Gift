import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SocialService, CreateSocialDto } from './social.service';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  async createSocial(@Body() dto: CreateSocialDto) {
    return this.socialService.createSocial(dto);
  }

  @Get('tenant/:tenantId')
  async getSocialsByTenant(@Param('tenantId') tenantId: string) {
    return this.socialService.getSocialsByTenant(tenantId);
  }

  @Get('user/:userId')
  async getSocialsByUser(@Param('userId') userId: string) {
    return this.socialService.getSocialsByUser(userId);
  }
}
