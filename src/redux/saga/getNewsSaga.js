import { ACTIONS } from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";

function* getNewsWorker() {
  try {
    const result = yield call(() =>
      fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2021-12-02&to=2020-10-02&sortBy=popularity&pageSize=10&apiKey=382208ff57424279b7521afe6b127036"
      )
    );

    const request = yield result.json();

    yield put({ type: ACTIONS.GET_NEWS_REQUEST_SUCCESS, request });
  } catch (e) {}
}

export function* getNewsWatcher() {
  yield takeEvery(ACTIONS.GET_NEWS_REQUEST, getNewsWorker);
}
