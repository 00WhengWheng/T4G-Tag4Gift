import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@t4g/types';

// Export only the tRPC React instance. Client creation is handled in the app entry (main.tsx) for best practice.
export const trpc = createTRPCReact<AppRouter>();