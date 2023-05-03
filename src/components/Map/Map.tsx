// leaflet components adn css
import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
// context
import { useIpContext } from '../../context/IpContextProvider.tsx';

export default function Map() {

  const { dataIp } = useIpContext();

// mapcontainer center and marker position ask for this type in their latlng value
  type LatLngExpression = {
    lat:number,
    lng:number
  }
  const location:LatLngExpression = {lat:dataIp.lat, lng:dataIp.lon}

  return (
    <MapContainer    
      key={dataIp.ip}  
      center={location}
      zoom={18}
      style={{ width: "100%", height: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      <Marker position={location}>
        <Popup>
        Searched location
        </Popup>
      </Marker>
  </MapContainer>
  )
}
