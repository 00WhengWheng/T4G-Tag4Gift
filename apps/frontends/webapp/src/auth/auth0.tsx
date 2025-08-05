import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

// Use Vite env variables for frontend config
const domain = import.meta.env.VITE_AUTH_USERS_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH_USERS_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH_USERS_AUTH0_AUDIENCE;
const redirectUri = window.location.origin + '/callback';

if (!domain || !clientId) {
  // eslint-disable-next-line no-console
  console.error('Auth0 config missing: VITE_AUTH_USERS_AUTH0_DOMAIN and VITE_AUTH_USERS_AUTH0_CLIENT_ID are required');
}

export const Auth0ProviderWithConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!domain || !clientId) {
    return <>{children}</>;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        ...(audience ? { audience } : {})
      }}
    >
      {children}
    </Auth0Provider>
  );
};
