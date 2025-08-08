import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
import { TrpcService } from './trpc.service';

import { PrismaModule } from '@t4g/database';
import { AuthModule } from '../auth/auth.module';
import { GameModule } from '../game/game.module';
import { GiftModule } from '../gift/gift.module';
import { ScanModule } from '../scan/scan.module';
import { ShareModule } from '../share/share.module';
import { TenantsModule } from '../tenants/tenants.module';
import { UserModule } from '../user/user.module';

import { AuthRouter } from './routers/auth.router';
import { GameRouter } from './routers/game.router';
import { giftRouter } from './routers/gift.router';
import { scanRouter } from './routers/scan.router';
import { shareRouter } from './routers/share.router';
import { TenantsRouter } from './routers/tenants.router';
import { UserRouter } from './routers/user.router';
import { AppRouter } from './app.router';

@Module({
  imports: [PrismaModule, AuthModule, GameModule, GiftModule, ScanModule, ShareModule, TenantsModule, UserModule],
  controllers: [TrpcController],
  providers: [TrpcService, GameRouter, TenantsRouter, UserRouter],
  exports: [AppRouter],
})
export class TrpcModule {}
