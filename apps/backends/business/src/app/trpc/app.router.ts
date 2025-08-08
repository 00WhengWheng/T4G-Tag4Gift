import { Injectable } from '@nestjs/common';
import { router } from './trpc';
import { AnalyticsRouter } from './routers/analytics.router';
import { VenuesRouter } from './routers/venues.router';
import { ChallengesRouter } from './routers/challenges.router';
import { UsersRouter } from './routers/users.router';
import { UsersService } from '../../users/users.service';
import { SocialRouter } from './routers/social.router';
import { SocialService } from '../../social/social.service';

@Injectable()
export class AppRouter {
  constructor(
    private readonly analyticsRouter: AnalyticsRouter,
    private readonly venuesRouter: VenuesRouter,
    private readonly challengesRouter: ChallengesRouter,
    private readonly usersService: UsersService,
    private readonly socialService: SocialService,
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
      users: UsersRouter(this.usersService),
      social: SocialRouter(this.socialService),
    });
    
    console.log('✅ AppRouter built successfully');
    return appRouter;
  }
}

export type AppRouterType = ReturnType<AppRouter['getAppRouter']>;
