import './game/enums/game-type.enum';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GamesModule } from './game/game.module';
import { UsersModule } from './user/user.module';
import { TenantsModule } from './tenants/tenants.module';
import { TrpcModule } from './trpc/trpc.module';
import { AuthModule } from './auth/auth.module';
import { ShareModule } from './share/share.module';
import { ScanModule } from './scan/scan.module';
import { PrismaModule } from '@t4g/database';

/**
 * Main Application Module for T4G User Platform
 * Domain: t4g.fun (Users, Games, Social Features, Challenges)
 */
@Module({
  imports: [
    // Global configuration
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      expandVariables: true,
    }),
    
    // Global database module
    PrismaModule,
    
    // Core modules
    TrpcModule,
    AuthModule,
    
  // Feature modules
  GamesModule,
  UsersModule,
  ShareModule,
  ScanModule,

  // Business logic
  TenantsModule,
  ],
  // No REST controllers, only tRPC and environment modules
  controllers: [],
  providers: [],
})
export class AppModule {}
