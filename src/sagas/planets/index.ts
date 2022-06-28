import { take, takeEvery, takeLatest, takeLeading, select, call, put } from "@redux-saga/core/effects"
import { GET_ALL_PLANETS_REQUESTED, getAllPlanetsSucceeded, getAllPlanetsFailed } from "../../actions/planets"
import { api } from '../../api';
import { IGetAllPlanetsResponse } from "../../api/planets/getAll";

export function* workerSagaPlanets() {
    try {
        const allData: IGetAllPlanetsResponse = yield call(api.planets.getAll);
        yield put(getAllPlanetsSucceeded(allData.results));
    } catch (error) {
        yield put(getAllPlanetsFailed())
    }
}

export function* watchSagaPlanets() {
    yield takeEvery(GET_ALL_PLANETS_REQUESTED, workerSagaPlanets);
}

