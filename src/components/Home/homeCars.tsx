import { useState, createContext, useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormContext } from '../Form/formSites'

import { addDoc, collection, doc, getDocs, setDoc, deleteDoc, deleteField, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { Prev } from 'react-bootstrap/esm/PageItem'

export const MainHeader = () => {
	interface CarsInterface {
		id: string
		companyName?: string
		carModel?: string
		carColor?: string
		carDoors?: number
		carImage?: string
	}
	const [cars, setCar] = useState<CarsInterface[]>()
	const [carsList, setCarsList] = useState<CarsInterface[]>()
	const [searchCar, setSearchCar] = useState('')
	const [editCar, setEditCar] = useState({})

	const carCollectionsRef = collection(db, 'cars')
	const navigate = useNavigate()

	const handleCarSearch = (event: any) => {
		setSearchCar(event.target.value)
	}

	const updateCar = async (id: string, doors?: number) => {
		//const newDoors = { doors: doors - 1 }
		//const userCar = doc(db, 'cars', id)
		//console.log(newDoors)
		//await updateDoc(userCar, newDoors) // update number of doors / not working...:()
	}

	const deleteCar = async (id: string) => {
		const userCar = doc(db, 'cars', id)
		await deleteDoc(userCar)
		const data = await getDocs(carCollectionsRef)
		setCar(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
	}

	//interface Car {
	//	name: string
	//	color: string
	//	doors: number
	//}

	//const addCar = () => {
	//	const collectionRef = collection(db, 'cars')
	//	addDoc(collectionRef, {
	//		Model: 'Ferrari',
	//	})
	//}

	//const editCar = () => {
	//	const documentRef = doc(db, 'cars', '0CGaeMIx5NimdseJf4Dh')
	//	setDoc(documentRef, {
	//		Model: 'Dupa',
	//	})
	//}

	//const deletCar = () => {
	//	const docRef = doc(db, 'cars', '1col06MG4VOwSGYSqlAI')
	//	updateDoc(docRef, {
	//		Model: deleteField(),
	//	})
	//}
	const carsA = cars?.filter(car => car.companyName == searchCar)
	// context

	const HomeCarContext = createContext(editCar)

	console.log(editCar)
	useEffect(() => {
		const getCars = async () => {
			const data = await getDocs(carCollectionsRef)
			setCar(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		getCars()
	}, [])
	return (
		<>
			{' '}
			<h3>Dashboard</h3>
			<label htmlFor='serchCar'>Search car from your list </label> <span></span>
			<input name='serchCar' type='text' onChange={handleCarSearch} />
			<div
				className='container'
				style={{
					backgroundColor: '#008F8C',
					marginTop: '120px',
					color: 'white',
					border: '1px white solid',
					borderRadius: '10px',
					minHeight: '100px',
				}}>
				<h4>Brand of my cars:</h4>
				{carsA?.map(cars => (
					<div
						style={{
							backgroundColor: '#008F8C',
							margin: '20px',
							color: 'white',
						}}>
						<div>
							<h5>Brand: {cars.carModel}</h5>
							<h5>Color: {cars.carColor}</h5>
						</div>
						<button
							onClick={() => {
								navigate(`/editcar/${cars.id}`)
								updateCar(cars.id, cars.carDoors)
							}}>
							{' '}
							Edit{' '}
						</button>{' '}
						<button
							onClick={() => {
								setEditCar(cars)
							}}>
							Edytuj
						</button>
						<button> Details </button> <button> Add my car picture </button>{' '}
					</div>
				))}
			</div>
			<div
				className='container'
				style={{
					backgroundColor: '#008F8C',
					marginTop: '120px',
					color: 'white',
					border: '1px white solid',
					borderRadius: '10px',
				}}>
				{' '}
				<h5>MY ALL CARS</h5>
				<div style={{}}>
					{cars?.map(car => (
						<div key={car.id}>
							{' '}
							<p>Car name: {car.carModel}</p>
							<button
								style={{ marginTop: '10px', marginBottom: '10px' }}
								onClick={() => navigate(`cardetails/${car.id}`)}>
								Details
							</button>
							<button
								style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}
								onClick={() => deleteCar(car.id)}>
								Delete from my cars list
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
