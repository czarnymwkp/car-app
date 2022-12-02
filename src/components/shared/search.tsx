import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
	let navigate = useNavigate()
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<div
				style={{
					backgroundColor: '#015958',
					color: 'white',
					textAlign: 'center',
					border: '2px white solid',
					borderRadius: '20px',
				}}>
				<h4 style={{ padding: '4px' }}>SEARCH CAR</h4>
				<input type='text' style={{ margin: '8px' }} />
			</div>
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
