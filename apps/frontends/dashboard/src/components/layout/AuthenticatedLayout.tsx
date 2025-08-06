import { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from '@tanstack/react-router';
import { DashboardShell } from './DashboardShell';

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth0();

  // Show loading spinner while Auth0 is checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render dashboard shell for authenticated users
  return <DashboardShell>{children}</DashboardShell>;
}
