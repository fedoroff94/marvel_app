import { takeEvery, takeLatest, takeLeading, select, call } from "@redux-saga/core/effects"
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants"
import { AxiosResponse } from "axios";
import { api } from '../../api';
import { IPlanet } from "../../types/planets";
import { IGetAllPlanetsResponse } from "../../api/planets/getAll";

export function* workerSaga() {
    const data: IPlanet = yield call(api.planets.getById, { id: '1' });
    console.log(data);

    const allData: IGetAllPlanetsResponse = yield call(api.planets.getAll);
    console.log(allData)
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
