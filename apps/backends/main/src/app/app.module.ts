import './games/enums/game-type.enum';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';
import { TrpcModule } from './trpc/trpc.module';
import { AuthModule } from './auth/auth.module';
import { TagModule } from './tags/tag.module';
import { ShareModule } from './share/share.module';
import { ChallengesModule } from './challenges/challenges.module';
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
  TagModule,
  ShareModule,
  ChallengesModule,
    
  // Business logic
  TenantsModule,
  ],
  // No REST controllers, only tRPC and environment modules
  controllers: [],
  providers: [],
})
export class AppModule {}
