import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

// Define types directly in this file for now
interface User {
  id: string;
  email: string;
  name?: string;
  coinBalances?: {
    scanCoins: number;
    shareCoins: number;
    gameCoins: number;
  };
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

interface LoginCredentials {
  email?: string;
  password?: string;
}

interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  login: (credentials?: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
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
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent,
  notFoundComponent: RootNotFoundComponent,
});

// Root component with simplified layout
function RootComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<RootPendingComponent />}>
        <Outlet />
      </Suspense>
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </div>
  );
}

// Error component for route errors
function RootErrorComponent({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-muted-foreground mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Reload Page
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs bg-muted p-4 rounded overflow-auto max-h-40">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
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

// 404 Not Found component
function RootNotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.history.back()}
            className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go Back
          </button>
          <a
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
