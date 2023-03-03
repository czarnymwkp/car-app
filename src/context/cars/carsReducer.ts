import { Action, State} from './interfaces';

export const carsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_FETCHING':
            return {
                ...state,
                isFetching: action.payload,
            }
        case 'SET_SEARCH_VALUE':
            return { ...state, searchValue: action.payload }

        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload,
            }
        default:
            return state
    }
}