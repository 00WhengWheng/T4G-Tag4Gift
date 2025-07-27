import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DashboardHome } from './components/DashboardHome';
import { GiftsChallenges } from './components/GiftsChallenges';
import { StatsMonitoring } from './components/StatsMonitoring';
import { InteractiveMap } from './components/InteractiveMap';
import { ProfileSection } from './components/ProfileSection';
import { TenantProfile } from './components/TenantProfile';

export function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <Link to="/" className="font-bold">Dashboard Home</Link>
        <Link to="/gifts-challenges">Gifts & Challenges</Link>
        <Link to="/stats">Stats Monitoring</Link>
        <Link to="/map">Interactive Map</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/tenant/1">Tenant Analytics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/gifts-challenges" element={<GiftsChallenges />} />
        <Route path="/stats" element={<StatsMonitoring />} />
        <Route path="/map" element={<InteractiveMap />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/tenant/:tenantId" element={<TenantProfile tenantId={"1"} />} />
      </Routes>
    </Router>
  );
}

export default App;
