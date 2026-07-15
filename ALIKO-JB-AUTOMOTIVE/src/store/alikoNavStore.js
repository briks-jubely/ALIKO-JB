import { create } from "zustand";

export const useAlikoNavStore = create((set) => ({
  active: "HOME",
  setActive: (page) => set({ active: page }),
}));
