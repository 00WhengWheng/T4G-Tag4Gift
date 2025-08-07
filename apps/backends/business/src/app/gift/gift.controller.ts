import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateGiftDto } from './dto/gift.dto';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post()
  async createGift(@Body() data: any) {
    const dto = plainToInstance(CreateGiftDto, data);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return await this.giftService.createGift(dto);
  }

  @Get(':id')
  async getGift(@Param('id') id: string) {
    return await this.giftService.getGift(id);
  }

  @Put(':id')
  async updateGift(@Param('id') id: string, @Body() data: any) {
    return await this.giftService.updateGift(id, data);
  }

  @Delete(':id')
  async deleteGift(@Param('id') id: string) {
    return await this.giftService.deleteGift(id);
  }

  @Get('tenant/:tenantId')
  async listGiftsByTenant(@Param('tenantId') tenantId: string) {
    return await this.giftService.listGiftsByTenant(tenantId);
  }

  @Get('challenge/:challengeId')
  async listGiftsByChallenge(@Param('challengeId') challengeId: string) {
    return await this.giftService.listGiftsByChallenge(challengeId);
  }
}
