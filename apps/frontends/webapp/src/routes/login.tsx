import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useT4GAuth } from '@/hooks/useT4GAuth';
import { PlatformSwitcher } from '@/components/auth/PlatformSwitcher';
import { useEffect } from 'react';

export const Route = createFileRoute('/login')({
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: (search.redirect as string) || '/',
    platform: (search.platform as 'users' | 'business') || undefined,
  }),
  beforeLoad: ({ context, search }) => {
    // If user is already authenticated, redirect to the intended destination
    if (context.auth.isAuthenticated) {
      throw new Response('', {
        status: 302,
        headers: {
          Location: search.redirect || '/',
        },
      });
    }
  },
});

function LoginPage() {
  const { isAuthenticated, isLoading, user, platform, login, error } = useT4GAuth();
  const navigate = useNavigate();
  const search = Route.useSearch() as { redirect?: string };

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectTo = search.redirect || '/dashboard';
      navigate({ to: redirectTo, replace: true });
    }
  }, [isAuthenticated, user, navigate, search.redirect]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const platformConfig = {
    users: {
      title: 'T4G Users Platform',
      subtitle: 'Games & Challenges',
      description: 'Join challenges, play games, and win real prizes!',
      emoji: '🎮',
      features: ['Scan QR codes at venues', 'Play exciting games', 'Win real rewards', 'Social media integration'],
      domain: 't4g.fun'
    },
    business: {
      title: 'T4G Business Platform', 
      subtitle: 'Dashboard & Analytics',
      description: 'Manage your venues, create challenges, and engage customers!',
      emoji: '🏢',
      features: ['Venue management', 'Challenge creation', 'Customer analytics', 'Revenue tracking'],
      domain: 't4g.space'
    }
  };

  const currentPlatform = platformConfig[platform];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 mb-2">
            Loading {currentPlatform.title}...
          </p>
          <p className="text-sm text-gray-500">
            {currentPlatform.emoji} {currentPlatform.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header with Platform Switcher */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <h1 className="text-xl font-bold text-gray-900">Tag4Gift</h1>
            </div>
            <PlatformSwitcher />
          </div>
        </div>
      </header>

      {/* Main Login Content */}
      <main className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          {/* Platform Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">{currentPlatform.emoji}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentPlatform.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {currentPlatform.description}
              </p>
              
              {/* Platform Features */}
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Platform Features:</h3>
                <ul className="space-y-2">
                  {currentPlatform.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Login Button */}
            <div className="space-y-4">
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🔐</span>
                    Sign in to {currentPlatform.subtitle}
                  </>
                )}
              </button>

              {/* Platform Domain Info */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Signing in to <span className="font-mono font-medium">{currentPlatform.domain}</span>
                </p>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <div>
                    <p className="text-sm font-medium text-red-800">Authentication Error</p>
                    <p className="text-sm text-red-600 mt-1">{error}</p>
                  </div>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-3 text-sm text-red-700 hover:text-red-800 underline"
                >
                  Try again
                </button>
              </div>
            )}
          </div>

          {/* Platform Switch Suggestion */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Looking for the {platform === 'users' ? 'business' : 'users'} platform?
            </p>
            <PlatformSwitcher showFullLabel={true} className="mx-auto" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Tag4Gift. All rights reserved.</p>
            <p className="mt-1">
              Secure authentication powered by Auth0 • Platform: {currentPlatform.domain}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}