import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareResolver } from './share.resolver';

@Module({
  providers: [ShareService, ShareResolver],
})
export class ShareModule {}
