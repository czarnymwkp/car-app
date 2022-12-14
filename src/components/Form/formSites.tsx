import { useEffect, useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { addDoc, collection, doc, getDocs, setDoc, deleteDoc, deleteField, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

import styled from 'styled-components'

interface CarValue {
	companyName: string
	carModel: string
	carColor: string
	carDoors: number
	fuelType: string
}

const StyledForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: white;
	padding: 20px 0;
	text-transform: uppercase;
	font-family: monospace;
	font-size: xx-large;
`
export const FormContext = createContext('Hello')
export const FormSite = () => {
	const {
		reset,
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CarValue>({
		defaultValues: {
			companyName: '',
			carModel: '',
			carColor: '',
			carDoors: 0,
			fuelType: 'Pb',
		},
	})
	const carColection = collection(db, 'cars')
	const [newCar, setNewCar] = useState<CarValue>()
	const onSubmit = handleSubmit(data => {
		addDoc(carColection, data)
		reset({ carColor: '', carModel: '', carDoors: 0, companyName: '', fuelType: 'On' })
	})

	const formnav = useNavigate()

	return (
		<>
			<div>
				<button onClick={() => formnav('/')} style={{ margin: '20px' }} className='btn btn-warning'>
					Home
				</button>
			</div>

			<form style={{ backgroundColor: '#015958', border: '2px white solid', borderRadius: '20px' }} onSubmit={onSubmit}>
				<StyledForm>
					<label htmlFor='companyName'>Company name:</label>
					<input
						{...register('companyName', {
							required: 'Write a name of company',
							minLength: {
								value: 3,
								message: 'Minimal letter is 3',
							},
						})}
						id='companyName'
						style={{ width: '20vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.companyName?.message}</p>
					<label htmlFor='carModel'>Car model name:</label>
					<input
						{...register('carModel', { required: 'Need to write car model name' })}
						style={{ width: '20vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.carModel?.message}</p>

					<label htmlFor='carColor'>Car color:</label>
					<input
						{...register('carColor', { required: 'Color required' })}
						style={{ width: '20vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.carColor?.message}</p>

					<label htmlFor='carDoors'>Car dors:</label>
					<input
						{...register('carDoors', { required: 'Ur car dont have doors??', maxLength: 5 })}
						style={{ width: '10vw', borderRadius: '10px' }}
						name='carDoors'
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.carDoors?.message}</p>

					<label htmlFor='fuelType'>Fuel type:</label>
					<select {...register('fuelType')} name='fuelType' id='fuel'>
						<option value=''>Select..:</option>
						<option value='ON'>On</option>
						<option value='Pb'>Pb</option>
						<option value='Pb + LPG'>PB+LPG</option>
					</select>

					<input
						style={{
							marginTop: '40px',
							width: '15vw',
							backgroundColor: '#daa700',
							borderRadius: '10px',
							border: '2px white solid',
							color: 'black',
						}}
						type='submit'
						value={'Accept'}
					/>
				</StyledForm>
			</form>
			<div>
				<button className='btn btn-warning' style={{ margin: '20px' }}>
					Add picture
				</button>
			</div>
		</>
	)
}
