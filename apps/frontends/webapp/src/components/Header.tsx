import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-purple-700 dark:text-purple-300">Tag4Gift</span>
        </Link>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/scan" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Scan</Link>
          <Link to="/games" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Games</Link>
          <Link to="/leaderboard" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Leaderboard</Link>
          <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Profile</Link>
        </nav>
      </div>
    </header>
  );
}
