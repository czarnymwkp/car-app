import { BrowserRouter as Router, Link, Routes, Route, useNavigate, useParams } from 'react-router-dom'

export const DetailSite = () => {
	let { carname } = useParams()
	return (
		<>
			<h1>{carname}</h1>
			<div className='container'>CARS DETAILS</div>
		</>
	)
}
