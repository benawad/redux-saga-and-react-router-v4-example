import { call, takeLatest } from 'redux-saga/effects';

import { REQUEST_LOGIN } from './actions';
import { login } from './api';

function* loginSaga({ payload: { fields, callback } }) {
  const { isError } = yield call(login, fields);
  if (!isError) {
    callback();
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_LOGIN, loginSaga);
}
