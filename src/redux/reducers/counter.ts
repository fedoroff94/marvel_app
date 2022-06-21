import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

interface IAction {
    type: string;
};

const counter = ( state = { count: 0 }, action: IAction) => {
    switch (action.type) {
        case INCREASE_COUNT: return {...state, count: state.count + 1 };
        case DECREASE_COUNT: return {...state, count: state.count - 1 }
        default: return state;
    }
} 

export default counter;