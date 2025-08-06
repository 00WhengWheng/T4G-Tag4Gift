import { Injectable } from '@nestjs/common';
import { AppRouter } from './app.router';

/**
 * Business tRPC Service
 * Handles business-specific tRPC operations
 */
@Injectable()
export class TrpcService {
  constructor(private readonly appRouter: AppRouter) {}

  /**
   * Get the configured tRPC app router
   */
  getAppRouter() {
    return this.appRouter.getAppRouter();
  }
}
