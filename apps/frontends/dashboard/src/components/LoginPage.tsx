import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { useT4GBusinessAuth } from '../utils/auth0';
import { PublicLayout } from './layouts/AuthLayouts';

export function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user, login, error } = useT4GBusinessAuth();
  const from = searchParams.get('from') || '/';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, user, navigate, from]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Business login failed:', error);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Redirecting to Business Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Business Platform Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">🏢</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                T4G Business Platform
              </h2>
              <p className="text-gray-600 mb-6">
                Manage your venues, create challenges, and engage customers through our gamified platform.
              </p>
              
              {/* Business Platform Features */}
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Business Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Venue management & analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Challenge & tournament creation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Customer engagement tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Revenue & performance insights
                  </li>
                </ul>
              </div>
            </div>

            {/* Login Button */}
            <div className="space-y-4">
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🔐</span>
                    Sign in to Business Dashboard
                  </>
                )}
              </button>

              {/* Platform Domain Info */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Signing in to <span className="font-mono font-medium">t4g.space</span>
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

          {/* Users Platform Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Looking for the users platform?
            </p>
            <a
              href="https://app.t4g.fun"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 underline"
            >
              <span>🎮</span>
              Visit T4G Users Platform
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
