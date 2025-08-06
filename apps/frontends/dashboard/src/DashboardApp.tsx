import { useAuth0 } from '@auth0/auth0-react';
import { Loader2 } from 'lucide-react';
import { DashboardHome } from './pages/DashboardHome';

export function DashboardApp() {
  const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

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
          <button 
            onClick={() => loginWithRedirect()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to T4G Business Dashboard</h1>
          <p className="text-muted-foreground mb-6">Please log in to access your business analytics</p>
          <button 
            onClick={() => loginWithRedirect()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  // User is authenticated - show the dashboard
  return <DashboardHome />;
}
