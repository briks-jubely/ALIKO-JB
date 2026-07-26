import "../../assets/css/components/gps-popup.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useEffect } from "react";
import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlikoGpsPopup({ onClose }) {
  const fleet = useAlikoJBStore((s) => s.fleet);

  const boxRef = useRef(null);

  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [full, setFull] = useState(false);

  const [size, setSize] = useState({ width: 420, height: 320 });
  const [resizing, setResizing] = useState(false);
  const resizeStart = useRef({ x: 0, y: 0, width: 420, height: 320 });

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

  const startResize = (e) => {
    e.stopPropagation();

    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    };

    setResizing(true);
  };

useEffect(() => {
  const move = (e) => {
    if (!resizing || full) return;

    const w = Math.max(320, resizeStart.current.width + (e.clientX - resizeStart.current.x));
    const h = Math.max(220, resizeStart.current.height + (e.clientY - resizeStart.current.y));

    setSize({ width: w, height: h });
  };

  const stop = () => setResizing(false);

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", stop);

  return () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", stop);
  };
}, [resizing, full]);

  return (
    <div
      ref={boxRef}
      onMouseMove={onMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      className={full ? "gps-popup fullscreen" : "gps-popup"}
      style={{top: full ? 0 : pos.y,left: full ? 0 : pos.x,width: full ? "100vw" : size.width,height: full ? "100vh" : size.height}}
    >
      {/* HEADER (DRAG HANDLE) */}
      <div
        onMouseDown={startDrag}
        className="gps-header"
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
        <span className="gps-title">🚛 LIVE GPS (FLEET VIEW)</span>

        <div className="gps-actions">
          <button className="gps-btn" onClick={() => setFull(!full)}>
            {full ? "🗗" : "⛶"}
          </button>
          <button className="gps-btn close" onClick={onClose}>✖</button>
        </div>
      </div>

      {/* MAP */}
      <div className="gps-map">
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
      <div className="gps-resize" onMouseDown={startResize} />
    </div>
  );
}
