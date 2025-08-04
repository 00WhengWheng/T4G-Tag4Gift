import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useSearchParams } from 'react-router';

export function CallbackPage() {
  const { isLoading, error, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Get the intended destination from URL params or default to dashboard
        const returnTo = searchParams.get('returnTo') || '/';
        navigate(returnTo, { replace: true });
      } else if (error) {
        // Redirect to login with error
        navigate('/login?error=' + encodeURIComponent(error.message), { replace: true });
      }
    }
  }, [isLoading, isAuthenticated, error, navigate, searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Authentication Error
          </h1>
          <p className="text-gray-600 mb-6">
            {error.message}
          </p>
          <button
            onClick={() => navigate('/login', { replace: true })}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 mb-2">
          Completing Business Authentication...
        </p>
        <p className="text-sm text-gray-500">
          🏢 Setting up your business dashboard
        </p>
      </div>
    </div>
  );
}
