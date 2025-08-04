import { Auth0Provider, AppState } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface T4GAuthProviderProps {
  onRedirectCallback: (appState?: AppState) => void;
}

export const AuthBusinessProvider = ({ children, onRedirectCallback }: PropsWithChildren<T4GAuthProviderProps>) => {
  const navigate = useNavigate();

  const handleRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const domain = import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE;
  const redirectUri = window.location.origin;

  if (!domain || !clientId || !audience) {
    return (
      <div>
        <h1>Auth0 Configuration Error</h1>
        <p>Please make sure VITE_AUTH0_BUSINESS_DOMAIN, VITE_AUTH0_BUSINESS_CLIENT_ID, and VITE_AUTH0_BUSINESS_AUDIENCE are set in your environment.</p>
      </div>
    );
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback || handleRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
