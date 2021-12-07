import { ACTIONS } from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";

function* getNewsWorker() {
  try {
    const result = yield call(() =>
      fetch(
        'https://api.spaceflightnewsapi.net/v3/articles?_limit=100'
      )
    );
      
    const request = yield result.json();
    yield put({ type: ACTIONS.GET_NEWS_REQUEST_SUCCESS, request });
  } catch (e) {
    console.log("err")
  }
}

export function* getNewsWatcher() {
  yield takeEvery(ACTIONS.GET_NEWS_REQUEST, getNewsWorker);
}
