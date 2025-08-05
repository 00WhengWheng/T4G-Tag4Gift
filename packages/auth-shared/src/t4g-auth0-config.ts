// Shared T4G Auth0 configuration and helpers for both users and business platforms
// Usage: import { ... } from '@t4g/auth-shared/t4g-auth0-config'

export type T4GPlatform = 'users' | 'business';
export type T4GEnvironment = 'development' | 'staging' | 'production';

export interface T4GAuth0Config {
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  logoutUri: string;
  scope: string;
  platform: T4GPlatform;
}

// Users Platform Auth0 Configuration (t4g.fun)
export const usersAuth0Config: Record<T4GEnvironment, T4GAuth0Config> = {
  development: {
    domain: import.meta.env.VITE_AUTH0_USERS_DOMAIN || 'dev-t4g-users.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_USERS_CLIENT_ID || 'dev-users-client-id',
    audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE || 'http://localhost:3000/api',
    redirectUri: 'http://localhost:4200/callback',
    logoutUri: 'http://localhost:4200',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
  staging: {
    domain: import.meta.env.VITE_AUTH0_USERS_DOMAIN || 'staging-t4g-users.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_USERS_CLIENT_ID || 'staging-users-client-id',
    audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE || 'https://api-staging.t4g.fun',
    redirectUri: 'https://app-staging.t4g.fun/callback',
    logoutUri: 'https://app-staging.t4g.fun',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
  production: {
    domain: import.meta.env.VITE_AUTH0_USERS_DOMAIN || 'prod-t4g-users.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_USERS_CLIENT_ID || 'prod-users-client-id',
    audience: import.meta.env.VITE_AUTH0_USERS_AUDIENCE || 'https://api.t4g.fun',
    redirectUri: 'https://app.t4g.fun/callback',
    logoutUri: 'https://app.t4g.fun',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
};

// Business Platform Auth0 Configuration (t4g.space)
export const businessAuth0Config: Record<T4GEnvironment, T4GAuth0Config> = {
  development: {
    domain: import.meta.env.VITE_AUTH0_BUSINESS_DOMAIN || 'dev-t4g-business.auth0.com',
    clientId: import.meta.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'dev-business-client-id',
    audience: import.meta.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'http://localhost:3002/api',
    redirectUri: 'http://localhost:4202/callback',
    logoutUri: 'http://localhost:4202',
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

// Platform detection
export const detectT4GPlatform = (): T4GPlatform => {
  if (typeof window === 'undefined') {
    return (import.meta.env.VITE_T4G_PLATFORM as T4GPlatform) || 'users';
  }
  const hostname = window.location.hostname;
  if (hostname.includes('t4g.space')) return 'business';
  if (hostname.includes('t4g.fun')) return 'users';
  if (hostname.includes('4202') || hostname.includes('3002')) return 'business';
  if (hostname.includes('4200') || hostname.includes('3000')) return 'users';
  return 'users';
};

// Environment detection
export const getT4GEnvironment = (): T4GEnvironment => {
  if (import.meta.env.MODE === 'production') {
    return 'production';
  }
  if (import.meta.env.MODE === 'staging' || import.meta.env.VITE_ENVIRONMENT === 'staging') {
    return 'staging';
  }
  return 'development';
};

// Get config for current platform/environment
export const getT4GAuth0Config = (): T4GAuth0Config => {
  const platform = detectT4GPlatform();
  const environment = getT4GEnvironment();
  const config = platform === 'users' ? usersAuth0Config[environment] : businessAuth0Config[environment];
  return config;
};
