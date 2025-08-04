import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../styles.css';
import { AuthBusinessProvider } from '@t4g/auth-business';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { trpc, trpcClient } from './utils/trpc';
import { AppState } from '@auth0/auth0-react';

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
      <AuthBusinessProvider onRedirectCallback={onRedirectCallback}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </trpc.Provider>
      </AuthBusinessProvider>
    </StrictMode>
  );
}
