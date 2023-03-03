import { useEffect, ChangeEvent } from 'react'
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
import Loading from '../shared/Loading/Loading'
import { DetailsProvider } from '../Details/DetailsContext'
import { Car } from '../../infrastructure'
import { FaCarAlt } from 'react-icons/fa'
import { useCarsReducer } from '../../context/cars'
import { debounce } from '../../helpers/debounce'

const getCars = async ({ searchValue }: { searchValue?: string }) => {
	const apiCall = searchValue
		? () =>
				query(
					collection(db, 'cars'),
					orderBy('companyName', 'asc'),
					where('companyName', '>=', searchValue),
					where('companyName', '<', searchValue + 'z')
				)
		: () => query(collection(db, 'cars'), orderBy('companyName', 'asc'), limit(10))

	try {
		const result = await getDocs(apiCall())
		return result
	} catch (err) {
		console.log(err)
	}
}

export const Home = () => {
	const { dispatch, searchValue, isFetching, cars } = useCarsReducer()
	const navigate = useNavigate()

	const setIsFetching = (isFetching: boolean) => {
		dispatch({ type: 'SET_FETCHING', payload: isFetching })
	}

	const isSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'SET_SEARCH_VALUE', payload: event.target.value })
	}

	const deleteCar = async (id: string) => {
		try {
			const userCar = doc(db, 'cars', id)
			await deleteDoc(userCar)
			const carsData = await getCars({ searchValue })
			dispatch({
				type: 'SET_CARS',
				payload: carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })) as Car[],
			})
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		setIsFetching(true)
		const fn = debounce(async () => {
			try {
				const carsData = await getCars({ searchValue })

				dispatch({
					type: 'SET_CARS',
					payload: carsData?.docs.map(doc => ({ ...(doc.data() as Car), id: doc.id })) as Car[],
				})
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
						<StyledInput name='serchCar' type='text' onChange={isSearchValue} value={searchValue} />
					</StyledDivSearch>

					<StyledDiv className='container'>
						{isFetching ? <Loading></Loading> : cars.length ? <h2>MY ALL CARS</h2> : <h2>No results found </h2>}
						{!isFetching &&
							cars?.map(car => (
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
