import { Injectable } from '@nestjs/common';

/**
 * Business tRPC Service
 * Handles business-specific tRPC operations
 */
@Injectable()
export class TrpcService {
  getBusinessRoutes() {
    return {
      venues: {
        getAll: () => 'Business venues endpoint',
      },
      analytics: {
        getMetrics: () => 'Business analytics endpoint',
      },
    };
  }
}
