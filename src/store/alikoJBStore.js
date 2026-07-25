import { create } from "zustand";

export const useAlikoJBStore = create((set, get) => ({
  fleet: {},
  alerts: [],

  setFleetVehicle: (id, data) =>
    set((state) => {
      const current = state.fleet[id];

      // 🚨 prevent useless re-render if same data
      if (
        current &&
        current.lat === data.lat &&
        current.lng === data.lng &&
        current.speed === data.speed
      ) {
        return state;
      }

      return {
        fleet: {
          ...state.fleet,
          [id]: { ...data },
        },
      };
    }),

  addAlert: (alert) =>
    set((state) => ({
      alerts: [...state.alerts, alert],
    })),

  getFleetStats: () => {
    const fleet = get().fleet;
    const list = Object.values(fleet);

    return {
      total: list.length,
      moving: list.filter(v => v?.speed > 0).length,
      overspeed: list.filter(v => v?.speed > 100).length,
    };
  },
}));
