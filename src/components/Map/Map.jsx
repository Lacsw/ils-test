import React from 'react';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './Map.scss';
import 'leaflet/dist/leaflet.css';

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

export default function Map() {
  const position = [51.505, -0.09];

  return (
    <div className='map'>
      <h2>Маршрут на карте</h2>
      <div>
        <MapContainer
          className='map__container'
          center={[59.9313, 30.3941]}
          zoom={13}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} icon={icon} />
        </MapContainer>
      </div>
    </div>
  );
}
