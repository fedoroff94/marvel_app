import { actionCreator } from '../utils/actionCreator'
import { IPlanet } from '../types/planets'

export const GET_ALL_PLANETS_REQUESTED = "GET_ALL_PLANETS_REQUESTED"
export const getAllPlanets = actionCreator(GET_ALL_PLANETS_REQUESTED);

export const GET_ALL_PLANETS_SUCCEEDED = "GET_ALL_PLANETS_SUCCEEDED"
export const getAllPlanetsSucceeded = actionCreator<Array<IPlanet>>(GET_ALL_PLANETS_SUCCEEDED);

export const GET_ALL_PLANETS_FAILED = "GET_ALL_PLANETS_FAILED"
export const getAllPlanetsFailed = actionCreator(GET_ALL_PLANETS_FAILED);





 

