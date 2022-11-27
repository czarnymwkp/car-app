import { useForm } from 'react-hook-form'
import styled from 'styled-components'

type CarValue = {
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
	const { register, handleSubmit } = useForm<CarValue>()

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Add Cars Form</h1>

			<form
				style={{ backgroundColor: '#0b071d' }}
				onSubmit={handleSubmit(data => {
					console.log(data)
				})}>
				<StyledForm>
					<label htmlFor='companyName'>Company name:</label>
					<input
						{...(register('companyName'), { required: true, minLength: 3 })}
						id='companyName'
						style={{ width: '50vw', borderRadius: '10px' }}
						type='text'
					/>
					<label htmlFor='carModel'>Car model name:</label>
					<input {...register('carModel')} style={{ width: '50vw', borderRadius: '10px' }} type='text' />
					<label htmlFor='carColor'>Car color:</label>
					<input {...register('carColor')} style={{ width: '50vw', borderRadius: '10px' }} type='text' />
					<label htmlFor='carDoors'>Car dors:</label>
					<input
						{...register('carDoors')}
						style={{ width: '50vw', borderRadius: '10px' }}
						name='carDoors'
						type='text'
					/>
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
					{' '}
					Add picture
				</button>
			</div>
		</>
	)
}
