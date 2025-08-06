import { createFileRoute } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from '../pages/HomePage';

export const Route = createFileRoute('/')({
  component: AuthenticatedHomePage,
});

function AuthenticatedHomePage() {
  const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();

  console.log('🏠 Index route state:', { isAuthenticated, isLoading, user: user?.email || 'none' });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('🔐 User not authenticated, showing login page');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Tag4Gift</h1>
          <p className="text-gray-300 mb-8">
            Please sign in to start tagging venues, playing games, and winning real rewards!
          </p>
          <button
            onClick={() => {
              console.log('🔐 Initiating login...');
              console.log('🔗 Current origin:', window.location.origin);
              console.log('🔗 Expected callback:', window.location.origin + '/callback');
              loginWithRedirect({ 
                authorizationParams: { screen_hint: 'login' },
                appState: { returnTo: '/' }
              });
            }}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              console.log('🔐 Initiating signup...');
              loginWithRedirect({ 
                authorizationParams: { screen_hint: 'signup' },
                appState: { returnTo: '/' }
              });
            }}
            className="w-full mt-3 border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  console.log('✅ User authenticated, showing homepage for:', user?.email);
  // User is authenticated, show the main homepage
  return <HomePage />;
}

