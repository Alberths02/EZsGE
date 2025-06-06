import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
  inventory: [],
  reports: [],
  setInventory: (data) => set({ inventory: data }),
  setReports: (data) => set({ reports: data }),
}));