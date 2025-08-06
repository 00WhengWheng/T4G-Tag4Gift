
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';
import type { AppRouter } from '@t4g/types';

const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_USERS_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_USERS_CLIENT_ID,
  audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE,
  scope: 'openid profile email',
  redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL || (window.location.origin + '/callback'),
  logoutUri: window.location.origin,
};

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    queryClient: undefined!,
    trpc: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Router Context Injector with tRPC integration
function RouterContextInjector() {
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } = useAuth0();
  const queryClient = getQueryClient();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <RouterProvider
      router={router}
      context={{
        auth: { 
          isAuthenticated, 
          user: user as any, 
          isLoading,
          login: loginWithRedirect,
          logout 
        },
        queryClient,
        trpc,
      }}
    />
  );
}

// Main App Component
function App() {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = getQueryClient();
  
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
          async headers() {
            try {
              const token = await getAccessTokenSilently({
                authorizationParams: {
                  audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
              });
              return {
                authorization: `Bearer ${token}`,
              };
            } catch (error) {
              console.warn('Failed to get access token:', error);
              return {};
            }
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterContextInjector />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Auth0Provider
        domain={auth0Config.domain}
        clientId={auth0Config.clientId}
        authorizationParams={{
          redirect_uri: auth0Config.redirectUri,
          audience: auth0Config.audience,
          scope: auth0Config.scope,
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        skipRedirectCallback={false}
      >
        <App />
      </Auth0Provider>
    </StrictMode>
  );
}