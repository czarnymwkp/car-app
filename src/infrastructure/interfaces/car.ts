export type Car = {
	id: string
	companyName: string
	carModel: string
	carColor: string
	carDoors: number
	carImage?: string
	fuelType: string
}
export interface State {
	carss: Car[]
	searchValue: string
	isFetching: boolean
}

export interface Search {
	type: 'SEARCH_VALUE'
	payload: string
}
export interface Fetching {
	type: 'IS_FETCHING'
	payload: boolean
}
export interface Cars {
	type: 'SHOW_CARS'
	payload: Car[]
}

export type Action = Fetching | Search | Cars
