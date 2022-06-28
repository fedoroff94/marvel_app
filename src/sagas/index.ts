import { all, fork } from "@redux-saga/core/effects"
import { watchSagaPlanets }  from './planets/index';
import { watchSagaPeople } from './people/index';

export default function* rootSaga() { 
    yield all([
        fork(watchSagaPlanets),
        fork(watchSagaPeople),
    ]);
}
