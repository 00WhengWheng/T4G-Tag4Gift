
import { Controller, Post, Body, UseGuards, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ScanService } from './scan.service';
import { CreateScanDto, ScanResponseDto } from './dto/scan.dto';


@Controller('scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async processScan(@Body() dto: CreateScanDto, @Body('user') user: any): Promise<ScanResponseDto> {
    if (!user) throw new BadRequestException('Unauthorized');
    // Attach userId to scan DTO if needed
    return await this.scanService.processScan({ ...dto, userId: user.id });
  }
}
