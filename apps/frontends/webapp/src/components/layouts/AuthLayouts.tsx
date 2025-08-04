import { Outlet, useRouterState, Navigate } from '@tanstack/react-router';
import { useT4GAuth } from '@/hooks/useT4GAuth';
import { PlatformSwitcher } from '@/components/auth/PlatformSwitcher';

/**
 * Protected Layout Component
 * Provides authentication enforcement and platform context for all child routes
 */
export function ProtectedLayout() {
  const { isAuthenticated, isLoading, user, platform, error } = useT4GAuth();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Show loading state during auth initialization
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 mb-2">
            Loading {platform === 'users' ? 'T4G Users' : 'T4G Business'} Platform...
          </p>
          <p className="text-sm text-gray-500">
            {platform === 'users' ? '🎮 Preparing your gaming experience' : '🏢 Loading business dashboard'}
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
            Authentication Error
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
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
    return <Navigate to="/login" search={{ redirect: currentPath }} replace />;
  }

  // Main protected layout with navigation
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Platform Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {platform === 'users' ? '🎮' : '🏢'}
                </span>
                <h1 className="text-xl font-bold text-gray-900">
                  {platform === 'users' ? 'T4G Users' : 'T4G Business'}
                </h1>
              </div>
              <div className="hidden sm:block text-sm text-gray-500">
                {platform === 'users' ? 'Games & Challenges Platform' : 'Business Dashboard'}
              </div>
            </div>

            {/* User Controls */}
            <div className="flex items-center gap-4">
              {/* Platform Switcher */}
              <PlatformSwitcher />
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {user.name || user.email}
                  </div>
                  <div className="text-xs text-gray-500">
                    {platform === 'users' ? 'Player' : 'Business User'}
                  </div>
                </div>
                
                {/* User Avatar */}
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {(user.name || user.email)?.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Platform Context Banner (for development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-yellow-600 font-medium">Development Mode:</span>
              <span className="text-yellow-700">
                Platform: <strong>{platform}</strong> | 
                Domain: <strong>{platform === 'users' ? 't4g.fun' : 't4g.space'}</strong> |
                User: <strong>{user.email}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Route Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              &copy; 2024 Tag4Gift. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Platform: {platform === 'users' ? 'T4G Users' : 'T4G Business'}</span>
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
export function PublicLayout() {
  const { platform } = useT4GAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header for public pages */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <h1 className="text-xl font-bold text-gray-900">Tag4Gift</h1>
              {platform && (
                <span className="text-sm text-gray-500 ml-4">
                  {platform === 'users' ? 'Users Platform' : 'Business Platform'}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Public content */}
      <main>
        <Outlet />
      </main>

      {/* Simple footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500">
            &copy; 2024 Tag4Gift. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
