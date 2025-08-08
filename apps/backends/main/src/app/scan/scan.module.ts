import { Module } from '@nestjs/common';
import { PrismaModule } from '@t4g/database';
import { ScanService } from './scan.service';
import { ScanController } from './scan.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ScanController],
  providers: [ScanService],
  exports: [ScanService],
})
export class ScanModule {}
