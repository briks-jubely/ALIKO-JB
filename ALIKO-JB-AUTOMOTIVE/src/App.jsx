import { useEffect } from "react";
import { AlikoSocket } from "./realtime/alikoSocket";
import AlikoAppShell from "./layout/AlikoAppShell";

export default function App() {
  useEffect(() => {
    AlikoSocket.connect();
    AlikoSocket.start();
  }, []);

  return <AlikoAppShell />;
}
