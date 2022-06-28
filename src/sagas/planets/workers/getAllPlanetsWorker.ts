import { api } from '../../../api';
import { IGetAllPlanetsResponse } from "../../../api/planets/getAll";
import { call, put } from "@redux-saga/core/effects"
import { getAllPlanetsSucceeded, getAllPlanetsFailed } from "../../../actions/planets"

export function* getAllPlanetsWorker() {
    try {
        const allData: IGetAllPlanetsResponse = yield call(api.planets.getAll);
        yield put(getAllPlanetsSucceeded(allData.results));
    } catch (error) {
        yield put(getAllPlanetsFailed())
    }
}