import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import Onboarding from './pages/Onboarding';
import Scan from './pages/Scan';
import VenueHome from './pages/VenueHome';
import Claim from './pages/Claim';
import Challenges from './pages/Challenges';
import Profile from './pages/Profile';
import MapModal from './pages/MapModal';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/venue/:id" element={<VenueHome />} />
          <Route path="/claim/:id" element={<Claim />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<MapModal />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}



