import { Injectable } from '@nestjs/common';
import { router } from './trpc';
import { GamesRouter } from './routers/games.router';
import { ChallengesRouter } from './routers/challenges.router';
import { TagsRouter } from './routers/tags.router';
import { ShareRouter } from './routers/share.router';
import { UsersRouter } from './routers/users.router';
import { TenantsRouter } from './routers/tenants.router';

@Injectable()
export class AppRouter {
  constructor(
    private readonly gamesRouter: GamesRouter,
    private readonly challengesRouter: ChallengesRouter,
    private readonly tagsRouter: TagsRouter,
    private readonly shareRouter: ShareRouter,
    private readonly usersRouter: UsersRouter,
    private readonly tenantsRouter: TenantsRouter
  ) {}

  getAppRouter() {
    return router({
      games: this.gamesRouter.getRoutes(),
      challenges: this.challengesRouter.getRoutes(),
      tags: this.tagsRouter.getRoutes(),
      share: this.shareRouter.getRoutes(),
      users: this.usersRouter.getRoutes(),
      tenants: this.tenantsRouter.getRoutes(),
    });
  }
}

export type TAppRouter = ReturnType<AppRouter['getAppRouter']>;
