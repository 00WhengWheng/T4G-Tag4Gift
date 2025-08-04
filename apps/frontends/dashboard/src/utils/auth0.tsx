import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';

// T4G Business Platform Configuration (t4g.space domain)
export interface T4GBusinessUser {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  businessProfile?: {
    businessId: string;
    businessName: string;
    role: 'owner' | 'manager' | 'staff';
    permissions: string[];
  };
  ownedVenues?: Array<{
    id: string;
    name: string;
    location: string;
  }>;
  subscription?: {
    plan: 'free' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'trial';
  };
}

// Business Platform Auth0 Configuration
const businessAuthConfig = {
  domain: process.env.VITE_AUTH0_BUSINESS_DOMAIN || 'your-business-tenant.auth0.com',
  clientId: process.env.VITE_AUTH0_BUSINESS_CLIENT_ID || 'your-business-client-id',
  audience: process.env.VITE_AUTH0_BUSINESS_AUDIENCE || 'https://api.t4g.space',
  redirectUri: typeof window !== 'undefined' ? window.location.origin + '/callback' : 'https://app.t4g.space/callback',
  logoutUrl: typeof window !== 'undefined' ? window.location.origin : 'https://app.t4g.space',
  scope: 'openid profile email read:business write:venues manage:challenges read:analytics',
};

interface T4GBusinessAuth0ProviderProps {
  children: ReactNode;
}

export function T4GBusinessAuth0Provider({ children }: T4GBusinessAuth0ProviderProps) {
  const onRedirectCallback = (appState?: any) => {
    // Handle post-login redirect for business users
    const targetUrl = appState?.returnTo || window.location.pathname;
    window.history.replaceState({}, document.title, targetUrl);
  };

  return (
    <Auth0Provider
      domain={businessAuthConfig.domain}
      clientId={businessAuthConfig.clientId}
      authorizationParams={{
        redirect_uri: businessAuthConfig.redirectUri,
        audience: businessAuthConfig.audience,
        scope: businessAuthConfig.scope,
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage" // Important for business dashboard sessions
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
    >
      {children}
    </Auth0Provider>
  );
}

// Business-specific Auth Hook
export function useT4GBusinessAuth() {
  const {
    isAuthenticated,
    isLoading,
    user: auth0User,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    error,
  } = useAuth0();

  // Transform Auth0 user to T4G Business User
  const user: T4GBusinessUser | null = auth0User ? {
    id: auth0User.sub || '',
    email: auth0User.email || '',
    name: auth0User.name,
    picture: auth0User.picture,
    businessProfile: {
      businessId: auth0User['https://t4g.space/business_id'] || '',
      businessName: auth0User['https://t4g.space/business_name'] || '',
      role: auth0User['https://t4g.space/role'] || 'owner',
      permissions: auth0User['https://t4g.space/permissions'] || [],
    },
    ownedVenues: auth0User['https://t4g.space/venues'] || [],
    subscription: {
      plan: auth0User['https://t4g.space/plan'] || 'free',
      status: auth0User['https://t4g.space/status'] || 'active',
    },
  } : null;

  const login = () => {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
      authorizationParams: {
        screen_hint: 'login',
        prompt: 'login',
      },
    });
  };

  const logoutUser = () => {
    logout({
      logoutParams: {
        returnTo: businessAuthConfig.logoutUrl,
      },
    });
  };

  const getToken = async () => {
    try {
      return await getAccessTokenSilently({
        authorizationParams: {
          audience: businessAuthConfig.audience,
          scope: businessAuthConfig.scope,
        },
      });
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout: logoutUser,
    getToken,
    error: error?.message,
    // Business-specific properties
    businessId: user?.businessProfile?.businessId,
    businessName: user?.businessProfile?.businessName,
    role: user?.businessProfile?.role,
    permissions: user?.businessProfile?.permissions || [],
    ownedVenues: user?.ownedVenues || [],
    subscription: user?.subscription,
  };
}

// Auth Guard Hook for Protected Routes
export function useBusinessAuthGuard(requiredPermissions: string[] = []) {
  const { isAuthenticated, isLoading, permissions } = useT4GBusinessAuth();

  const hasPermission = (permission: string) => permissions.includes(permission);
  const hasAllPermissions = (perms: string[]) => perms.every(hasPermission);

  const canAccess = isAuthenticated && hasAllPermissions(requiredPermissions);

  return {
    isAuthenticated,
    isLoading,
    canAccess,
    hasPermission,
    hasAllPermissions,
    permissions,
  };
}
