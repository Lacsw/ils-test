import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './Map.scss';
import markerIcon from '../../utils/markerIcon';
import RouteLine from '../RouteLine/RouteLine';

export default function Map() {
  const selectedRoute = useSelector((state) => state.routes.selectedRoute);
  const marks = useSelector((state) => state.routes.marks);

  return (
    <div className='map'>
      <h2>Маршрут на карте</h2>
      <div>
        <MapContainer
          className='map__container'
          center={[59.9313, 30.3941]}
          zoom={11}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {selectedRoute &&
            selectedRoute.positions.map((position, id) => (
              <Marker
                key={id}
                position={position}
                icon={markerIcon}
                eventHandlers={{
                  mouseover: (event) => event.target.openPopup(),
                  mouseout: (event) => event.target.closePopup(),
                }}>
                <Popup>
                  <h3>{`Точка ${id + 1}`}</h3>
                </Popup>
              </Marker>
            ))}

          <RouteLine route={marks} />
        </MapContainer>
      </div>
    </div>
  );
}
