
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@t4g/types';

const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    queryClient: undefined!,
    trpcClient: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}





const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_USERS_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_USERS_CLIENT_ID,
  audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE,
  scope: 'openid profile email',
  redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL || (window.location.origin + '/callback'),
  logoutUri: window.location.origin,
};

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
        <T4GProviders>
          <RouterContextInjector />
        </T4GProviders>
      </Auth0Provider>
    </StrictMode>
  );
}


// This component injects queryClient and trpcClient into the router context
function RouterContextInjector() {
  const { getAccessTokenSilently, isAuthenticated, user, isLoading, loginWithRedirect, logout } = useAuth0();
  const [queryClient] = React.useState(() => new QueryClient());
  
  // Create trpcClient with Auth0 token
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3001/api/trpc', // Main backend runs on 3001
          headers: async () => {
            try {
              if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                return { authorization: `Bearer ${token}` };
              }
            } catch (error) {
              console.warn('Failed to get access token:', error);
            }
            return {};
          },
        }),
      ],
    })
  );

  // Wait for Auth0 to finish loading before rendering the router
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
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
            trpcClient,
          }}
        />
      </QueryClientProvider>
    </trpc.Provider>
  );
}



function T4GProviders({ children }: { children: React.ReactNode }) {
  // This provider can be used for other global providers if needed
  return <>{children}</>;
}

