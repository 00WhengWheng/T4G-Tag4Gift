import { create } from 'zustand';

interface State {
  scans: string[];
  addScan: (id: string) => void;
}
const useScanStore = create<State>((set) => ({
  scans: [],
  addScan: (id) => set((s) => ({ scans: [...s.scans, id] })),
}));
export default useScanStore;