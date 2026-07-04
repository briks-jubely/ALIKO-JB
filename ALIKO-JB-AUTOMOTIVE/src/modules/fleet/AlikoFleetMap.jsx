import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlikoFleetMap() {
  const fleet = useAlikoJBStore((s) => s.fleet);

  const center = [51.5074, -0.1278];

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={center} zoom={13} style={{ height: "100%" }}>
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(fleet).map(([id, v]) => (
          <Marker
            key={id}
            position={[v.lat, v.lng]}
          >
            <Popup>
              <b>{id}</b><br/>
              Speed: {v.speed} km/h<br/>
              Battery: {v.battery}%<br/>
              Temp: {v.engineTemp}°C
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}
