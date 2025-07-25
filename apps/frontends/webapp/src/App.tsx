import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'urql';
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Sonner } from "./components/ui/sonner";
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { MapPage } from './pages/MapPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { InfoPage } from './pages/InfoPage';
import { NotFound } from "./pages/NotFound";
import { client } from './lib/urql-client';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider value={client}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <AppLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/info" element={<InfoPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </Router>
        </TooltipProvider>
      </Provider>
    </QueryClientProvider>
  );
}