import { useState, useEffect, ChangeEvent, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, doc, getDocs, deleteDoc, query, where, limit, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'
//style
import {
	StyledDiv,
	StyledDivSearch,
	StyledDivContent,
	StyledButton,
	StyledInput,
	StyledButtonDetails,
	StyledButtonEdit,
} from './Home.styled'
import Loading from '../shared/Loading'
import { DetailsProvider } from '../details/DetailsContext'
import { Car, State, Search, Fetching, Cars, Action } from '../../infrastructure'
import { FaCarAlt } from 'react-icons/fa'

const debounce = (func: () => void, wait: number) => {
	let timeout: any

	return function executedFunction(...args: []) {
		const later = () => {
			clearTimeout(timeout)
			func(...args)
		}

		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}
}

const getCars = async ({ searchValue }: { searchValue?: string }) => {
	const apiCall = searchValue
		? () =>
				query(
					collection(db, 'cars'),
					orderBy('companyName', 'asc'),
					where('companyName', '>=', searchValue),
					where('companyName', '<', searchValue + 'z'),
					limit(2)
				)
		: () => query(collection(db, 'cars'), orderBy('companyName', 'asc'))

	try {
		const result = await getDocs(apiCall())
		return result
	} catch (err) {
		console.log(err)
	}
}
// reducer
const initialState: State = {
	carss: [],
	searchValue: '',
	isFetching: true,
}

const homeCarReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'IS_FETCHING':
			return {
				...state,
				isFetching: action.payload,
			}
		case 'SEARCH_VALUE':
			return { ...state, searchValue: action.payload }

		case 'SHOW_CARS':
			return {
				...state,
				carss: action.payload,
			}
		default:
			return state
	}
}

export const Home = () => {
	const [cars, setCars] = useState<Car[]>()
	// reducer

	const [{ carss, searchValue, isFetching }, dispatch] = useReducer(homeCarReducer, initialState)

	//dispatch
	const isFetchingNow = () => {
		dispatch({ type: 'IS_FETCHING', payload: false })
	}

	const isSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'SEARCH_VALUE', payload: event.target.value })
	}
	const isCars = (seCars: any) => {
		dispatch({ type: 'SHOW_CARS', payload: seCars })
	}

	const navigate = useNavigate()

	const deleteCar = async (id: string) => {
		try {
			const userCar = doc(db, 'cars', id)
			await deleteDoc(userCar)
			const carsData = await getCars({ searchValue })
			setCars(carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })))
			//const seCars = carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id }))
			//return seCars
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		const fn = debounce(async () => {
			try {
				const carsData = await getCars({ searchValue })
				setCars(carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })))
				isFetchingNow()
			} catch (e) {
				console.error(e)
			}
		}, 2000)
		fn()
	}, [searchValue])

	return (
		<div className='divMain'>
			<DetailsProvider>
				<StyledDiv>
					<h1>Dashboard</h1>

					<StyledDivSearch>
						<label htmlFor='serchCar'>Search car from your list </label> <span></span>
						<StyledInput name='serchCar' type='text' onChange={isSearchValue} value={searchValue} />
					</StyledDivSearch>

					<StyledDiv className='container'>
						{isFetching ? <Loading></Loading> : <h2>MY ALL CARS</h2>}
						{cars?.map(car => (
							<StyledDivContent key={car.id}>
								<h3>
									<FaCarAlt /> <span></span> Car company: {car.companyName}
								</h3>
								<h4>Car name: {car.carModel}</h4>
								<h5>Car color: {car.carColor}</h5>
								<StyledButtonDetails onClick={() => navigate(`cardetails/${car.id}`)}>Details</StyledButtonDetails>
								<StyledButtonEdit onClick={() => navigate(`editcar/${car.id}`)}>Edit Car</StyledButtonEdit>
								<StyledButton onClick={() => deleteCar(car.id)}>Delete</StyledButton>
							</StyledDivContent>
						))}
					</StyledDiv>
					<StyledButton>Next page</StyledButton>
				</StyledDiv>
			</DetailsProvider>
		</div>
	)
}
