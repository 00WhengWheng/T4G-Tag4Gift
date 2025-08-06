import {
  createRootRouteWithContext,
  Outlet,
  useRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Define types directly in this file for now
interface BusinessUser {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
  businessProfile?: {
    businessName: string;
    businessType: string;
    subscription: 'free' | 'premium' | 'enterprise';
  };
}

interface LoginCredentials {
  email?: string;
  password?: string;
}

export interface AuthContext {
  isAuthenticated: boolean;
  user: BusinessUser | null;
  login: (credentials?: LoginCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// Enhanced router context interface
export interface RouterContext {
  auth: AuthContext;
  queryClient: QueryClient;
  trpcClient: any; // Simplified for now
}

// Create root route with context
export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

// Root component with proper layout
function RootComponent() {
  const {
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const auth: AuthContext = {
    isAuthenticated,
    user: user ? { ...user, id: user.sub! } : null,
    login: loginWithRedirect,
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
    isLoading,
  };

  const router = useRouter();
  router.options.context.auth = auth;

  // Show loading spinner while Auth0 is initializing
  if (isLoading) {
    return <RootPendingComponent />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<RootPendingComponent />}>
        <Outlet />
      </Suspense>
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools position="bottom-right" />}
    </div>
  );
}

// Loading component for pending routes
function RootPendingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
