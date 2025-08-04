import React from "react";
import { Link } from "@tanstack/react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Enhanced Navbar */}
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-1">
            <Link to="/" className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              T4G
            </Link>
          </div>
          
          {/* Center navigation buttons */}
          <nav className="flex-1 flex justify-center">
            <div className="flex gap-6 items-center">
              <Link 
                to="/scan" 
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Scan QR Code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h4v4H4V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h4v4H4v-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4h4v4h-4V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h4v4h-4v-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4h-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8h-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12h-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 16h-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 20v-2" />
                </svg>
              </Link>
              
              <Link 
                to="/share" 
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Share"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </Link>
              
              <Link 
                to="/games" 
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Game"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </nav>
          
          {/* Profile icon on the right */}
          <div className="flex-1 flex justify-end">
            <Link 
              to="/profile" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80')] bg-cover bg-center"></div>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 px-6 py-8">{children}</main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t border-border text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} T4G. All rights reserved.
      </footer>
    </div>
  );
};
