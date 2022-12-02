import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormContext } from '../Form/formSites'

export const MainHeader = () => {
	const getcontext = useContext(FormContext)

	const navigate = useNavigate()
	let carname = 'audi'
	interface Car {
		name: string
		color: string
		doors: number
	}

	const [car, setCar] = useState<Car>({ name: 'Audi', color: 'Black', doors: 2 })
	return (
		<>
			<div
				className='container'
				style={{
					backgroundColor: '#008F8C',
					marginTop: '120px',
					minHeight: '20vh',
					color: 'white',
					border: '5px white solid',
					borderRadius: '20px',
				}}>
				{' '}
				<h1>CAR LIST</h1>
				{getcontext}
				<h2>Name: {car.name}</h2>
				<h2>Color: {car.color}</h2>
				<button
					className='btn btn-warning'
					style={{ marginTop: '140px', marginBottom: '20px' }}
					onClick={() => navigate(`cardetails/Audi`)}>
					SHOW DETAILS
				</button>
			</div>
		</>
	)
}
