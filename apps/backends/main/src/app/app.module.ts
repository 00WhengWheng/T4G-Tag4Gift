import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TrpcModule } from './trpc/trpc.module';
import { PrismaModule } from '@t4g/database';

import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { GiftModule } from './gift/gift.module';
import { ScanModule } from './scan/scan.module';
import { ShareModule } from './share/share.module';
import { TenantsModule } from './tenants/tenants.module';
import { UserModule } from './user/user.module';

/**
 * Main Application Module for T4G User Platform
 * Domain: t4g.fun
 */
@Module({
  imports: [
    // Global configuration
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      expandVariables: true,
    }),
    TrpcModule,
    PrismaModule,
    AuthModule,
    GameModule,
    GiftModule,
    ScanModule,
    ShareModule,
    TenantsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
