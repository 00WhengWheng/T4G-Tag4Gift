import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TagService, CreateScanDto } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('scan')
  async scanTag(@Body() dto: CreateScanDto) {
    return this.tagService.scanTag(dto);
  }

  @Get(':id')
  async getTagById(@Param('id') id: string) {
    return this.tagService.getTagById(id);
  }

  @Get('user/:userId/scans')
  async getScansByUser(@Param('userId') userId: string) {
    return this.tagService.getScansByUser(userId);
  }
}
