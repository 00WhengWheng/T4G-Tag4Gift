import { Injectable } from '@nestjs/common';
import { AppRouter } from './app.router';

/**
 * Main tRPC Service
 * Handles tRPC operations for the main user platform
 * Uses the modular AppRouter approach for better maintainability
 */
@Injectable()
export class TrpcService {
  constructor(private appRouter: AppRouter) {}

  getAppRouter() {
    return this.appRouter.getAppRouter();
  }
}
