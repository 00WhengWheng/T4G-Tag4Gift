import { Link, Outlet } from '@tanstack/react-router';
import { Home, BarChart, Gift, Map, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@t4g/ui-web';
import { useAuth0 } from '@auth0/auth0-react';

export function DashboardLayout() {
  const { user, logout } = useAuth0();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8">T4G Business</div>
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700" activeProps={{ className: 'bg-gray-700' }}>
            <Home className="mr-2 h-5 w-5" />
            Dashboard
          </Link>
          <Link to="/map" className="flex items-center p-2 rounded hover:bg-gray-700" activeProps={{ className: 'bg-gray-700' }}>
            <Map className="mr-2 h-5 w-5" />
            Map View
          </Link>
          <Link to="/challenges" className="flex items-center p-2 rounded hover:bg-gray-700" activeProps={{ className: 'bg-gray-700' }}>
            <Gift className="mr-2 h-5 w-5" />
            Challenges & Gifts
          </Link>
          <Link to="/analytics" className="flex items-center p-2 rounded hover:bg-gray-700" activeProps={{ className: 'bg-gray-700' }}>
            <BarChart className="mr-2 h-5 w-5" />
            Analytics
          </Link>
          <Link to="/settings" className="flex items-center p-2 rounded hover:bg-gray-700" activeProps={{ className: 'bg-gray-700' }}>
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center p-2 border-t border-gray-700">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.picture} alt={user?.name} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-semibold">{user?.name}</p>
              <Link to="/profile" className="text-sm text-gray-400 hover:underline">View Profile</Link>
            </div>
          </div>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="w-full mt-2 p-2 bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
