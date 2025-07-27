import { Link } from 'react-router-dom';

export function DashboardHome() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/gifts-challenges" className="block p-6 bg-blue-100 rounded-lg shadow hover:bg-blue-200">
          <div className="text-xl font-semibold mb-2">Gifts & Challenges</div>
          <div className="text-gray-600">Manage and view all gifts and challenges.</div>
        </Link>
        <Link to="/stats" className="block p-6 bg-green-100 rounded-lg shadow hover:bg-green-200">
          <div className="text-xl font-semibold mb-2">Stats Monitoring</div>
          <div className="text-gray-600">Monitor user and tenant statistics.</div>
        </Link>
        <Link to="/map" className="block p-6 bg-yellow-100 rounded-lg shadow hover:bg-yellow-200">
          <div className="text-xl font-semibold mb-2">Interactive Map</div>
          <div className="text-gray-600">View and interact with venue and tag locations.</div>
        </Link>
        <Link to="/profile" className="block p-6 bg-purple-100 rounded-lg shadow hover:bg-purple-200">
          <div className="text-xl font-semibold mb-2">Profile</div>
          <div className="text-gray-600">View and edit your profile information.</div>
        </Link>
      </div>
    </div>
  );
}
