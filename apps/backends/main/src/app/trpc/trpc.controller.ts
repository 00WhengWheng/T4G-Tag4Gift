import { Controller, All, Req, Res } from '@nestjs/common';
import { AppRouter } from './app.router';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { Request, Response } from 'express';

// Extend Express Request to include user property
interface AuthenticatedRequest extends Request {
  user?: any;
}

/**
 * Main tRPC Controller
 * Handles tRPC requests for user operations
 */
@Controller('trpc')
export class TrpcController {
  private trpcMiddleware: any;

  constructor(private appRouter: AppRouter) {
    // Create tRPC express middleware
    this.trpcMiddleware = createExpressMiddleware({
      router: this.appRouter.getAppRouter(),
      createContext: ({ req, res }: { req: AuthenticatedRequest; res: Response }) => ({
        req,
        res,
        // Add authentication context here
        user: req.user || null,
      }),
      onError: ({ error, path, input }) => {
        console.error(`tRPC Error on ${path}:`, error);
      },
    });
  }

  @All('*')
  async handleTrpc(@Req() req: any, @Res() res: any) {
    return this.trpcMiddleware(req, res);
  }
}
