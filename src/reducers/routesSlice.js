import { createSlice } from '@reduxjs/toolkit';

import { routes } from '../utils/constants';
import { convertToLatlng } from '../utils/helpers/convertToLatlng';

const initialState = { routes: [...routes], selectedRoute: null, marks: [] };

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload.route;
    },
    getFullRoute: (state, action) => {
      state.marks = convertToLatlng(action.payload);
    },
    getRouteError: (message) => {
      throw new Error(message);
    },
  },
});

export const { selectRoute, getFullRoute, getRouteError } = routesSlice.actions;
export default routesSlice.reducer;
