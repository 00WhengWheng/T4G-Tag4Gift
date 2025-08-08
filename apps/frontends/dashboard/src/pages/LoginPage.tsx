import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const [backendMessage, setBackendMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const callBackend = async () => {
    setLoading(true);
    setBackendMessage(null);
    try {
      const token = await getAccessTokenSilently();
      // Call business backend tenant service
      const res = await fetch('/api/business/tenant/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setBackendMessage(data.message || 'Success!');
    } catch (err: any) {
      setBackendMessage('Backend call failed: ' + (err?.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">T4G Business Dashboard</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Please log in to manage your venues and gifts
        </p>
        <button
          onClick={onLogin}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-4"
        >
          Log In
        </button>
        {isAuthenticated && (
          <>
            <div className="mb-2">Logged in as <b>{user?.email}</b></div>
            <button
              onClick={callBackend}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Contacting Backend...' : 'Test Tenant Service'}
            </button>
            {backendMessage && <div className="mt-4 text-sm text-gray-700">{backendMessage}</div>}
          </>
        )}
      </div>
    </div>
  );
};
