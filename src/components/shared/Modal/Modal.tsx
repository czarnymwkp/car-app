import './Modal.css'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledButton } from '../shared.styled'

export default function Modal(props: string | any) {
	const { id } = useParams()
	const navigate = useNavigate()
	const navigateTo = () => navigate(`/editcar/${id}`)
	const navigateToMain = () => navigate(`/`)

	return (
		<div className='modalShow modalBackground'>
			<div className='modalContainer'>
				<div className='titleCloseBtn'>
					<button></button>
				</div>
				<div className='modalTittle'>
					<h2> Do you want to change your car ditails??</h2>
				</div>
				<div className='modalBody'>
					<p>Next page will give you acces to edit details</p>
				</div>
				<div className='modalFooter'>
					<StyledButton onClick={navigateTo}>Continue</StyledButton>
					<StyledButton onClick={navigateToMain}>Cancel</StyledButton>
				</div>
			</div>
		</div>
	)
}
