import { createTRPCReact } from '@trpc/react-query';
import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client';
import { QueryClient } from '@tanstack/react-query';

// Import AppRouter type from shared types package
import type { AppRouter, GameTemplate } from '@t4g/types';

// Create tRPC React Query client with proper type safety
export const trpc = createTRPCReact<AppRouter>();

// tRPC client configuration factory
export const createT4GTRPCClient = (queryClient: QueryClient) => {
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      // browser should use relative url for same origin
      return '';
    }
    if (process.env.VITE_API_URL) {
      // SSR should use environment URL
      return process.env.VITE_API_URL;
    }
    // dev SSR should use localhost
    return `http://localhost:3000`;
  };

  return createTRPCClient<any>({
    links: [
      // Add logging in development
      loggerLink({
        enabled: (opts) =>
          process.env.NODE_ENV === 'development' ||
          (opts.direction === 'down' && opts.result instanceof Error),
        colorMode: 'ansi',
      }),
      // HTTP batch link for better performance
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
        headers() {
          // Add auth headers if available
          const token = typeof window !== 'undefined' 
            ? localStorage.getItem('auth_token') 
            : null;
          
          return {
            ...(token && { authorization: `Bearer ${token}` }),
            'x-trpc-source': 'react',
            'content-type': 'application/json',
          };
        },
        // Add error handling
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: 'include', // Include cookies for auth
          });
        },
      }),
    ],
  });
};
