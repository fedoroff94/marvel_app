import {
  GET_ALL_PLANETS_REQUESTED,
  GET_ALL_PLANETS_SUCCEEDED,
  GET_ALL_PLANETS_FAILED,
} from "../../actions/planets";
import { IAction } from "../../utils/actionCreator";
import { IPlanet } from "../../types/planets";

const InitialState = {
  loading: false,
  planets: [],
  error: false,
};

interface IState {
  loading: boolean;
  planets: Array<IPlanet>;
  error: boolean;
}

const planets = (state: IState = InitialState, action: IAction<any>) => {
  switch (action.type) {
    case GET_ALL_PLANETS_REQUESTED:
      return { ...state, loading: true, error: false };
    case GET_ALL_PLANETS_SUCCEEDED:
      return { ...state, loading: false, planets: action.payload, error: false };
    case GET_ALL_PLANETS_FAILED:
      return { ...state, loading: false,  error: true};
    default:
      return state;
  }
};

export default planets;
