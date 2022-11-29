import { MainSearchInput } from './mainSearchInput'
import { MainAddCar } from './mainAddCar'
import StyledMainHeader from '../style/mainStyle'
import { useNavigate } from 'react-router-dom'

export const MainHeader = () => {
	const navigate = useNavigate()

	let carname = 'audi'
	return (
		<>
			<div className='container' style={{ backgroundColor: 'lightgreen', marginTop: '120px' }}>
				{' '}
				<h1>CAR LIST</h1>
				<ul>
					<li>
						AUDI A5{' '}
						<button className='btn btn-warning' onClick={() => navigate(`cardetails/audi`)}>
							SHOW DETAILS
						</button>
					</li>
					<li>B</li>
					<li>C</li>
					<li>D</li>
					<li>E</li>
					<li>F</li>
					<li>G</li>
					<li>H</li>
					<li>I</li>
					<li>J</li>
					<li>K</li>
					<li>L</li>
					<li>M</li>
					<li>N</li>
					<li>O</li>
					<li>P</li>
					<li>R</li>
					<li>S</li>
					<li>T</li>
					<li>U</li>
				</ul>
			</div>
		</>
	)
}
