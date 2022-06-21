import { takeEvery, takeLatest, takeLeading, select, call } from "@redux-saga/core/effects"
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants"
import { getDataFromServer } from '../../api/index'
import { AxiosResponse } from "axios";
// import ResponseGenerator from '../../api/index';
 
export function* workerSaga() {
    const data:AxiosResponse<any> = yield call(getDataFromServer);
    console.log(data);
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}