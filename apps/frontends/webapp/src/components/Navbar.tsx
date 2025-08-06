import React from 'react';
import { User, Settings, LogOut, Menu, QrCode, Share2, Gamepad2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate({ to: '/profile' });
    setIsProfileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-900 border-b border-purple-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T4G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white text-xl font-bold">Tag4Gift</h1>
                <p className="text-purple-300 text-xs">Play & Win Real Gifts</p>
              </div>
            </div>
          </div>

          {/* Center - Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Tag Button */}
            <button
              onClick={() => navigate({ to: '/scan' })}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-110 group"
              title="Scan QR/NFC Tag"
            >
              <QrCode className="w-6 h-6 group-hover:text-yellow-300 transition-colors" />
            </button>

            {/* Share Button */}
            <button
              onClick={() => navigate({ to: '/share' })}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-110 group"
              title="Share on Social Media"
            >
              <Share2 className="w-6 h-6 group-hover:text-green-300 transition-colors" />
            </button>

            {/* Game Button */}
            <button
              onClick={() => navigate({ to: '/' })}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-110 group"
              title="Play Games"
            >
              <Gamepad2 className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
            </button>
          </div>

          {/* Right side - Profile */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-white">
                        {user.name || user.email?.split('@')[0] || 'User'}
                      </p>
                      <p className="text-xs text-purple-300">
                        Player
                      </p>
                    </div>
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsProfileMenuOpen(false)}
                    />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-20">
                      <div className="py-1">
                        {/* Profile Info */}
                        <div className="px-4 py-3 border-b border-gray-700">
                          <p className="text-sm font-medium text-white">
                            {user.name || 'Anonymous User'}
                          </p>
                          <p className="text-xs text-gray-400">
                            {user.email}
                          </p>
                        </div>

                        {/* Menu Items */}
                        <button 
                          onClick={handleProfileClick}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        >
                          <User className="w-4 h-4 mr-3" />
                          My Profile
                        </button>
                        
                        <button className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </button>
                        
                        <div className="border-t border-gray-700 my-1" />
                        
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Sign In Button for non-authenticated users */
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
