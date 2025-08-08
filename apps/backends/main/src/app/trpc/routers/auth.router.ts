import { procedure, router } from '../trpc';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { AuthService } from '../../auth/auth.service';

// tRPC router for Auth endpoints
export const AuthRouter = router({
  profile: procedure.protected.query(({ ctx }) => {
    if (!ctx.user) throw new Error('Not authenticated');
    return new AuthService().getProfile(ctx.user);
  }),
  session: procedure.protected.query(({ ctx }) => {
    if (!ctx.user) throw new Error('Not authenticated');
    return new AuthService().getSession(ctx.user);
  }),
});
