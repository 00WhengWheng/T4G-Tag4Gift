import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
import { GamesModule } from '../game/game.module';
import { ChallengesModule } from '../challenge/challenge.module';
import { TagModule } from '../tags/tag.module';
import { ShareModule } from '../share/share.module';
import { UsersModule } from '../users/users.module';
import { TenantsModule } from '../tenants/tenants.module';
import { VenueModule } from '../venue/venue.module';
import { GamesRouter } from './routers/games.router';
import { ChallengesRouter } from './routers/challenges.router';
import { TagsRouter } from './routers/tags.router';
import { TrpcService } from './trpc.service';
import { ShareRouter } from './routers/share.router';
import { UsersRouter } from './routers/users.router';
import { TenantsRouter } from './routers/tenants.router';
import { VenuesRouter } from './routers/venues.router';
import { AppRouter } from './app.router';

@Module({
  imports: [GamesModule, ChallengesModule, TagModule, ShareModule, UsersModule, TenantsModule, VenueModule],
  controllers: [TrpcController],
  providers: [TrpcService, GamesRouter, ChallengesRouter, TagsRouter, ShareRouter, UsersRouter, TenantsRouter, VenuesRouter, AppRouter],
  exports: [AppRouter],
})
export class TrpcModule {}
