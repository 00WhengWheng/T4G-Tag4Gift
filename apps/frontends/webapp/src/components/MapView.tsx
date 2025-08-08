import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Tenant {
  id: string;
  name: string;
  address?: string;
  city?: string;
  country?: string;
  logo?: string;
  venueType?: string;
  latitude?: number;
  longitude?: number;
}

interface Gift {
  id: string;
  name: string;
  status: string;
  quantity: number;
}

interface Challenge {
  id: string;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
}

interface MapViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const fetchTenantData = async (): Promise<Tenant[]> => {
  // Replace with actual API call to business backend
  const res = await fetch('/api/business/tenants');
  return res.json();
};

const fetchGifts = async (tenantId: string): Promise<Gift[]> => {
  // Replace with actual API call to business backend
  const res = await fetch(`/api/business/gifts?tenantId=${tenantId}`);
  return res.json();
};

const fetchChallenges = async (tenantId: string): Promise<Challenge[]> => {
  // Replace with actual API call to business backend
  const res = await fetch(`/api/business/challenges?tenantId=${tenantId}`);
  return res.json();
};

const MapView: React.FC<MapViewProps> = ({ isOpen, onClose }) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetchTenantData()
        .then(setTenants)
        .finally(() => setLoading(false));
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedTenant) {
      setLoading(true);
      Promise.all([
        fetchGifts(selectedTenant.id),
        fetchChallenges(selectedTenant.id),
      ])
        .then(([gifts, challenges]) => {
          setGifts(gifts);
          setChallenges(challenges);
        })
        .finally(() => setLoading(false));
    }
  }, [selectedTenant]);

  useEffect(() => {
    if (!isOpen) return;
    // Initialize Leaflet map
    const map = L.map('venue-map', {
      center: [45.4642, 9.19], // Default center (Milan)
      zoom: 13,
      scrollWheelZoom: false,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    tenants.forEach(tenant => {
      if (tenant.latitude && tenant.longitude) {
        const marker = L.marker([tenant.latitude, tenant.longitude]).addTo(map);
        marker.bindPopup(
          `<b>${tenant.name}</b><br/>${tenant.address ?? ''}<br/><button id='select-tenant-${tenant.id}'>View Details</button>`
        );
        marker.on('click', () => setSelectedTenant(tenant));
      }
    });
    return () => {
      map.remove();
    };
  }, [isOpen, tenants]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-gray-900">
        <div className="flex flex-col h-[600px]">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Venue Map</h2>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
          <div className="flex-1 relative">
            <div id="venue-map" className="absolute inset-0 h-full w-full rounded-b-2xl overflow-hidden" />
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                <Loader2 className="animate-spin text-white w-8 h-8" />
              </div>
            )}
          </div>
          {selectedTenant && (
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{selectedTenant.name}</h3>
              <div className="text-gray-300 mb-2">{selectedTenant.address}, {selectedTenant.city}, {selectedTenant.country}</div>
              <div className="flex gap-4 mb-2">
                <img src={selectedTenant.logo} alt="Logo" className="h-12 w-12 rounded-full bg-gray-700" />
                <span className="text-sm bg-gray-700 px-2 py-1 rounded">{selectedTenant.venueType}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold text-white">Gifts:</span>
                {gifts.length === 0 ? (
                  <span className="ml-2 text-gray-400">No gifts available</span>
                ) : (
                  <ul className="ml-2">
                    {gifts.map(gift => (
                      <li key={gift.id} className="text-sm text-gray-200">
                        {gift.name} - <span className={gift.status === 'AVAILABLE' ? 'text-green-400' : 'text-red-400'}>{gift.status}</span> ({gift.quantity} left)
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <span className="font-bold text-white">Challenges:</span>
                {challenges.length === 0 ? (
                  <span className="ml-2 text-gray-400">No challenges</span>
                ) : (
                  <ul className="ml-2">
                    {challenges.map(challenge => (
                      <li key={challenge.id} className="text-sm text-gray-200">
                        {challenge.title} - <span className={challenge.status === 'ACTIVE' ? 'text-green-400' : 'text-yellow-400'}>{challenge.status}</span> ({challenge.startDate} - {challenge.endDate})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapView;
