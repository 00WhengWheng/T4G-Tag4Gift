import { Injectable } from '@nestjs/common';
import { router } from './trpc';
import { AnalyticsRouter } from './routers/analytics.router';
import { VenuesRouter } from './routers/venues.router';

@Injectable()
export class AppRouter {
  constructor(
    private readonly analyticsRouter: AnalyticsRouter,
    private readonly venuesRouter: VenuesRouter
  ) {}

  getAppRouter() {
    return router({
      analytics: this.analyticsRouter.getRoutes(),
      venues: this.venuesRouter.getRoutes(),
    });
  }
}

export type AppRouterType = ReturnType<AppRouter['getAppRouter']>;
