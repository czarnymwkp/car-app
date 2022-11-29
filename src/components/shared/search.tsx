import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
	let navigate = useNavigate()
	return (
		<>
			{' '}
			<h2>SEARCH CAR</h2>
			<input type='text' />
			<button onClick={() => navigate('/form')} className='btn btn-primary' style={{ marginLeft: '1000px' }}>
				ADD CARN FROM FORM
			</button>
		</>
	)
}
