import { StrictMode } from 'react';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import GamesGrid from './components/GamesGrid';
import MapSection from './components/MapSection';
import LeaderboardSection from './components/LeaderboardSection';
import InfoSection from './components/InfoSection';

const client = createClient({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function HomePage() {
  return (
    <>
      <GamesGrid />
      <MapSection />
      <LeaderboardSection />
      <InfoSection />
    </>
  );
}

function GamesPage() {
  return <GamesGrid />;
}

function MapPage() {
  return <MapSection />;
}

function LeaderboardPage() {
  return <LeaderboardSection />;
}

function InfoPage() {
  return <InfoSection />;
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/about" element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
