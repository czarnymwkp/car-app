import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//components

import { MainHeader } from './components/mainHeader'
import { MainNav } from './components/mainNav'
import { MainCars } from './components/mainCarList'

import { FormSite } from './sites/formSites'

//style

import StyledMainHeader from './style/mainStyle'
const carsList = [{ brand: 'Audi' }, { brand: 'Bmw' }, { brand: 'Mercedes' }]

function App() {
	const [cars, setCars] = useState(carsList)
	const [addCar, setAddCar] = useState('')

	const handleAddCar = (event: { target: { value: React.SetStateAction<string> } }) => {
		setAddCar(event.target.value)
	}

	return (
		<>
			<div className='App'>
				<StyledMainHeader>
					<input onChange={handleAddCar} type='text' value={addCar} />
					<MainHeader></MainHeader>
				</StyledMainHeader>
				<MainCars></MainCars>
				<h1>
					{cars.map(car => (
						<p>{car.brand}</p>
					))}
				</h1>
			</div>
			<FormSite></FormSite>
		</>
	)
}

export default App
