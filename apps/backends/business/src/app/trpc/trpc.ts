import { initTRPC } from '@trpc/server';

/**
 * Base tRPC instance for business backend
 */
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
