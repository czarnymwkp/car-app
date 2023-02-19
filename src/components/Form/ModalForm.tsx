import { useNavigate } from 'react-router-dom'
import { StyledButton, ModalDiv } from './Form-styled'

type ComponentProps = {
	setShowModal: (show: boolean) => void
}

export default function ModalForm(props: ComponentProps) {
	const navigate = useNavigate()

	return (
		<ModalDiv>
			<h2>Your car details was edited and saved!!!</h2> 
			<StyledButton onClick={() => props.setShowModal(false)}>V</StyledButton>
		</ModalDiv>
	)
}
