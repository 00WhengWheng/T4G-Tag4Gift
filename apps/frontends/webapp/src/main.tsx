import { StrictMode } from 'react';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import MapPage from './pages/MapPage';
import LeaderboardPage from './pages/LeaderboardPage';
import InfoPage from './pages/InfoPage';
import AppLayout from './components/layout/AppLayout';

const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);