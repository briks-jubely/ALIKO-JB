import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useRef } from "react";
import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlikoGpsPopup({ onClose }) {
  const fleet = useAlikoJBStore((s) => s.fleet);

  const boxRef = useRef(null);

  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [full, setFull] = useState(false);

  const startDrag = (e) => {
    if (full) return;

    const rect = boxRef.current.getBoundingClientRect();

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setDragging(true);
  };

  const onMove = (e) => {
    if (!dragging || full) return;

    setPos({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={onMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      style={{
        position: "fixed",
        top: full ? 0 : pos.y,
        left: full ? 0 : pos.x,
        width: full ? "100vw" : "420px",
        height: full ? "100vh" : "320px",
        background: "#0f172a",
        border: full ? "none" : "1px solid #334155",
        borderRadius: full ? "0px" : "12px",
        overflow: "hidden",
        zIndex: 9999,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}
    >
      {/* HEADER (DRAG HANDLE) */}
      <div
        onMouseDown={startDrag}
        style={{
          height: "42px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
          background: "#111827",
          color: "white",
          cursor: full ? "default" : "grab",
          fontSize: "12px",
          userSelect: "none"
        }}
      >
        <span>🚛 LIVE GPS (FLEET VIEW)</span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => setFull(!full)}>
            {full ? "🗗" : "⛶"}
          </button>
          <button onClick={onClose}>✖</button>
        </div>
      </div>

      {/* MAP */}
      <div style={{ height: "calc(100% - 42px)", width: "100%" }}>
        <MapContainer
          center={[-6.7924, 39.2083]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {Object.entries(fleet || {}).map(([id, v]) => {
            if (!v?.lat || !v?.lng) return null;

            return (
              <Marker key={id} position={[v.lat, v.lng]}>
                <Popup>
                  <b>{id}</b><br />
                  Speed: {v.speed || 0}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
