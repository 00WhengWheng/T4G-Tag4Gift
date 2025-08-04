
import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { trpc, createT4GTRPCClient } from './utils/trpc'
import type { RouterContext } from './routes/__root'
import { T4GAuth0Provider } from './utils/auth0'
import { useT4GAuth } from './hooks/useT4GAuth'

// Create TanStack Query client with enhanced configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 10 * 60 * 1000, // 10 minutes  
      retry: (failureCount, error: any) => {
        // Don't retry for auth errors
        if (error?.status === 401 || error?.status === 403) {
          return false;
        }
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      networkMode: 'offlineFirst', // Better offline experience
    },
    mutations: {
      retry: 1,
      networkMode: 'offlineFirst',
    },
  },
});

// Enhanced Authentication context interface
interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  isLoading: boolean;
}

// T4G User types  
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
  email: string;
  password: string;
}

// Create tRPC client instance
const trpcClient = createT4GTRPCClient(queryClient);

// Create TanStack Router instance with enhanced context
const router = createRouter({ 
  routeTree,
  context: {
    auth: undefined!, // Will be provided by React component
    queryClient,
    trpcClient,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Enhanced AuthProvider using T4G Dual Domain Auth0
function AuthProvider() {
  const t4gAuth = useT4GAuth();

  // Adapt T4G auth to router context format with platform awareness
  const auth: AuthContext = {
    isAuthenticated: t4gAuth.isAuthenticated,
    user: t4gAuth.user,
    login: async (credentials?: LoginCredentials) => {
      // For Auth0, we ignore credentials and use redirect flow
      const screenHint = credentials ? 'login' : 'login';
      await t4gAuth.login({ screen_hint: screenHint });
    },
    logout: t4gAuth.logout,
    refreshToken: t4gAuth.refreshToken,
    isLoading: t4gAuth.isLoading,
  };

  // Enhanced loading state with platform info
  if (t4gAuth.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Initializing {t4gAuth.platform === 'users' ? 'T4G Users' : 'T4G Business'} Platform...
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            {t4gAuth.platform === 'users' ? '🎮 Games & Challenges' : '🏢 Business Dashboard'}
          </p>
        </div>
      </div>
    );
  }

  // Enhanced error state with platform context
  if (t4gAuth.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {t4gAuth.platform === 'users' ? 'T4G Users' : 'T4G Business'} Authentication Error
          </h1>
          <p className="text-muted-foreground mb-6">
            {t4gAuth.error}
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry Authentication
            </button>
            {t4gAuth.platform === 'users' && (
              <button
                onClick={() => t4gAuth.switchPlatform('business')}
                className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Switch to Business Platform
              </button>
            )}
            {t4gAuth.platform === 'business' && (
              <button
                onClick={() => t4gAuth.switchPlatform('users')}
                className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Switch to Users Platform
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ auth, queryClient, trpcClient }} />
    </QueryClientProvider>
  );
}

// App with Auth0 Provider wrapper
function App() {
  return (
    <T4GAuth0Provider>
      <AuthProvider />
    </T4GAuth0Provider>
  );
}