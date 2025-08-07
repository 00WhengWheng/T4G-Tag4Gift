import { Controller, Post, Get, Put, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { GiftService, CreateGiftDto } from './gift.service';
import { GiftStatus } from '@prisma/client';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post()
  async createGift(@Body() dto: CreateGiftDto) {
    return await this.giftService.createGift(dto);
  }

  @Post('claim/:id')
  async claimGift(@Param('id') id: string, @Body() body: { userId: string }) {
    return await this.giftService.claimGift(id, body.userId);
  }

  @Get()
  async listGifts(@Query('tenantId') tenantId?: string, @Query('status') status?: GiftStatus) {
    return await this.giftService.listGifts(tenantId, status);
  }

  @Put(':id')
  async updateGift(@Param('id') id: string, @Body() data: Partial<CreateGiftDto>) {
    return await this.giftService.updateGift(id, data);
  }
}
