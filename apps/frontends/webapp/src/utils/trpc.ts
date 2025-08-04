import { createTRPCReact } from '@trpc/react-query';

// Simple placeholder type - we'll replace this when backend is ready  
type AppRouter = any;

export const trpc = createTRPCReact<AppRouter>();
