import { Controller, Post, Get, Put, Body, Param, Query, BadRequestException, UseGuards } from '@nestjs/common';
import { GiftService } from './gift.service';
import { CreateGiftDto } from './dto/create-gift.dto';
import { GiftStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createGift(@Body() dto: CreateGiftDto, @Body('user') user: any) {
    // Optionally check business user permissions here
    if (!user) throw new BadRequestException('Unauthorized');
    return await this.giftService.createGift(dto);
  }

  @Post('claim/:id')
  @UseGuards(JwtAuthGuard)
  async claimGift(@Param('id') id: string, @Body('user') user: any) {
    if (!user) throw new BadRequestException('Unauthorized');
    return await this.giftService.claimGift(id, user.id);
  }

  @Get()
  async listGifts(@Query('tenantId') tenantId?: string, @Query('status') status?: GiftStatus) {
    return await this.giftService.listGifts(tenantId, status);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateGift(@Param('id') id: string, @Body() data: Partial<CreateGiftDto>, @Body('user') user: any) {
    // Optionally check business user permissions here
    if (!user) throw new BadRequestException('Unauthorized');
    return await this.giftService.updateGift(id, data);
  }
}
