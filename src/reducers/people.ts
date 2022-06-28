import {
    GET_ALL_PEOPLE_REQUESTED,
    GET_ALL_PEOPLE_SUCCEEDED,
    GET_ALL_PEOPLE_FAILED,
  } from "../actions/people";
  import { IAction } from "../utils/actionCreator";
  import { IPerson } from "../types/person";
  
  const InitialState = {
    loading: false,
    people: [],
    error: false,
  };
  
  interface IState {
    loading: boolean;
    people: Array<IPerson>;
    error: boolean;
  }
  
  const planets = (state: IState = InitialState, action: IAction<any>) => {
    switch (action.type) {
      case GET_ALL_PEOPLE_REQUESTED:
        return { ...state, loading: true, error: false };
      case GET_ALL_PEOPLE_SUCCEEDED:
        return { ...state, loading: false, people: action.payload, error: false };
      case GET_ALL_PEOPLE_FAILED:
        return { ...state, loading: false,  error: true};
      default:
        return state;
    }
  };
  
  export default planets;