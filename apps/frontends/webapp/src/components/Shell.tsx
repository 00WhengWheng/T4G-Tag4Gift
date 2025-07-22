import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import Background from './Background';

export default function Shell() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background */}
      <Background variant="gradient" />
      
      {/* Top Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-grow px-4 py-6 md:py-8 container mx-auto animate-fade-in">
        <Outlet />
      </main>
      
      {/* Bottom Navigation (Mobile Only) */}
      <BottomNav />
      
      {/* Footer Space (to prevent content from being hidden behind bottom nav on mobile) */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}

