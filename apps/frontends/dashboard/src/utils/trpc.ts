import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './types';

// Export only the tRPC React instance for Business Dashboard
// Client creation is handled in the app entry (main.tsx) for best practice
export const trpc = createTRPCReact<AppRouter>();
