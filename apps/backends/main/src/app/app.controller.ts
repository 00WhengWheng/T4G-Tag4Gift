import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from '@t4g/prisma';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('health')
  async getHealth() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: 'ok', database: 'connected', service: 'main' };
    } catch (error) {
      return { status: 'error', database: 'disconnected', service: 'main', error: error.message };
    }
  }
}
