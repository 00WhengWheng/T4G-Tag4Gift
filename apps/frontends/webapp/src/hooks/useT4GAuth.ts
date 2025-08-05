import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { 
  detectT4GPlatform, 
  getT4GAuth0Config, 
  handleT4GAuth0Error,
  type T4GAuth0User,
  type T4GPlatform 
} from '../utils/auth0';

// Enhanced T4G User interface for dual platform support
export interface T4GUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  platform: T4GPlatform;
  auth0Sub: string;
  emailVerified: boolean;
  
  // Users Platform Data (t4g.fun)
  coinBalances?: {
    scanCoins: number;
    shareCoins: number;
    gameCoins: number;
  };
  userPreferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
  userStats?: {
    totalTags: number;
    challengesWon: number;
    level: number;
  };
  
  // Business Platform Data (t4g.space)
  businessProfile?: {
    businessName: string;
    businessType: string;
    subscription: 'free' | 'premium' | 'enterprise';
  };
  businessPermissions?: {
    canManageVenues: boolean;
    canCreateChallenges: boolean;
    canViewAnalytics: boolean;
    maxVenues: number;
  };
  ownedVenues?: string[];
}

export interface T4GAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: T4GUser | null;
  error: string | null;
  accessToken: string | null;
  platform: T4GPlatform;
  login: (options?: { screen_hint?: 'login' | 'signup' }) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  switchPlatform: (targetPlatform: T4GPlatform) => void;
}

/**
 * Enhanced T4G Auth Hook with Dual Domain Support
 * Handles authentication for both Users (t4g.fun) and Business (t4g.space) platforms
 */
