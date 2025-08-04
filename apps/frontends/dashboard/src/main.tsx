import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../styles.css';
import { AuthBusinessProvider } from '@t4g/auth-business';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Route as rootRoute } from './routes/__root';
import { Route as dashboardRoute } from './routes/dashboard';
import { Route as indexRoute } from './routes/index';
import { Route as giftsRoute } from './routes/gifts';
import { Route as challengesRoute } from './routes/challenges';
import { Route as analyticsRoute } from './routes/analytics';
import { Route as mapRoute } from './routes/map';
import { Route as usersRoute } from './routes/users';
import { Route as profileRoute } from './routes/profile';
import { Route as loginRoute } from './routes/login';
import { trpc, trpcClient } from './utils/trpc';
import { AppState } from '@auth0/auth0-react';

const queryClient = new QueryClient();

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  giftsRoute,
  challengesRoute,
  analyticsRoute,
  mapRoute,
  usersRoute,
  profileRoute,
  loginRoute,
]);

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
            <App />
          </QueryClientProvider>
        </trpc.Provider>
      </AuthBusinessProvider>
    </StrictMode>
  );
}
