import { put, takeLatest, all } from "redux-saga/effects";
import { userActions, Action } from "../actions/action";

function* fetchUserInfo(action: Action) {
  const data = yield fetch(
    `https://api.github.com/users/${action.payload}`
  ).then(response => response.json());
  yield put({ type: userActions.USER_FETCHED, payload: data });
}

function* actionWatcher() {
  yield takeLatest("FETCH_USER", fetchUserInfo);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
