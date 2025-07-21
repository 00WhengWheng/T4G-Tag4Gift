import { create } from 'zustand';
interface MapStore {
  center: [number, number];
  setCenter: (lat: number, lng: number) => void;
}
export const useMapStore = create<MapStore>((set) => ({
  center: [40.7128, -74.006],
  setCenter: (lat, lng) => set({ center: [lat, lng] }),
}));