import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { T4GBusinessAuth0Provider } from './utils/auth0';
import { ProtectedLayout } from './components/layouts/AuthLayouts';
import { LoginPage } from './components/LoginPage';
import { CallbackPage } from './components/CallbackPage';
import { DashboardHome } from './components/DashboardHome';
import { GiftsChallenges } from './components/GiftsChallenges';
import { StatsMonitoring } from './components/StatsMonitoring';
import { InteractiveMap } from './components/InteractiveMap';
import { ProfileSection } from './components/ProfileSection';
import { TenantProfile } from './components/TenantProfile';

// Create React Query client for business dashboard
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

export function App() {
  return (
    <T4GBusinessAuth0Provider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/callback" element={<CallbackPage />} />
            
            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedLayout>
                <DashboardHome />
              </ProtectedLayout>
            } />
            
            <Route path="/gifts-challenges" element={
              <ProtectedLayout requiredPermissions={['write:challenges']}>
                <GiftsChallenges />
              </ProtectedLayout>
            } />
            
            <Route path="/stats" element={
              <ProtectedLayout requiredPermissions={['read:analytics']}>
                <StatsMonitoring />
              </ProtectedLayout>
            } />
            
            <Route path="/map" element={
              <ProtectedLayout>
                <InteractiveMap />
              </ProtectedLayout>
            } />
            
            <Route path="/profile" element={
              <ProtectedLayout>
                <ProfileSection />
              </ProtectedLayout>
            } />
            
            <Route path="/tenant/:tenantId" element={
              <ProtectedLayout requiredPermissions={['read:analytics', 'manage:venues']}>
                <TenantProfile tenantId="1" />
              </ProtectedLayout>
            } />
          </Routes>
        </Router>
        
        {/* Development Tools */}
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </T4GBusinessAuth0Provider>
  );
}

export default App;
