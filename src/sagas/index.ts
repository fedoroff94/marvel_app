import { all, fork } from "@redux-saga/core/effects"
import { planetsSagaWatcher }  from './planets/index';
import { watchSagaPeople } from './people/index';

export default function* rootSaga() { 
    yield all([
        fork(planetsSagaWatcher),
        fork(watchSagaPeople),
    ]); 
}
