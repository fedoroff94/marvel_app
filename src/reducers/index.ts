import { combineReducers } from "redux"
import planets from './planets'
import people from './people'

const reducer = combineReducers({
    planets,
    people
});

export default reducer;