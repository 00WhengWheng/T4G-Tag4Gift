import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Loader2 } from 'lucide-react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Toaster } from '@t4g/ui-web';

export function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Loading business dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Authentication Error</h1>
          <p className="text-sm text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to T4G Business Dashboard</h1>
          <p className="text-muted-foreground mb-6">Please sign in to access your business dashboard</p>
          <button
            onClick={() => window.location.href = '/login'}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <Outlet />
      <Toaster />
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </DashboardLayout>
  );
}
