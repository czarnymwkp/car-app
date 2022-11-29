import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MainHeader = () => {
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
			<div className='container' style={{ backgroundColor: 'lightgreen', marginTop: '120px', minHeight: '20vh' }}>
				{' '}
				<h1>CAR LIST</h1>
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
