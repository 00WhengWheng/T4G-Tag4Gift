import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Map from '../components/Map';

export default function MapModal() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-40 bg-black/50 flex">
      <div className="relative w-full h-full">
        <Map />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 btn btn-circle btn-ghost bg-white/20 backdrop-blur"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}