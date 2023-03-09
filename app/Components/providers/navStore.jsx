import { create } from "zustand";

const useStore = create((set) => ({
  search: false,
  toggleSearch: () => set((state) => ({ search: !state.search })),
  splash: true,
  toggleSplash: () => set((state) => ({ splash: !state.splash })),
  dark: true,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}));

export default useStore