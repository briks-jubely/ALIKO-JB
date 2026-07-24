import { useEffect } from "react";

import AlikoAppShell from "./layout/AlikoAppShell";
import { AlikoSocket } from "./realtime/alikoSocket";

import {
  observeAuth,
  getUserProfile
} from "./auth/authService";

import {
  useAuthStore
} from "./store/authStore";

export default function App() {

  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {

    AlikoSocket.connect();
    AlikoSocket.start();

    const unsubscribe = observeAuth(async (user) => {

      if (user) {

        const profile = await getUserProfile(user.uid);

        setAuth(user, profile);

      } else {

        clearAuth();

      }

    });

    return () => unsubscribe();

  }, []);

  return <AlikoAppShell />;

}
