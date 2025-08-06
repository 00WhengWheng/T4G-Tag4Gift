import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from './utils/trpc';

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

// Business Auth0 Configuration  
const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN || 'dev-s8w01y10y3szwvfl.us.auth0.com',
  clientId: import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'Dy5tyu2fwnOhsMRGVDJ6O8H6DnDYcIRl',
  audience: import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://t4g-auth0.space',
  redirectUri: import.meta.env.VITE_AUTH0_BUSINESS_CALLBACK_URL || 'http://localhost:4201/callback',
  scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
};

console.log('🔐 Dashboard Auth0 Config:', {
  domain: auth0Config.domain,
  clientId: auth0Config.clientId,
  audience: auth0Config.audience,
  redirectUri: auth0Config.redirectUri,
});

const rootElement = document.getElementById('root')!;
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
        skipRedirectCallback={window.location.pathname === '/callback'}
        onRedirectCallback={(appState) => {
          const targetUrl = appState?.returnTo || '/';
          window.history.replaceState({}, document.title, targetUrl);
        }}
      >
      <T4GBusinessProviders>
        <RouterContextInjector />
      </T4GBusinessProviders>
    </Auth0Provider>
  </StrictMode>
);

// This component injects queryClient and trpcClient into the router context
function RouterContextInjector() {
  const { getAccessTokenSilently, isAuthenticated, user, isLoading, loginWithRedirect, logout } = useAuth0();
  const [queryClient] = React.useState(() => new QueryClient());
  
  // Create trpcClient with Auth0 token for business backend
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3002/api/trpc', // Business backend runs on 3002
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
          <p className="text-lg text-muted-foreground">Loading business dashboard...</p>
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
              logout: () => logout({ logoutParams: { returnTo: 'http://localhost:4201' } })
            },
            queryClient,
            trpcClient,
          }}
        />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

function T4GBusinessProviders({ children }: { children: React.ReactNode }) {
  // This provider can be used for other global providers if needed for business dashboard
  return <>{children}</>;
}
