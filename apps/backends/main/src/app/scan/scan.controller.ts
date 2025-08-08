
import { Controller, Post, Body } from '@nestjs/common';
import { ScanService } from './scan.service';
import { CreateScanDto, ScanResponseDto } from './dto/scan.dto';


@Controller('scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  async processScan(@Body() dto: CreateScanDto): Promise<ScanResponseDto> {
    return await this.scanService.processScan(dto);
  }
}
