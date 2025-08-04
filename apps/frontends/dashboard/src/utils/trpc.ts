import { createTRPCReact } from '@trpc/react-query';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@t4g/types';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NODE_ENV === 'production' 
        ? 'https://api.yourdomain.com/trpc'
        : 'http://localhost:3001/trpc',
      headers() {
        return {
          authorization: localStorage.getItem('token') || '',
        };
      },
    }),
  ],
});
