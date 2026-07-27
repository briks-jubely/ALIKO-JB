import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlikoFleetMap() {
  const fleet = useAlikoJBStore((s) => s.fleet);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[-6.7924, 39.2083]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {Object.entries(fleet || {}).map(([id, v]) => {
          if (!v?.lat || !v?.lng) return null;

          return (
            <Marker key={id} position={[v.lat, v.lng]}>
              <Popup>
                <b>{id}</b>
                <br />
                Speed: {v.speed || 0}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
