import { call, put, takeEvery } from 'redux-saga/effects';
import routesApi from '../api/routesApi';
import {
  getFullRoute,
  selectRoute,
  getRouteError,
} from '../reducers/routesSlice';

function* fetchRoute(action) {
  try {
    const route = yield call(
      routesApi.getRoute,
      action.payload.route.positions
    );
    yield put(getFullRoute(route));
  } catch (e) {
    yield put({ type: getRouteError.type, message: e.message });
  }
}

function* routesSaga() {
  yield takeEvery(selectRoute.type, fetchRoute);
}

export default routesSaga;
