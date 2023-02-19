import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Image from '../../media/cars-brand.jpg'
import { Car } from '../../infrastructure'
import Modal from '../shared/Modal'

//styled
import { DivDetails, ButtonDetails, DivBlock } from './Div.styled'
import { StyledButton } from '../editCar/Edit-styled'

export const DetailSite = () => {
	const { id } = useParams()
	console.log(id)
	const navigate = useNavigate()
	const [myCar, setMyCar] = useState<Car>()
	const [showModal, setShowModal] = useState(false)
	useEffect(() => {
		const getCar = async () => {
			try {
				const car = await getDoc(doc(db, 'cars', id!))
				if (car.exists()) {
					setMyCar(car.data() as Car)
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
					<h3>Company name : {myCar?.companyName}</h3>
					<h3>Car model name: {myCar?.carModel}</h3>
					<h3>Car color: {myCar?.carColor}</h3>
					<h3>Doors : {myCar?.carDoors}</h3>
					<h3>Fuel type : {myCar?.fuelType}</h3>
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