export const useT4GAuth = (): T4GAuthState => {
  const router = useRouter();
  const platform = detectT4GPlatform();
  const auth0Config = getT4GAuth0Config();
  
  const {
    isAuthenticated: auth0IsAuthenticated,
    isLoading: auth0IsLoading,
    user: auth0User,
    error: auth0Error,
    loginWithRedirect,
    logout: auth0Logout,
    getAccessTokenSilently,
  } = useAuth0();
  
  const [user, setUser] = useState<T4GUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced Auth0 user mapping for dual platform support
  const mapAuth0UserToT4GUser = (auth0User: T4GAuth0User, platform: T4GPlatform): T4GUser => {
    const baseUser = {
      id: auth0User.sub?.replace('auth0|', '') || auth0User.sub,
      email: auth0User.email,
      name: auth0User.name || auth0User.nickname,
      avatar: auth0User.picture,
      auth0Sub: auth0User.sub,
      emailVerified: auth0User.email_verified || false,
      platform,
    };

    if (platform === 'users') {
      // Users Platform (t4g.fun) specific data
      return {
        ...baseUser,
        coinBalances: auth0User['https://t4g.fun/coin_balances'] || {
          scanCoins: 0,
          shareCoins: 0,
          gameCoins: 0,
        },
        userPreferences: auth0User['https://t4g.fun/preferences'] || {
          theme: 'light',
          notifications: true,
          language: 'en',
        },
        userStats: auth0User['https://t4g.fun/stats'] || {
          totalTags: 0,
          challengesWon: 0,
          level: 1,
        },
      };
    } else {
      // Business Platform (t4g.space) specific data
      return {
        ...baseUser,
        businessProfile: auth0User['https://t4g.space/business_profile'] || {
          businessName: 'New Business',
          businessType: 'restaurant',
          subscription: 'free',
        },
        businessPermissions: auth0User['https://t4g.space/permissions'] || {
          canManageVenues: true,
          canCreateChallenges: true,
          canViewAnalytics: true,
          maxVenues: 1,
        },
        ownedVenues: auth0User['https://t4g.space/owned_venues'] || [],
      };
    }
  };

  // Effect to handle Auth0 state changes with platform awareness
  useEffect(() => {
    const updateAuthState = async () => {
      try {
        setIsLoading(true);
        
        if (auth0Error) {
          const errorMessage = handleT4GAuth0Error(auth0Error, platform);
          setError(errorMessage);
          setUser(null);
          setAccessToken(null);
          return;
        }

        if (auth0IsAuthenticated && auth0User) {
          // Get access token with platform-specific audience
          try {
            const token = await getAccessTokenSilently({
              authorizationParams: {
                audience: auth0Config.audience,
                scope: auth0Config.scope,
              },
            });
            
            setAccessToken(token);
            
            // Map Auth0 user to T4G user with platform context
            const t4gUser = mapAuth0UserToT4GUser(auth0User as T4GAuth0User, platform);
            setUser(t4gUser);
            setError(null);
            
            // Store token with platform prefix for tRPC requests
            const tokenKey = `auth_token_${platform}`;
            localStorage.setItem(tokenKey, token);
            localStorage.setItem('auth_token', token); // For backward compatibility
            
            // Store platform info
            localStorage.setItem('t4g_platform', platform);
            
            // Invalidate router to refresh with new auth state
            router.invalidate();
            
            console.log(`✅ T4G ${platform} authentication successful:`, {
              userId: t4gUser.id,
              email: t4gUser.email,
              platform: t4gUser.platform,
            });
            
          } catch (tokenError) {
            console.error(`Failed to get ${platform} access token:`, tokenError);
            setError(`Failed to authenticate with ${platform} platform. Please try logging in again.`);
          }
        } else {
          setUser(null);
          setAccessToken(null);
          localStorage.removeItem(`auth_token_${platform}`);
          localStorage.removeItem('auth_token');
          localStorage.removeItem('t4g_platform');
        }
      } catch (error) {
        console.error(`T4G ${platform} auth state update error:`, error);
        setError(`${platform} authentication error occurred.`);
      } finally {
        setIsLoading(auth0IsLoading);
      }
    };

    updateAuthState();
  }, [auth0IsAuthenticated, auth0User, auth0Error, auth0IsLoading, getAccessTokenSilently, router, platform, auth0Config]);

  // Enhanced login function with platform awareness
  const login = async (options?: { screen_hint?: 'login' | 'signup' }) => {
    try {
      setError(null);
      
      console.log(`🔐 Initiating ${platform} platform login...`);
      
      await loginWithRedirect({
        authorizationParams: {
          screen_hint: options?.screen_hint || 'login',
          prompt: 'login',
          audience: auth0Config.audience,
          scope: auth0Config.scope,
        },
        appState: {
          returnTo: window.location.pathname,
          platform,
        },
      });
    } catch (error) {
      console.error(`${platform} login error:`, error);
      setError(`${platform} login failed. Please try again.`);
    }
  };

  // Enhanced logout function with platform cleanup
  const logout = async () => {
    try {
      setError(null);
      
      console.log(`🚪 Logging out from ${platform} platform...`);
      
      // Clean up platform-specific tokens
      localStorage.removeItem(`auth_token_${platform}`);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('t4g_platform');
      
      await auth0Logout({
        logoutParams: {
          returnTo: auth0Config.logoutUri,
        },
      });
      
      // Router will handle redirect after logout
      router.invalidate();
    } catch (error) {
      console.error(`${platform} logout error:`, error);
      setError(`${platform} logout failed. Please try again.`);
    }
  };

  // Enhanced token refresh with platform awareness
  const refreshToken = async () => {
    try {
      if (auth0IsAuthenticated) {
        console.log(`🔄 Refreshing ${platform} token...`);
        
        const token = await getAccessTokenSilently({
          cacheMode: 'off', // Force refresh
          authorizationParams: {
            audience: auth0Config.audience,
            scope: auth0Config.scope,
          },
        });
        
        setAccessToken(token);
        
        // Update stored tokens
        localStorage.setItem(`auth_token_${platform}`, token);
        localStorage.setItem('auth_token', token);
        
        console.log(`✅ ${platform} token refreshed successfully`);
      }
    } catch (error) {
      console.error(`${platform} token refresh error:`, error);
      setError(`Failed to refresh ${platform} authentication. Please login again.`);
      await logout();
    }
  };

  // Platform switching utility
  const switchPlatform = (targetPlatform: T4GPlatform) => {
    const targetUrl = targetPlatform === 'users' 
      ? 'https://app.t4g.fun' 
      : 'https://app.t4g.space';
    
    console.log(`🔄 Switching from ${platform} to ${targetPlatform} platform...`);
    
    // In development, show alert instead of redirect
    if (import.meta.env.MODE === 'development') {
      alert(`Platform switch: Would redirect to ${targetUrl} in production`);
      return;
    }
    
    // In production, redirect to the target platform
    window.location.href = targetUrl;
  };

  return {
    isAuthenticated: auth0IsAuthenticated,
    isLoading,
    user,
    error,
    accessToken,
    platform,
    login,
    logout,
    refreshToken,
    switchPlatform,
  };
};
