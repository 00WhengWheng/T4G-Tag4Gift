import { Link } from 'react-router-dom';
import { QrCodeIcon } from '@heroicons/react/24/outline';

export default function Onboarding() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-amber-400 to-rose-500 text-white">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Tag4Gift</h1>
          <p className="py-6">Scan • Play • Share • Win Real Gifts</p>
          <Link to="/scan" className="btn btn-primary">
            <QrCodeIcon className="w-5 h-5 mr-2" />
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}