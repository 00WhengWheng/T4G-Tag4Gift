import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';

const venues = [
  { id: '1', name: 'Venue A', latitude: 40.7128, longitude: -74.006 },
  { id: '2', name: 'Venue B', latitude: 34.0522, longitude: -118.2437 },
  { id: '3', name: 'Venue C', latitude: 51.5074, longitude: -0.1278 },
];

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const venueFeatures = venues.map((venue) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([venue.longitude, venue.latitude])),
        name: venue.name,
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            scale: 0.05,
          }),
        })
      );
      return feature;
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({ features: venueFeatures }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-0.1278, 51.5074]), // Centered on London
        zoom: 2,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Interactive Map</h2>
      <div className="text-gray-600 mb-4">View and interact with venue and tag locations.</div>
      <div ref={mapRef} style={{ width: '100%', height: '500px', borderRadius: '8px', boxShadow: '0 2px 8px #ccc' }} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Venues</h3>
        <ul>
          {venues.map((venue) => (
            <li key={venue.id} className="mb-1">{venue.name} ({venue.latitude}, {venue.longitude})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
