import {Car} from "../../infrastructure";

export interface State {
    cars: Car[]
    searchValue: string
    isFetching: boolean
}

export interface SetSearch {
    type: 'SET_SEARCH_VALUE'
    payload: string
}

export interface SetFetching {
    type: 'SET_FETCHING'
    payload: boolean
}

export interface SetCars {
    type: 'SET_CARS'
    payload: Car[]
}

export type Action = SetFetching | SetSearch | SetCars