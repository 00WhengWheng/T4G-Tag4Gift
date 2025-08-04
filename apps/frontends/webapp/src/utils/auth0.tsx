// Enhanced Auth0 Configuration for T4G Dual Domain Architecture
// Users Platform: t4g.fun | Business Platform: t4g.space
import { Auth0Provider } from '@auth0/auth0-react';

// T4G Platform Types
export type T4GPlatform = 'users' | 'business';
export type T4GEnvironment = 'development' | 'staging' | 'production';

// Dual Domain Auth0 Configuration
interface T4GAuth0Config {
  domain: string;
  clientId: string;
  audience: string;
  redirectUri: string;
  logoutUri: string;
  scope: string;
  platform: T4GPlatform;
}

// Users Platform Auth0 Configuration (t4g.fun)
const usersAuth0Config: Record<T4GEnvironment, T4GAuth0Config> = {
  development: {
    domain: process.env.VITE_AUTH0_USERS_DOMAIN || 'dev-t4g-users.auth0.com',
    clientId: process.env.VITE_AUTH0_USERS_CLIENT_ID || 'dev-users-client-id',
    audience: process.env.VITE_AUTH0_USERS_AUDIENCE || 'http://localhost:3000/api',
    redirectUri: 'http://localhost:4200/callback',
    logoutUri: 'http://localhost:4200',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
  staging: {
    domain: process.env.VITE_AUTH0_USERS_DOMAIN || 'staging-t4g-users.auth0.com',
    clientId: process.env.VITE_AUTH0_USERS_CLIENT_ID || 'staging-users-client-id',
    audience: process.env.VITE_AUTH0_USERS_AUDIENCE || 'https://api-staging.t4g.fun',
    redirectUri: 'https://app-staging.t4g.fun/callback',
    logoutUri: 'https://app-staging.t4g.fun',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
  production: {
    domain: process.env.VITE_AUTH0_USERS_DOMAIN || 'prod-t4g-users.auth0.com',
    clientId: process.env.VITE_AUTH0_USERS_CLIENT_ID || 'prod-users-client-id',
    audience: process.env.VITE_AUTH0_USERS_AUDIENCE || 'https://api.t4g.fun',
    redirectUri: 'https://app.t4g.fun/callback',
    logoutUri: 'https://app.t4g.fun',
    scope: 'openid profile email read:profile write:tags join:challenges manage:coins',
    platform: 'users',
  },
};

// Business Platform Auth0 Configuration (t4g.space)
const businessAuth0Config: Record<T4GEnvironment, T4GAuth0Config> = {
  development: {
    domain: process.env.VITE_AUTH0_BUSINESS_DOMAIN || 'dev-t4g-business.auth0.com',
    clientId: process.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'dev-business-client-id',
    audience: process.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'http://localhost:3002/api',
    redirectUri: 'http://localhost:4202/callback',
    logoutUri: 'http://localhost:4202',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
  staging: {
    domain: process.env.VITE_AUTH0_BUSINESS_DOMAIN || 'staging-t4g-business.auth0.com',
    clientId: process.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'staging-business-client-id',
    audience: process.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://api-staging.t4g.space',
    redirectUri: 'https://app-staging.t4g.space/callback',
    logoutUri: 'https://app-staging.t4g.space',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
  production: {
    domain: process.env.VITE_AUTH0_BUSINESS_DOMAIN || 'prod-t4g-business.auth0.com',
    clientId: process.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'prod-business-client-id',
    audience: process.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://api.t4g.space',
    redirectUri: 'https://app.t4g.space/callback',
    logoutUri: 'https://app.t4g.space',
    scope: 'openid profile email read:analytics write:gifts manage:venues manage:challenges',
    platform: 'business',
  },
};

// Detect platform based on domain/URL
export const detectT4GPlatform = (): T4GPlatform => {
  if (typeof window === 'undefined') {
    // SSR - check environment variable or default to users
    return (process.env.VITE_T4G_PLATFORM as T4GPlatform) || 'users';
  }
  
  const hostname = window.location.hostname;
  
  // Production domains
  if (hostname.includes('t4g.space')) return 'business';
  if (hostname.includes('t4g.fun')) return 'users';
  
  // Development ports
  if (hostname.includes('4202') || hostname.includes('3002')) return 'business';
  if (hostname.includes('4200') || hostname.includes('3000')) return 'users';
  
  // Default to users platform
  return 'users';
};

// Get environment
export const getT4GEnvironment = (): T4GEnvironment => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  }
  if (process.env.NODE_ENV === 'staging' || process.env.VITE_ENVIRONMENT === 'staging') {
    return 'staging';
  }
  return 'development';
};

// Get Auth0 configuration based on platform and environment
export const getT4GAuth0Config = (): T4GAuth0Config => {
  const platform = detectT4GPlatform();
  const environment = getT4GEnvironment();
  
  const config = platform === 'users' 
    ? usersAuth0Config[environment]
    : businessAuth0Config[environment];
  
  console.log(`🔐 T4G Auth0 Config: ${platform} platform, ${environment} environment`);
  
  return config;
};

// Enhanced Auth0 user profile interface with T4G custom claims
export interface T4GAuth0User {
  sub: string;
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  updated_at: string;
  
  // T4G Users Platform Custom Claims (t4g.fun)
  'https://t4g.fun/user_id'?: string;
  'https://t4g.fun/coin_balances'?: {
    scanCoins: number;
    shareCoins: number;
    gameCoins: number;
  };
  'https://t4g.fun/preferences'?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
  'https://t4g.fun/stats'?: {
    totalTags: number;
    challengesWon: number;
    level: number;
  };
  
  // T4G Business Platform Custom Claims (t4g.space)
  'https://t4g.space/business_id'?: string;
  'https://t4g.space/business_profile'?: {
    businessName: string;
    businessType: string;
    subscription: 'free' | 'premium' | 'enterprise';
  };
  'https://t4g.space/permissions'?: {
    canManageVenues: boolean;
    canCreateChallenges: boolean;
    canViewAnalytics: boolean;
    maxVenues: number;
  };
  'https://t4g.space/owned_venues'?: string[];
}

// Enhanced error handling with platform context
export const handleT4GAuth0Error = (error: any, platform: T4GPlatform) => {
  console.error(`T4G ${platform} Auth0 Error:`, error);
  
  const platformName = platform === 'users' ? 'User' : 'Business';
  
  if (error.error === 'access_denied') {
    return `${platformName} access denied. Please check your credentials and permissions.`;
  }
  
  if (error.error === 'unauthorized') {
    return `Unauthorized ${platformName.toLowerCase()} access. Please login again.`;
  }
  
  if (error.error === 'login_required') {
    return `${platformName} login required. Please authenticate.`;
  }
  
  if (error.error_description) {
    return `${platformName} authentication error: ${error.error_description}`;
  }
  
  return `${platformName} authentication failed. Please try again.`;
};

// Enhanced T4G Auth0 Provider with dual domain support
export const T4GAuth0Provider = ({ children }: { children: React.ReactNode }) => {
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
      // Add platform context to Auth0 state
      onRedirectCallback={(appState) => {
        console.log(`🔄 T4G ${config.platform} Auth0 redirect callback:`, appState);
        // Custom redirect logic based on platform
        const targetUrl = appState?.returnTo || window.location.pathname;
        window.history.replaceState({}, document.title, targetUrl);
      }}
    >
      {children}
    </Auth0Provider>
  );
};
