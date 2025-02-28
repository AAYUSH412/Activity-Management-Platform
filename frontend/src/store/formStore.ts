import { create } from 'zustand';
import type { FormStore } from '@/types';

export const useFormStore = create<FormStore>((set) => ({
  activityData: null,
  locationData: null,
  setActivityData: (data) => set({ activityData: data }),
  setLocationData: (data) => set({ locationData: data }),
  resetForm: () => set({ activityData: null, locationData: null }),
}));
