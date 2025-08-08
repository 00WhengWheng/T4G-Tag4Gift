import { Injectable } from '@nestjs/common';
import { router } from './trpc';
import { GameRouter } from './routers/game.router';
import { giftRouter } from './routers/gift.router';
import { scanRouter } from './routers/scan.router';
import { shareRouter } from './routers/share.router';
import { TenantsRouter } from './routers/tenants.router';
import { UserRouter } from './routers/user.router';
import { PrismaService } from '@t4g/database';

@Injectable()
export class AppRouter {
  constructor(
    private readonly gameRouter: GameRouter,
    private readonly tenantsRouter: TenantsRouter,
    private readonly userRouter: UserRouter,
    private readonly prismaService: PrismaService,
  ) {}

  getAppRouter() {
    return router({
  game: this.gameRouter.getRoutes(),
  gift: giftRouter,
  scan: scanRouter,
  share: shareRouter,
      tenants: this.tenantsRouter.getRoutes(),
      user: this.userRouter.getRoutes(),
    });
  }
}

export type AppRouterType = ReturnType<AppRouter['getAppRouter']>;
