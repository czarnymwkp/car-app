import { useNavigate } from 'react-router-dom'

import { StyledButton, StyledDiv } from '../shared.styled'

export const SearchInput = () => {
	let navigate = useNavigate()
	return (
		<StyledDiv>
			<div>
				<StyledButton onClick={() => navigate('/dupa')}>LOGIN</StyledButton>
			</div>
			<div>
				<StyledButton onClick={() => navigate('/addCar')}>ADD CAR FORM</StyledButton>
			</div>
		</StyledDiv>
	)
}
