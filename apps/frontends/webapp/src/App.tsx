import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import Share from './pages/SharePage';
import Challenges from './pages/Challenges';
import Games from './pages/GamesPage';


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/share" element={<Share />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Layout>
  );
}
