import { Controller, Post, Body } from '@nestjs/common';
import { ScanService, CreateScanDto } from './scan.service';

@Controller('scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  async processScan(@Body() dto: CreateScanDto) {
    return this.scanService.processScan(dto);
  }
}
