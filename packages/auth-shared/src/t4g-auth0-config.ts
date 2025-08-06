// ...existing code...
// Shared T4G Auth0 configuration and helpers for both users and business platforms
// Usage: import { ... } from '@t4g/auth-shared'

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

export function makeUsersAuth0Config(params: {
  environment: T4GEnvironment;
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  logoutUri: string;
  scope?: string;
}): T4GAuth0Config {
  return {
    domain: params.domain,
    clientId: params.clientId,
    audience: params.audience,
    redirectUri: params.redirectUri,
    logoutUri: params.logoutUri,
    scope:
      params.scope ||
      'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  };
}

// Business Platform Auth0 Configuration (t4g.space)

export function makeBusinessAuth0Config(params: {
  environment: T4GEnvironment;
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  logoutUri: string;
  scope?: string;
}): T4GAuth0Config {
  return {
    domain: params.domain,
    clientId: params.clientId,
    audience: params.audience,
    redirectUri: params.redirectUri,
    logoutUri: params.logoutUri,
    scope:
      params.scope ||
      'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  };
}

// No platform/env detection helpers here. Pass all values from your app or backend.
