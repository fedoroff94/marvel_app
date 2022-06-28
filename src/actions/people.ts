import { actionCreator } from '../utils/actionCreator'
import { IPerson } from '../types/person'

export const GET_ALL_PEOPLE_REQUESTED = "GET_ALL_PEOPLE_REQUESTED"
export const getAllPeople = actionCreator(GET_ALL_PEOPLE_REQUESTED);

export const GET_ALL_PEOPLE_SUCCEEDED = "GET_ALL_PEOPLE_SUCCEEDED"
export const getAllPeopleSucceeded = actionCreator<Array<IPerson>>(GET_ALL_PEOPLE_SUCCEEDED);

export const GET_ALL_PEOPLE_FAILED = "GET_ALL_PEOPLE_FAILED"
export const getAllPeopleFailed = actionCreator(GET_ALL_PEOPLE_FAILED);