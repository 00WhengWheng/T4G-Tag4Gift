import { Auth0Provider, AppState } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';

// Re-export AppState for use in consuming applications
export { AppState };

interface T4GAuthProviderProps {
  onRedirectCallback: (appState?: AppState) => void;
}

export const AuthUsersProvider = ({ children, onRedirectCallback }: PropsWithChildren<T4GAuthProviderProps>) => {
  const handleRedirectCallback = (appState?: AppState, user?: any) => {
    if (onRedirectCallback) {
      onRedirectCallback(appState);
    }
  };

  const domain = import.meta.env['VITE_AUTH0_USER_DOMAIN'];
  const clientId = import.meta.env['VITE_AUTH0_USER_CLIENT_ID'];
  const audience = import.meta.env['VITE_AUTH0_USER_AUDIENCE'];
  const redirectUri = window.location.origin;

  if (!domain || !clientId || !audience) {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Auth0 Configuration Error'),
      React.createElement('p', null, 'Please make sure VITE_AUTH0_USER_DOMAIN, VITE_AUTH0_USER_CLIENT_ID, and VITE_AUTH0_USER_AUDIENCE are set in your environment.')
    );
  }

  return (
    React.createElement(
      Auth0Provider,
      {
        domain: domain,
        clientId: clientId,
        authorizationParams: {
          redirect_uri: redirectUri,
          audience: audience,
        },
        onRedirectCallback: handleRedirectCallback
      },
      children
    )
  );
};
