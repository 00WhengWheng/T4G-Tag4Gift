// Fix for Vite env typing in TypeScript
/// <reference types="vite/client" />

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React from 'react';

// T4G Platform Types
export type T4GPlatform = 'users' | 'business';
export type T4GEnvironment = 'development' | 'staging' | 'production';

interface T4GAuth0Config {
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  logoutUri: string;
  scope: string;
  platform: T4GPlatform;
}

// Business Platform Auth0 Configuration (t4g.space)
const businessAuth0Config: Record<T4GEnvironment, T4GAuth0Config> = {
  development: {
    domain: import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN || 'dev-t4g-business.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'dev-business-client-id',
    audience: import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'http://localhost:3002/api',
    redirectUri: 'http://localhost:4201/callback',
    logoutUri: 'http://localhost:4201',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
  staging: {
    domain: import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN || 'staging-t4g-business.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'staging-business-client-id',
    audience: import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://api-staging.t4g.space',
    redirectUri: 'https://app-staging.t4g.space/callback',
    logoutUri: 'https://app-staging.t4g.space',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
  production: {
    domain: import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN || 'prod-t4g-business.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'prod-business-client-id',
    audience: import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://api.t4g.space',
    redirectUri: 'https://app.t4g.space/callback',
    logoutUri: 'https://app.t4g.space',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
};


// Detect platform (future-proof, in case dashboard is ever used for users)
export const detectT4GPlatform = (): T4GPlatform => {
  if (typeof window === 'undefined') {
    return (import.meta.env.VITE_T4G_PLATFORM as T4GPlatform) || 'business';
  }
  const hostname = window.location.hostname;
  if (hostname.includes('t4g.space')) return 'business';
  if (hostname.includes('t4g.fun')) return 'users';
  if (hostname.includes('4202') || hostname.includes('3002')) return 'business';
  if (hostname.includes('4200') || hostname.includes('3000')) return 'users';
  return 'business';
};

// Detect environment
export const getT4GEnvironment = (): T4GEnvironment => {
  if (import.meta.env.MODE === 'production') {
    return 'production';
  }
  if (import.meta.env.MODE === 'staging' || import.meta.env.VITE_ENVIRONMENT === 'staging') {
    return 'staging';
  }
  return 'development';
};

// Get Auth0 configuration based on platform and environment (future-proof)
export const getT4GAuth0Config = (): T4GAuth0Config => {
  const platform = detectT4GPlatform();
  const environment = getT4GEnvironment();
  // Only business config for now, but ready for users if needed
  const config = businessAuth0Config[environment];
  console.log(`🔐 T4G Auth0 Config: ${platform} platform, ${environment} environment`);
  return config;
};

// Enhanced T4G Auth0 Provider for business dashboard
export const T4GBusinessAuth0Provider = ({ children }: { children: React.ReactNode }) => {
  const config = getT4GAuth0Config();
  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      authorizationParams={{
        redirect_uri: config.redirectUri,
        audience: config.audience,
        scope: config.scope,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      skipRedirectCallback={window.location.pathname === '/callback'}
      onRedirectCallback={(appState) => {
        const targetUrl = appState?.returnTo || window.location.pathname;
        window.history.replaceState({}, document.title, targetUrl);
      }}
    >
      {children}
    </Auth0Provider>
  );
};

// Alias for compatibility with main.tsx import
export const T4GAuth0Provider = T4GBusinessAuth0Provider;
