import { useState } from "react";
import AlikoSidebar from "./AlikoSidebar";
import AlikoTopbar from "./AlikoTopbar";
import AlikoModuleLoader from "../components/layout/AlikoModuleLoader";
import AlikoGpsPopup from "../components/map/AlikoGpsPopup";

export default function AlikoAppShell() {

  const [gpsOpen, setGpsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.35)",
            zIndex: 999
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : -240,
          width: 220,
          height: "100vh",
          background: "#111827",
          transition: "left .3s ease",
          zIndex: 1000,
          boxShadow: "0 0 20px rgba(0,0,0,.4)"
        }}
      >
        <AlikoSidebar collapsed={false}/>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh"
        }}
      >

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "fixed",
            top: 12,
            left: 12,
            width: 42,
            height: 42,
            border: "none",
            borderRadius: 8,
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            zIndex: 1001
          }}
        >
          ☰
        </button>

        <AlikoTopbar />

        <div style={{ padding: 10 }}>
          <button
            onClick={() => setGpsOpen(true)}
            style={{
              padding: "10px 14px",
              border: "none",
              borderRadius: 8,
              background: "#2563eb",
              color: "#fff"
            }}
          >
            📍 Open Live GPS
          </button>
        </div>

        <main
          style={{
            flex: 1,
            overflow: "auto",
            padding: 20
          }}
        >
          <AlikoModuleLoader />
        </main>

      </div>

      {gpsOpen && (
        <AlikoGpsPopup
          onClose={() => setGpsOpen(false)}
        />
      )}
    </>
  );
}
