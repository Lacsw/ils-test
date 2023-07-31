import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import routesReducer from '../reducers/routesSlice';
import routesSaga from '../sagas/routesSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(routesSaga);
