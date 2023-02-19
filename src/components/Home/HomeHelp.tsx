import { useState, useEffect, ChangeEvent, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, doc, getDocs, deleteDoc, query, where, limit, startAt, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'
//style
import {
	MainDiv,
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
import { Car } from '../../infrastructure'
import { FaCarAlt } from 'react-icons/fa'

interface State {
	cars: Car[]
	searchValue: string
	isFetching: boolean
}

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
		: () => query(collection(db, 'cars'))

	try {
		const result = await getDocs(apiCall())
		return result
	} catch (err) {
		console.log(err)
	}
}
// reducer
const initialState: State = {
	cars: [],
	searchValue: '',
	isFetching: true,
}

const homeCarReducer = (state: State, action: any) => {
	switch (action.type) {
		case 'SEARCH_VALUE':
			return {
				...state,
			}

		default:
			return state
	}
}

export const Home = () => {
	const [cars, setCars] = useState<Car[]>()
	const [searchValue, setSearchValue] = useState<string | undefined>()
	const [isFetching, setIsFetching] = useState(true)

	// reducer

	const navigate = useNavigate()

	const handleCarSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const deleteCar = async (id: string) => {
		try {
			const userCar = doc(db, 'cars', id)
			await deleteDoc(userCar)
			const carsData = await getCars({ searchValue })
			setCars(carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })))
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		const fn = debounce(async () => {
			try {
				const carsData = await getCars({ searchValue })
				setCars(carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })))
				setIsFetching(false)
			} catch (e) {
				console.error(e)
				setIsFetching(false)
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
						<StyledInput name='serchCar' type='text' onChange={handleCarSearch} value={searchValue} />
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
