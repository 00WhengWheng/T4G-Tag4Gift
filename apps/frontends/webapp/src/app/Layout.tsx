import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white text-center text-sm tracking-wide mt-auto">
        &copy; {new Date().getFullYear()} T4G. All rights reserved.
      </footer>
    </div>
  );
}
