import { Controller, All, Req, Res } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

/**
 * Business tRPC Controller
 * Handles tRPC requests for business operations
 */
@Controller('trpc')
export class TrpcController {
  private trpcMiddleware: any;

  constructor(private trpcService: TrpcService) {
    // Create tRPC express middleware
    this.trpcMiddleware = createExpressMiddleware({
      router: this.trpcService.getAppRouter(),
      createContext: ({ req, res }) => {
        // Safely extract business and user from request if present (e.g., via middleware)
        const business = (req as any)?.business ?? null;
        const user = (req as any)?.user ?? null;
        return {
          req,
          res,
          business,
          user,
        };
      },
      onError: ({ error, path, input }) => {
        console.error(`Business tRPC Error on ${path}:`, error);
      },
    });
  }

  @All('*')
  async handleTrpc(@Req() req: any, @Res() res: any) {
    return this.trpcMiddleware(req, res);
  }
}
