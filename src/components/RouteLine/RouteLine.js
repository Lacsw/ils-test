import { useEffect } from 'react';
import { Polyline, useMap } from 'react-leaflet';

const RouteLine = ({ route }) => {
  const map = useMap();

  useEffect(() => {
    if (route.length !== 0) {
      map.fitBounds(route);
    }
  }, [map, route]);

  return <Polyline positions={route} weight={6} opacity={0.8} />;
};
export default RouteLine;
