import { io } from "socket.io-client";
import { useAlikoJBStore } from "../store/alikoJBStore";

const socket = io("https://aliko-jb-git-282712708896.us-central1.run.app", {
  transports: ["websocket"],
  autoConnect: false,
});

let started = false;

export const AlikoSocket = {
  connect: () => {
    if (!socket.connected) socket.connect();
  },

  start: () => {
    if (started) return;
    started = true;

    socket.on("vehicle:update", (msg) => {
      const { id, data } = msg;
      if (!id || !data) return;

      useAlikoJBStore.getState().setFleetVehicle(id, data);

      if (data.speed > 100) {
        useAlikoJBStore.getState().addAlert({
          type: "OVERSPEED",
          message: `${id} speeding`,
          time: Date.now(),
        });
      }
    });
  },
};

export default socket;
