import { useEffect } from "react";
import { AlikoSocket } from "./realtime/alikoSocket";
import { useAlikoJBStore } from "./store/alikoJBStore";
import AlikoAppShell from "./layout/AlikoAppShell";
import AlikoFleetMap from "./map/AlikoFleetMap.jsx";

export default function App() {
  const setFleetVehicle = useAlikoJBStore((s) => s.setFleetVehicle);

  useEffect(() => {
    const socket = new AlikoSocket((data) => {

      if (data.type === "FLEET_GPS") {
        setFleetVehicle(data.id, data.data);
      }

    });

    socket.connect();
  }, []);

  return <AlikoAppShell />;
}
