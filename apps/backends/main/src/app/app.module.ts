import './games/enums/game-type.enum';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TrpcModule,
    GamesModule,
    UsersModule,
    TenantsModule,
  ],
})
export class AppModule {}
