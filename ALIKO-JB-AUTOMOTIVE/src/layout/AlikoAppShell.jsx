import { useState } from "react";
import AlikoSidebar from "./AlikoSidebar";
import AlikoTopbar from "./AlikoTopbar";
import AlikoModuleLoader from "../components/layout/AlikoModuleLoader";
import AlikoGpsPopup from "../components/map/AlikoGpsPopup";

export default function AlikoAppShell() {

  const [gpsOpen, setGpsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns: sidebarOpen
          ? "220px minmax(0,1fr)"
          : "70px minmax(0,1fr)",
        height:"100vh",
        transition:"0.3s"
      }}
    >

      <AlikoSidebar collapsed={!sidebarOpen}/>

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          minWidth:0
        }}
      >

        <button
          onClick={()=>setSidebarOpen(!sidebarOpen)}
          style={{
            width:42,
            height:42,
            margin:10,
            background:"#2563eb",
            color:"#fff",
            border:"none",
            borderRadius:8,
            cursor:"pointer"
          }}
        >
          ☰
        </button>

        <AlikoTopbar />

        <div style={{padding:10}}>
          <button
            onClick={()=>setGpsOpen(true)}
            style={{
              padding:"10px 14px",
              background:"#2563eb",
              color:"#fff",
              border:"none",
              borderRadius:8
            }}
          >
            📍 Open Live GPS
          </button>
        </div>

        <main
          style={{
            flex:1,
            overflow:"auto",
            padding:20
          }}
        >
          <AlikoModuleLoader/>
        </main>

      </div>


      {gpsOpen &&
        <AlikoGpsPopup
          onClose={()=>setGpsOpen(false)}
        />
      }

    </div>
  );
}
