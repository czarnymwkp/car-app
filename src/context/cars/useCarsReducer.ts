import {useReducer} from "react";
import {carsReducer} from "./carsReducer";
import {State} from "./interfaces";

const initialState: State = {
    cars: [],
    searchValue: '',
    isFetching: true,
}

export const useCarsReducer = () => {
    const [{ searchValue, isFetching, cars }, dispatch] = useReducer(carsReducer, initialState)


    return {
        searchValue,
        isFetching,
        dispatch,
        cars
    }
}