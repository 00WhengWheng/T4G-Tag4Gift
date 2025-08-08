import { Controller, All, Req, Res } from '@nestjs/common';
import { AppRouter } from './app.router';
import { GiftService } from '../gift/gift.service';
import { ScanService } from '../scan/scan.service';
import { ShareService } from '../share/share.service';
import { UserService } from '../user/user.service';
import { TenantsService } from '../tenants/tenants.service';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { Request, Response } from 'express';

// Shared tRPC context type for all routers
export interface TrpcContext {
  req: Request;
  res: Response;
  user: any;
  giftService: GiftService;
  scanService: ScanService;
  shareService: ShareService;
  userService: UserService;
  tenantsService: TenantsService;
}

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

  constructor(
    private appRouter: AppRouter,
    private giftService: GiftService,
    private scanService: ScanService,
    private shareService: ShareService,
    private userService: UserService,
    private tenantsService: TenantsService,
  ) {
    // Create tRPC express middleware
    this.trpcMiddleware = createExpressMiddleware({
      router: this.appRouter.getAppRouter(),
      createContext: ({ req, res }: { req: AuthenticatedRequest; res: Response }): TrpcContext => ({
        req,
        res,
        user: req.user || null,
        giftService: this.giftService,
        scanService: this.scanService,
        shareService: this.shareService,
        userService: this.userService,
        tenantsService: this.tenantsService,
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
