import { createTRPCReact } from '@trpc/react-query';
import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client';
import { QueryClient } from '@tanstack/react-query';

// Game type definitions based on backend schema
export type GameTemplate = {
  id: string;
  name: string;
  description: string;
  type: 'QUIZ' | 'PUZZLE' | 'ACTION' | 'STRATEGY';
  category: string;
  difficulty: string;
  structure: string;
  isActive: boolean;
  gdevelopProjectUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

// Create tRPC React Query client with any type for now
// TODO: Replace with proper AppRouter type when backend exports it
export const trpc = createTRPCReact<any>();

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
