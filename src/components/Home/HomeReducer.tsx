interface Car {
	id: string
	companyName?: string
	carModel?: string
	carColor?: string
	carDoors?: number
	carImage?: string
	fuelType?: string
}

interface State {
	cars: Car[]
	searchCar: string
}

export const INITIAL_STATE: State = { cars: [], searchCar: '' }

export const homerReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'MY_CARS':
			return {}
		case 'SEARCH_CAR':
			return {}
	}
}
