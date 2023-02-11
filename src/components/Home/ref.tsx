import { useState, useEffect, useReducer, ChangeEventHandler, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, doc, getDocs, deleteDoc, query, where, limit, startAt, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'
//style
import { StyledDiv, StyledDivSearch, StyledDivContent, StyledButton } from './Home.styled'
import { DetailsProvider } from '../details/DetailsContext'
import { INITIAL_STATE, homerReducer } from './HomeReducer'
import { Car } from '../../infrastructure'

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
					limit(10)
				)
		: () => query(collection(db, 'cars'))

	try {
		const result = await getDocs(apiCall())
		return result
	} catch (err) {
		console.log(err)
	}
}

export const Home = () => {
	const [state, dispach] = useReducer(homerReducer, INITIAL_STATE)
	const [cars, setCars] = useState<Car[]>()
	const [searchValue, setSearchValue] = useState<string | undefined>()

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
			const carsData = await getCars({ searchValue })
			setCars(carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })))
		}, 1000)
		fn()
	}, [searchValue])

	return (
		<>
			<DetailsProvider>
				<StyledDiv>
					<h3>Dashboard</h3>

					<StyledDivSearch>
						<label htmlFor='serchCar'>Search car from your list </label> <span></span>
						<input name='serchCar' type='text' onChange={handleCarSearch} value={searchValue} />
					</StyledDivSearch>

					<StyledDivContent className='container'>
						<h2>MY ALL CARS</h2>
						{cars?.map(car => (
							<div key={car.id}>
								<h3>Car company: {car.companyName}</h3>
								<h4>Car name: {car.carModel}</h4>
								<h5>Car color: {car.carColor}</h5>
								<StyledButton onClick={() => navigate(`cardetails/${car.id}`)}>Details</StyledButton>
								<StyledButton onClick={() => navigate(`editcar/${car.id}`)}>Edit Car</StyledButton>
								<StyledButton onClick={() => deleteCar(car.id)}>Delete from my cars list</StyledButton>
							</div>
						))}
					</StyledDivContent>
					<StyledButton>Next page</StyledButton>
				</StyledDiv>
			</DetailsProvider>
		</>
	)
}
