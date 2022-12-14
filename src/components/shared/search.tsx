import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
	let navigate = useNavigate()
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
			<div>
				<button onClick={() => navigate('/form')} className='btn btn-warning' style={{ height: '40px' }}>
					CAR FORM
				</button>
				<button
					onClick={() => navigate('/login')}
					className='btn btn-warning'
					style={{ height: '40px', margin: '10px' }}>
					LOGIN
				</button>
			</div>
		</div>
	)
}
