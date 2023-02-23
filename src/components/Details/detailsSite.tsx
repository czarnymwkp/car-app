import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Image from '../../assets/images/cars-brand.jpg'
import { Car } from '../../infrastructure'
import Modal from '../shared/Modal/Modal'

import { DivDetails, ButtonDetails, DivBlock } from './Div.styled'
import { StyledButton } from '../EditCar/Edit-styled'

export const DetailSite = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [car, setCar] = useState<Car>()
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const getCar = async () => {
			try {
				const car = await getDoc(doc(db, 'cars', id!))
				if (car.exists()) {
					setCar(car.data() as Car)
				}
			} catch (e) {
				console.log(e)
			}
		}
		getCar()
	}, [])

	return (
		<>
			<DivDetails>
				<img src={Image} alt='cars brands' />
				<h1>Car details</h1>
				{showModal ? (
					<Modal showModal={setShowModal} />
				) : (
					<>
						<h1></h1>
					</>
				)}
				<div>
					<h3>Company name : {car?.companyName}</h3>
					<h3>Car model name: {car?.carModel}</h3>
					<h3>Car color: {car?.carColor}</h3>
					<h3>Doors : {car?.carDoors}</h3>
					<h3>Fuel type : {car?.fuelType}</h3>
				</div>
				<StyledButton
					onClick={() => {
						setShowModal(!showModal)
					}}>
					EDIT
				</StyledButton>
				<DivBlock>
					<ButtonDetails
						onClick={() =>
							navigate(`/`, {
								state: { id },
							})
						}>
						HOME
					</ButtonDetails>
				</DivBlock>
			</DivDetails>
		</>
	)
}
