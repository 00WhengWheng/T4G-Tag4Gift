import { Injectable } from '@nestjs/common';
import { router } from './trpc';
import { AnalyticsRouter } from './routers/analytics.router';
import { VenuesRouter } from './routers/venues.router';
import { ChallengesRouter } from './routers/challenges.router';

@Injectable()
export class AppRouter {
  constructor(
    private readonly analyticsRouter: AnalyticsRouter,
    private readonly venuesRouter: VenuesRouter,
    private readonly challengesRouter: ChallengesRouter2,
  ) {}

  getAppRouter() {
    console.log('🏗️ Building AppRouter with routers:');
    console.log('- Analytics:', !!this.analyticsRouter);
    console.log('- Venues:', !!this.venuesRouter);
    console.log('- Challenges:', !!this.challengesRouter);
    
    const appRouter = router({
      analytics: this.analyticsRouter.getRoutes(),
      venues: this.venuesRouter.getRoutes(),
      challenges: this.challengesRouter.getRoutes(),
    });
    
    console.log('✅ AppRouter built successfully');
    return appRouter;
  }
}

export type AppRouterType = ReturnType<AppRouter['getAppRouter']>;
