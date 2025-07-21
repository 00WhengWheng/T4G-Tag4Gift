import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { GiftIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid';

// fix default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

type Venue = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  gifts: number;
  challenges: number;
};

const mockVenues: Venue[] = [
  { id: 'starbucks-1', name: 'Starbucks Central', lat: 40.7128, lng: -74.006, gifts: 3, challenges: 5 },
  { id: 'subway-2', name: 'Subway Times Sq', lat: 40.758, lng: -73.9855, gifts: 1, challenges: 2 },
];

export default function Map() {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {mockVenues.map((v) => (
        <Marker key={v.id} position={[v.lat, v.lng]}>
          <Popup>
            <div className="space-y-1">
              <h3 className="font-bold">{v.name}</h3>
              <p className="text-sm flex items-center gap-1">
                <GiftIcon className="w-4 h-4 text-rose-500" /> {v.gifts} gifts
              </p>
              <p className="text-sm flex items-center gap-1">
                <PuzzlePieceIcon className="w-4 h-4 text-blue-500" /> {v.challenges} challenges
              </p>
              <a href={`/venue/${v.id}`} className="btn btn-xs btn-primary">
                Go
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}