import { Controller, All, Req, Res } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

/**
 * Main tRPC Controller
 * Handles tRPC requests for user operations
 */
@Controller('trpc')
export class TrpcController {
  private trpcMiddleware: any;

  constructor(private trpcService: TrpcService) {
    // Create tRPC express middleware
    this.trpcMiddleware = createExpressMiddleware({
      router: this.trpcService.getAppRouter(),
      createContext: ({ req, res }) => ({
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
