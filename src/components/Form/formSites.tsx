import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {  useForm } from 'react-hook-form'
import { addDoc, collection, doc,setDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { StyledForms, StyledButton, StyledInput } from '../Form/Form-styled'

import { Car } from '../../infrastructure'
import ModalForm from './ModalForm'

const defaultValues = {
	companyName: '',
	carModel: '',
	carColor: '',
	carDoors: 0,
	fuelType: 'Pb',
}

export const FormSite = () => {
	const [showModal, setShowModal] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const { id } = useParams()

	const isEdition = location.pathname.includes('/editcar')
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Car>({ defaultValues })

	const carColection = collection(db, 'cars')
	const carRef = doc(carColection, String(id))
	const onSubmit = handleSubmit(data => {
		const apiCall = !isEdition
			? () => {
					addDoc(carColection, data)
					reset({ carColor: '', carModel: '', carDoors: 0, companyName: '', fuelType: 'On' })
			  }
			: () => {
					setDoc(carRef, data)
			  }
		try {
			apiCall()
		} catch (e) {
			reset({ carColor: '', carModel: '', carDoors: 0, companyName: '', fuelType: 'On' })
		}
	})

	useEffect(() => {
		if (isEdition) {
			const getCar = async () => {
				try {
					const document = await getDoc(doc(db, 'cars', id!))
					reset(document.data())
				} catch (e) {
					console.log(e)
				}
			}
			getCar()
		}
	}, [isEdition])

	return (
		<>
			{isEdition && showModal ? <ModalForm setShowModal={setShowModal} /> : null}
			<div>
				<StyledButton onClick={() => navigate('/')}>Home</StyledButton>
			</div>

			<form onSubmit={onSubmit}>
				<StyledForms>
					<h2>ADD CAR</h2>
					<label style={{ width: '200px' }} htmlFor='companyName'>
						Company name:
					</label>
					<StyledInput
						{...register('companyName', {
							required: 'Write a name of company',
							minLength: {
								value: 3,
								message: 'Minimal letter is 3',
							},
						})}
						id='companyName'
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.companyName?.message}</p>
					<label htmlFor='carModel' style={{ width: '200px' }}>
						Car model name:
					</label>
					<StyledInput {...register('carModel', { required: 'Need to write car model name' })} type='text' />
					<p style={{ color: 'red' }}>{errors.carModel?.message}</p>

					<label htmlFor='carColor' style={{ width: '200px' }}>
						Car color:
					</label>
					<StyledInput {...register('carColor', { required: 'Color required' })} type='text' />
					<p style={{ color: 'red' }}>{errors.carColor?.message}</p>

					<label htmlFor='carDoors' style={{ width: '200px' }}>
						Car dors:
					</label>
					<StyledInput
						{...register('carDoors', { required: 'Ur car dont have doors??', maxLength: 5 })}
						name='carDoors'
						type='text'
					/>
					<p>{errors.carDoors?.message}</p>

					<label htmlFor='fuelType'>Fuel type:</label>
					<select {...register('fuelType')} name='fuelType' id='fuel'>
						<option value='ON'>On</option>
						<option value='Pb'>Pb</option>
						<option value='Pb + LPG'>PB+LPG</option>
					</select>
					<br />
					<StyledInput type='submit' value={'Accept'} onClick={() => setShowModal(true)} />
				</StyledForms>
			</form>
		</>
	)
}