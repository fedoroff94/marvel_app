import { takeLatest, all } from "@redux-saga/core/effects"
import { GET_ALL_PLANETS_REQUESTED, getAllPlanetsSucceeded, getAllPlanetsFailed } from "../../actions/planets"
import { getAllPlanetsWorker } from './workers/getAllPlanetsWorker'

export function* planetsSagaWatcher() {
    yield all([
        takeLatest(GET_ALL_PLANETS_REQUESTED, getAllPlanetsWorker)
    ])
}

