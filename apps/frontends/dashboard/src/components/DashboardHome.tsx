import { Link } from 'react-router';
import { useT4GBusinessAuth } from '../utils/auth0';

export function DashboardHome() {
  const { 
    user, 
    businessName, 
    role, 
    ownedVenues, 
    subscription,
    permissions 
  } = useT4GBusinessAuth();

  const hasPermission = (permission: string) => permissions.includes(permission);

  return (
    <div className="space-y-8">
      {/* Business Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name || user?.email}!
        </h1>
        <p className="text-green-100 text-lg mb-4">
          🏢 {businessName || 'Your Business'} • {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Business User'}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            📍 {ownedVenues?.length || 0} Venues
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            📊 {subscription?.plan || 'Free'} Plan
          </span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Venues</h3>
            <span className="text-2xl">🏢</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{ownedVenues?.length || 0}</div>
          <p className="text-sm text-gray-600">Active locations</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Active Challenges</h3>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">0</div>
          <p className="text-sm text-gray-600">Running now</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Players</h3>
            <span className="text-2xl">👥</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">0</div>
          <p className="text-sm text-gray-600">Engaged users</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">$0</div>
          <p className="text-sm text-gray-600">This month</p>
        </div>
      </div>

      {/* Dashboard Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Venue Management */}
        <Link 
          to="/venues" 
          className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl group-hover:scale-110 transition-transform">🏢</span>
            <div className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
              {ownedVenues?.length || 0} venues
            </div>
          </div>
          <div className="text-xl font-semibold mb-2 text-gray-900">Venue Management</div>
          <div className="text-gray-600">Manage your venues, QR codes, and location settings.</div>
        </Link>

        {/* Gifts & Challenges */}
        {hasPermission('write:challenges') ? (
          <Link 
            to="/gifts-challenges" 
            className="block p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform">🎁</span>
              <div className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-900">Gifts & Challenges</div>
            <div className="text-gray-600">Create and manage challenges, tournaments, and rewards.</div>
          </Link>
        ) : (
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl opacity-60">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🔒</span>
              <div className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                No Access
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-700">Gifts & Challenges</div>
            <div className="text-gray-500">Requires challenge creation permissions.</div>
          </div>
        )}

        {/* Analytics & Stats */}
        {hasPermission('read:analytics') ? (
          <Link 
            to="/stats" 
            className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform">📊</span>
              <div className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                Live
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-900">Stats & Analytics</div>
            <div className="text-gray-600">Monitor user engagement, revenue, and performance metrics.</div>
          </Link>
        ) : (
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl opacity-60">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🔒</span>
              <div className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                No Access
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-700">Stats & Analytics</div>
            <div className="text-gray-500">Requires analytics permissions.</div>
          </div>
        )}

        {/* Interactive Map */}
        <Link 
          to="/map" 
          className="block p-6 bg-gradient-to-br from-yellow-50 to-orange-100 border border-yellow-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl group-hover:scale-110 transition-transform">🗺️</span>
            <div className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
              Map
            </div>
          </div>
          <div className="text-xl font-semibold mb-2 text-gray-900">Interactive Map</div>
          <div className="text-gray-600">View venue locations, user activity, and geographic insights.</div>
        </Link>

        {/* Profile Management */}
        <Link 
          to="/profile" 
          className="block p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl group-hover:scale-110 transition-transform">👤</span>
            <div className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full">
              Profile
            </div>
          </div>
          <div className="text-xl font-semibold mb-2 text-gray-900">Business Profile</div>
          <div className="text-gray-600">Manage your business profile, settings, and preferences.</div>
        </Link>

        {/* Tenant Analytics */}
        {role === 'owner' && (
          <Link 
            to="/tenant/1" 
            className="block p-6 bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform">🏬</span>
              <div className="text-xs bg-rose-200 text-rose-800 px-2 py-1 rounded-full">
                Owner
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-900">Tenant Analytics</div>
            <div className="text-gray-600">Advanced analytics and tenant-specific insights.</div>
          </Link>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            + Add New Venue
          </button>
          {hasPermission('write:challenges') && (
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              + Create Challenge
            </button>
          )}
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            📊 View Report
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}
