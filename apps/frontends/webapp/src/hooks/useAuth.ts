import { useAuth0 } from '@auth0/auth0-react';

export function useAuth() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout: auth0Logout,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const logout = () => {
    auth0Logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  };

  const login = () => {
    loginWithRedirect();
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
    getAccessTokenSilently,
  };
}
