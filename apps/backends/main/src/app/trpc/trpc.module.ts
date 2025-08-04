import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
import { GamesModule } from '../games/games.module';
import { ChallengesModule } from '../challenges/challenges.module';
import { TagModule } from '../tags/tag.module';
import { ShareModule } from '../share/share.module';
import { UsersModule } from '../users/users.module';
import { TenantsModule } from '../tenants/tenants.module';
import { GamesRouter } from './routers/games.router';
import { ChallengesRouter } from './routers/challenges.router';
import { TagsRouter } from './routers/tags.router';
import { ShareRouter } from './routers/share.router';
import { UsersRouter } from './routers/users.router';
import { TenantsRouter } from './routers/tenants.router';
import { AppRouter } from './app.router';

@Module({
  imports: [GamesModule, ChallengesModule, TagModule, ShareModule, UsersModule, TenantsModule],
  controllers: [TrpcController],
  providers: [GamesRouter, ChallengesRouter, TagsRouter, ShareRouter, UsersRouter, TenantsRouter, AppRouter],
  exports: [AppRouter],
})
export class TrpcModule {}
