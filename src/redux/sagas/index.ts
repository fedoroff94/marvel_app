import { take, takeEvery, takeLatest, takeLeading, select, call, put } from "@redux-saga/core/effects"
import { GET_ALL_PLANETS_REQUESTED, getAllPlanetsSucceeded, getAllPlanetsFailed } from "../../actions/planets"
import { AxiosResponse } from "axios";
import { api } from '../../api';
import { IPlanet } from "../../types/planets";
import { IGetAllPlanetsResponse } from "../../api/planets/getAll";

export function* workerSaga() {
    try {
        const allData: IGetAllPlanetsResponse = yield call(api.planets.getAll);
        yield put(getAllPlanetsSucceeded(allData.results));
    } catch (error) {
        yield put(getAllPlanetsFailed())
    }
}

export function* watchClickSaga() {
    yield takeEvery(GET_ALL_PLANETS_REQUESTED, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
