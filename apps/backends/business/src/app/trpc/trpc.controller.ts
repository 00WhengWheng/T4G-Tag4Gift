import { Controller, All, Req, Res } from '@nestjs/common';
import { TrpcService } from './trpc.service';

/**
 * Business tRPC Controller
 * Handles tRPC requests for business operations
 */
@Controller('trpc')
export class TrpcController {
  constructor(private trpcService: TrpcService) {}

  @All('*')
  async handleTrpc(@Req() req: any, @Res() res: any) {
    // TODO: Implement business tRPC handler
    res.json({ message: 'Business tRPC endpoint' });
  }
}
