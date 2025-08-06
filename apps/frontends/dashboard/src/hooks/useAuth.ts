import { useAuth0 } from '@auth0/auth0-react';

export interface User {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  email_verified?: boolean;
  nickname?: string;
}

export function useAuth() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  return {
    user: user as User | undefined,
    isAuthenticated,
    isLoading,
    login: () => loginWithRedirect(),
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
  };
}
