export const convertToLatlng = (route) => {
  return route.routes[0].geometry.coordinates.map((mark) => [mark[1], mark[0]]);
};
