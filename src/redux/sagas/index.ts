import { takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects"
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants"
import { getDataFromServer } from '../../api/index'
 
export function* workerSaga() {
    const data = yield getDataFromServer();
    console.log(data);
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}