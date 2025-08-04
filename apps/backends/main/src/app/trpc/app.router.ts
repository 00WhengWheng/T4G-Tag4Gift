import { Injectable } from '@nestjs/common';
// import { GamesRouter } from './routers/games.router';

@Injectable()
export class AppRouter {
  constructor(/* private readonly gamesRouter: GamesRouter */) {}

  getAppRouter() {
    return {
      // games: this.gamesRouter.getRoutes(),
    };
  }
}

export type TAppRouter = ReturnType<AppRouter['getAppRouter']>;
