import { createFileRoute, redirect } from '@tanstack/react-router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Route = createFileRoute('/map')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: MapComponent,
});

// Dummy data for venues
const venues = [
  { id: 1, name: 'The Grand Cafe', position: [51.505, -0.09] },
  { id: 2, name: 'Pizza Palace', position: [51.51, -0.1] },
  { id: 3, name: 'Burger Barn', position: [51.515, -0.095] },
];

function MapComponent() {
  return (
    <div className="h-screen w-full">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {venues.map(venue => (
          <Marker key={venue.id} position={venue.position}>
            <Popup>
              {venue.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
