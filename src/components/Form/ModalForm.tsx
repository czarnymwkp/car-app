import { useNavigate } from 'react-router-dom'
import { StyledButton, ModalDiv } from './Form-styled'

type ComponentProps = {
	setShowModal: (show: boolean) => void
}

export default function ModalForm(props: ComponentProps) {
	const navigate = useNavigate()

	return (
		<ModalDiv>
			<h2>Are you sure to change date in your car???</h2> <StyledButton onClick={() => navigate(`/`)}>X</StyledButton>
			<StyledButton onClick={() => props.setShowModal(false)}>V</StyledButton>
		</ModalDiv>
	)
}
