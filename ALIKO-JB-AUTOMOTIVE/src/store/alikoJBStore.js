import { create } from "zustand";

export const useAlikoJBStore = create((set) => ({
  activeModule: "home",
  setActiveModule: (m) => set({ activeModule: m }),

  fleet: {},

  setFleetVehicle: (id, data) =>
    set((state) => ({
      fleet: {
        ...state.fleet,
        [id]: {
          ...(state.fleet[id] || {}),
          ...data,
        },
      },
    })),

  telemetry: {},

  alerts: [],

  setTelemetry: (data) => set({ telemetry: data }),
  setAlerts: (alerts) => set({ alerts }),
}));
