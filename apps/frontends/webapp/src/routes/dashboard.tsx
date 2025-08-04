import { createFileRoute, redirect } from '@tanstack/react-router';
import { useT4GAuth } from '@/hooks/useT4GAuth';

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
  beforeLoad: ({ context, location }) => {
    // TanStack Router Context7 Best Practice: Route-level authentication guard
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function DashboardPage() {
  const { platform, user } = useT4GAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                {platform === 'users' ? '🎮' : '🏢'}
              </span>
              <h1 className="text-xl font-bold text-gray-900">
                {platform === 'users' ? 'T4G Users Dashboard' : 'T4G Business Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-700">
                  {user?.name || user?.email}
                </div>
                <div className="text-xs text-gray-500">
                  {platform === 'users' ? 'Player' : 'Business User'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name || user?.email}!
            </h2>
            <p className="text-blue-100 text-lg">
              {platform === 'users' 
                ? '🎮 Ready to play some games and earn rewards?' 
                : '🏢 Let\'s grow your business with T4G'}
            </p>
          </div>

          {/* Platform-specific Content */}
          {platform === 'users' ? <UsersDashboard /> : <BusinessDashboard />}
        </div>
      </main>
    </div>
  );
}

function UsersDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🎮 Quick Play</h3>
        <div className="space-y-3">
          <a
            href="/games"
            className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Browse Games
          </a>
          <a
            href="/challenges"
            className="block w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center font-medium"
          >
            Daily Challenges
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 Your Coins</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Scan Coins:</span>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between">
            <span>Share Coins:</span>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between">
            <span>Game Coins:</span>
            <span className="font-medium">0</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Activity</h3>
        <p className="text-gray-500 text-sm">No recent activity yet. Start playing!</p>
      </div>
    </div>
  );
}

function BusinessDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🏢 Venue Management</h3>
        <div className="space-y-3">
          <a
            href="/venues"
            className="block w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
          >
            Manage Venues
          </a>
          <a
            href="/games/create"
            className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Create Challenge
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Analytics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Venues:</span>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between">
            <span>Active Games:</span>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between">
            <span>Total Players:</span>
            <span className="font-medium">0</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💳 Revenue</h3>
        <p className="text-gray-500 text-sm">Set up your first venue to see stats.</p>
      </div>
    </div>
  );
}
