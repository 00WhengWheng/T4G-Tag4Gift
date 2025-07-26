import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
// ...existing code...

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-700">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            {/* Animated logo at the top */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-float shadow-glow-primary">
                <span className="text-white text-4xl font-extrabold animate-pulse">🎁</span>
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

// ...existing code...