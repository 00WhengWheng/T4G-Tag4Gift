
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { T4GAuth0Provider } from '@t4g/auth-shared/t4g-auth0-config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { trpc } from './utils/trpc';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@t4g/types';
import { useT4GAuth } from './hooks/useT4GAuth';

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




const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_USERS_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_USERS_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + '/callback',
          audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE,
          scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
        }}
      >
        <T4GAuth0Provider>
          <T4GProviders>
            <RouterContextInjector />
          </T4GProviders>
        </T4GAuth0Provider>
      </Auth0Provider>
    </StrictMode>
  );
}


// This component injects queryClient and trpcClient into the router context
function RouterContextInjector() {
  const { accessToken, ...auth } = useT4GAuth();
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: '/api/trpc',
          headers: () => {
            return accessToken ? { authorization: `Bearer ${accessToken}` } : {};
          },
        }),
      ],
    })
  );
  return (
    <RouterProvider
      router={router}
      context={{
        auth,
        queryClient,
        trpcClient,
      }}
    />
  );
}


function T4GProviders({ children }: { children: React.ReactNode }) {
  // This provider can be used for other global providers if needed
  return <>{children}</>;
}

