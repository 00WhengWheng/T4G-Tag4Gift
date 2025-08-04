
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { AuthUsersProvider } from '@t4g/auth-users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { trpc, trpcClient } from './utils/trpc';
import { AppState } from '@t4g/auth-users';

const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!, // This will be managed by the AuthProvider
    queryClient,
    trpcClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const onRedirectCallback = (appState?: AppState) => {
  router.navigate({
    to: appState?.returnTo || '/',
  });
};

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthUsersProvider onRedirectCallback={onRedirectCallback}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </trpc.Provider>
      </AuthUsersProvider>
    </StrictMode>
  );
}

