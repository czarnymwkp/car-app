import { useNavigate } from 'react-router-dom'

export const EditCar = () => {
	const navigate = useNavigate()
	return (
		<>
			<div>EDIT</div>
			<button onClick={() => navigate(`/`)}>HOME</button>
		</>
	)
}
