import { router, publicProcedure } from '../trpc';
import { UsersService } from '../../users/users.service';
import { z } from 'zod';

export function UsersRouter(usersService: UsersService) {
  return router({
    getUserById: publicProcedure.input(z.string()).query(async ({ input }) => {
      return usersService.getUserById(input);
    }),
    getUserByEmail: publicProcedure.input(z.string()).query(async ({ input }) => {
      return usersService.getUserByEmail(input);
    }),
    listUsers: publicProcedure.input(z.object({ limit: z.number().optional(), offset: z.number().optional() })).query(async ({ input }) => {
      return usersService.listUsers(input.limit ?? 20, input.offset ?? 0);
    }),
  });
}
