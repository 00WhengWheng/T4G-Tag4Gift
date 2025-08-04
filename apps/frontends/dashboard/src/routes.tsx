import { DashboardHome } from './components/DashboardHome';
import { GiftsChallenges } from './components/GiftsChallenges';
import { StatsMonitoring } from './components/StatsMonitoring';
import { InteractiveMap } from './components/InteractiveMap';
import { ProfileSection } from './components/ProfileSection';
import { TenantProfile } from './components/TenantProfile';

export const routes: RouteObject[] = [
  { path: '/', element: <DashboardHome /> },
  { path: '/gifts-challenges', element: <GiftsChallenges /> },
  { path: '/stats', element: <StatsMonitoring /> },
  { path: '/map', element: <InteractiveMap /> },
  { path: '/profile', element: <ProfileSection /> },
  { path: '/tenant/:tenantId', element: <TenantProfile tenantId={"1"} /> },
];
