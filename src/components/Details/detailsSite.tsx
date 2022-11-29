import { BrowserRouter as Router, Link, Routes, Route, useNavigate, useParams } from 'react-router-dom'

export const DetailSite = () => {
	let { carname } = useParams()
	const navigate = useNavigate()
	return (
		<>
			<div className='container'>
				<h2>Car details</h2> <h1> Your Chosen Car is: {carname}</h1>
				<div style={{ minHeight: '50vh', backgroundColor: 'lightcyan' }}></div>
				<button className='btn btn-warning' onClick={() => navigate(`/`)}>
					Home
				</button>
			</div>
		</>
	)
}
