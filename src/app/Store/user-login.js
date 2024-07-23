
import create from 'zustand';
import { persist } from 'zustand/middleware';


export const useStore = create(persist(
  (set) => ({
    username: null,
    login: (username) => set({ username }),
    logout: () => set({ username: null }),
  }),
  {
    name: 'username', 
    getStorage: () => localStorage, 
  }
));