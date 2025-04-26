
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FirmData } from '@/data/types';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons in React + Leaflet
const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface FirmMapProps {
  firms: FirmData[];
}

const FirmMap = ({ firms }: FirmMapProps) => {
  // Find center point for map (average of all firm coordinates)
  const validFirms = firms.filter(firm => 
    firm.latitude !== undefined && 
    firm.longitude !== undefined
  );
  
  const centerLat = validFirms.reduce((sum, firm) => sum + (firm.latitude || 0), 0) / validFirms.length;
  const centerLng = validFirms.reduce((sum, firm) => sum + (firm.longitude || 0), 0) / validFirms.length;
  
  // Default center if no firms have coordinates
  const defaultCenter = [3.1390, 101.6869]; // Kuala Lumpur
  const mapCenter: [number, number] = validFirms.length ? [centerLat, centerLng] : defaultCenter;

  return (
    <MapContainer 
      center={mapCenter}
      zoom={11} 
      style={{ height: "60vh", width: "100%", borderRadius: "0.5rem" }}
      className="shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {validFirms.map((firm) => (
        <Marker 
          key={firm.id} 
          position={[firm.latitude || 0, firm.longitude || 0]} 
          icon={markerIcon}
        >
          <Popup>
            <div className="p-1">
              <h3 className="font-semibold text-lg mb-1">{firm.name}</h3>
              <p className="text-sm mb-1">{firm.email}</p>
              <Link 
                to={`/firms/${firm.id}`} 
                className="text-shopify-purple hover:underline text-sm block mt-2"
              >
                View Details
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FirmMap;
