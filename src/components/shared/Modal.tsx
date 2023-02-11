import './Modal.css'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledButton } from './shared.styled'

export default function Modal(props: string | any) {
	console.log(props)
	const { id } = useParams()
	const navigate = useNavigate()
	const navigateTo = () => navigate(`/editcar/${id}`)
	return (
		<div className='modalShow modalBackground'>
			<div className='modalContainer'>
				<div className='titleCloseBtn'>
					<button></button>
				</div>
				<div className='tittle'>
					<h2> Do you want to change your car ditails??</h2>
				</div>
				<div className='body'>
					<p>Next page will give you acces to edit details</p>
				</div>
				<div className='footer'>
					<StyledButton onClick={navigateTo}>Continue</StyledButton>
					<StyledButton onClick={() => console.log(!props.showModal)}>Cancel</StyledButton>
				</div>
			</div>
		</div>
	)
}
