import { take, takeEvery, takeLatest, takeLeading, select, call, put } from "@redux-saga/core/effects"
import { GET_ALL_PEOPLE_REQUESTED, getAllPeopleSucceeded, getAllPeopleFailed } from "../../actions/people"
import { api } from '../../api';
import { IGetAllPeopleResponse } from "../../api/people/getAll";

export function* workerSagaPeople() {
    try {
        const allData: IGetAllPeopleResponse = yield call(api.people.getAll);
        yield put(getAllPeopleSucceeded(allData.results));
    } catch (error) {
        yield put(getAllPeopleFailed())
    }
}

export function* watchSagaPeople() {
    yield takeEvery(GET_ALL_PEOPLE_REQUESTED, workerSagaPeople);
}