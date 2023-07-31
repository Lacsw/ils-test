import polyline from '@mapbox/polyline';

const routesApi = {
  async getRoute(marks) {
    const line = polyline.encode(marks);
    const res = await fetch(
      `http://router.project-osrm.org/route/v1/driving/polyline(${line})?geometries=geojson&overview=full&continue_straight=default`
    );

    return res.json();
  },
};

export default routesApi;
