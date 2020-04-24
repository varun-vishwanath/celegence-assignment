import { all } from "redux-saga/effects";

import TestSaga from "./tickers/saga";

export default function* rootSaga(getState) {
    yield all([
        TestSaga()
    ]);
}