import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
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

export const FormSite = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CarValue>({
		defaultValues: {
			companyName: '',
			carModel: '',
			carColor: '',
		},
	})
	const [newCar, setNewCar] = useState<CarValue>()
	const onSubmit = handleSubmit(data => {
		setNewCar(prevValue => (prevValue = data))
	})
	useEffect(() => {
		console.log(newCar)
	}, [onSubmit])
	return (
		<>
			<p>{newCar?.companyName}</p>
			<form style={{ backgroundColor: '#0b071d' }} onSubmit={onSubmit}>
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
						style={{ width: '50vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.companyName?.message}</p>
					<label htmlFor='carModel'>Car model name:</label>
					<input
						{...register('carModel', { required: 'Need to write car model name' })}
						style={{ width: '50vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.carModel?.message}</p>

					<label htmlFor='carColor'>Car color:</label>
					<input
						{...register('carColor', { required: 'Color required' })}
						style={{ width: '50vw', borderRadius: '10px' }}
						type='text'
					/>
					<p style={{ color: 'red' }}>{errors.carColor?.message}</p>

					<label htmlFor='carDoors'>Car dors:</label>
					<input
						{...register('carDoors', { required: 'Ur car dont have doors??', maxLength: 5 })}
						style={{ width: '50vw', borderRadius: '10px' }}
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
							backgroundColor: '#da20c1',
							borderRadius: '20px',
							color: 'white',
						}}
						type='submit'
						value={'Accept'}
					/>
				</StyledForm>
				<h2 style={{ textAlign: 'center' }}>.........</h2>
			</form>
			<div>
				<button className='btn btn-primary' style={{ marginLeft: '100px' }}>
					Add picture
				</button>
			</div>
		</>
	)
}
