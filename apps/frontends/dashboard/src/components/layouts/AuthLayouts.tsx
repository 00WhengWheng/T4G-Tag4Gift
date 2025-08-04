import { ReactNode } from 'react';
import { redirect, useLocation } from 'react-router';
import { useT4GBusinessAuth } from '../../utils/auth0';

interface ProtectedLayoutProps {
  children: ReactNode;
  requiredPermissions?: string[];
}

export function ProtectedLayout({ children, requiredPermissions = [] }: ProtectedLayoutProps) {
  const location = useLocation();
  const { 
    isAuthenticated, 
    isLoading, 
    user, 
    businessName, 
    role,
    subscription,
    error 
  } = useT4GBusinessAuth();

  // Show loading state during auth initialization
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 mb-2">
            Loading T4G Business Dashboard...
          </p>
          <p className="text-sm text-gray-500">
            🏢 Preparing your business analytics
          </p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Business Authentication Error
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="block w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Retry Authentication
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated || !user) {
    // Use React Router v7 redirect
    window.location.href = `/login?from=${encodeURIComponent(location.pathname)}`;
    return null;
  }

  // Main business dashboard layout
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Navigation Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Business Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                <h1 className="text-xl font-bold text-gray-900">T4G Business</h1>
              </div>
              <div className="hidden sm:block">
                <span className="text-sm text-gray-500">
                  {businessName || 'Business Dashboard'}
                </span>
              </div>
            </div>

            {/* Business User Controls */}
            <div className="flex items-center gap-4">
              {/* Subscription Badge */}
              {subscription && (
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  subscription.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' :
                  subscription.plan === 'premium' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {subscription.plan.toUpperCase()}
                </div>
              )}
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {user.name || user.email}
                  </div>
                  <div className="text-xs text-gray-500">
                    {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Business User'}
                  </div>
                </div>
                
                {/* User Avatar */}
                <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {(user.name || user.email)?.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Business Context Banner (for development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-medium">Development Mode:</span>
              <span className="text-green-700">
                Platform: <strong>Business (t4g.space)</strong> | 
                Business: <strong>{businessName || 'Not Set'}</strong> |
                Role: <strong>{role || 'Unknown'}</strong> |
                User: <strong>{user.email}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Route Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {children}
        </div>
      </main>

      {/* Business Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              &copy; 2024 Tag4Gift Business Platform. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Domain: t4g.space</span>
              <span>Plan: {subscription?.plan || 'Free'}</span>
              <span>Version: 1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Public Layout Component  
 * For routes that don't require authentication (login, landing page, etc.)
 */
export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header for public pages */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              <h1 className="text-xl font-bold text-gray-900">T4G Business</h1>
              <span className="text-sm text-gray-500 ml-4">
                Dashboard Platform
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Public content */}
      <main>
        {children}
      </main>

      {/* Simple footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500">
            &copy; 2024 T4G Business Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
