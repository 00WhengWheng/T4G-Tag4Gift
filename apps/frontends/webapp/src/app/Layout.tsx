import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative bg-gray-900 text-white">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Tag4Gift
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Your gateway to fun, discovery, and rewards. Scan QR codes, share gifts, play games, and explore venues in an interactive community experience.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Games</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Leaderboard</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Map</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Profile</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} T4G. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                    <span className="sr-only">Discord</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.942 8.478c0-1.334-.608-2.512-1.518-3.29C14.05 4.007 12.236 3.5 10 3.5s-4.05.507-5.424 1.688c-.91.778-1.518 1.956-1.518 3.29 0 .736.164 1.425.448 2.055.31.69.767 1.31 1.352 1.834.585.523 1.31.938 2.142 1.22.832.282 1.748.413 2.7.413h.6c.952 0 1.868-.131 2.7-.413.832-.282 1.557-.697 2.142-1.22.585-.524 1.042-1.144 1.352-1.834.284-.63.448-1.319.448-2.055z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}