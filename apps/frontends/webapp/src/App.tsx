import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/HomePage';
import Scan from './pages/Scan';
import Share from './pages/SharePage'; // Assuming Share is a page for sharing photos/video with Venues Instagram/Facebook social pages)
import VenueHome from './pages/VenueHome';
import Claim from './pages/Claim';
import Challenges from './pages/Challenges';
import Profile from './pages/Profile';
import MapModal from './pages/MapModal';
import Games from './pages/GamesPage';
import Leaderboard from './pages/LeaderboardPage';
import Info from './pages/InfoPage';
import Onboarding from './pages/Onboarding';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/share" element={<Share />} />
        <Route path="/map" element={<MapModal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/venue/:id" element={<VenueHome />} />
        <Route path="/claim/:id" element={<Claim />} />
        <Route path="/info" element={<Info />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Layout>
  );
}