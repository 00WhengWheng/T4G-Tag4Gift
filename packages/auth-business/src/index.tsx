import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface AuthBusinessProviderProps {
  children: ReactNode;
  onRedirectCallback?: (appState?: any) => void;
}

export function AuthBusinessProvider({ 
  children, 
  onRedirectCallback 
}: AuthBusinessProviderProps) {
  // Use environment variables or fallback values
  const domain = process.env['AUTH0_BUSINESS_DOMAIN'] || 'your-tenant.auth0.com';
  const clientId = process.env['AUTH0_BUSINESS_CLIENT_ID'] || 'your-client-id';
  const audience = process.env['AUTH0_BUSINESS_AUDIENCE'] || 'https://api.t4g.space';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : undefined,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
