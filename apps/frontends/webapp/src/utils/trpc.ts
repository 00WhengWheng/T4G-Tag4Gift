import { createTRPCReact } from '@trpc/react-query';

// For now, we'll use a basic type. We'll improve this when we have the backend properly set up
export const trpc = createTRPCReact<any>();
