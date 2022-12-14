import { BrowserRouter as Router, Link, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { getDatabase, ref, onValue } from 'firebase/database'

export const DetailSite = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const db = getDatabase()
	console.log(db)
	
	
	return (
		<>
			<div className='container'>
				<h2>Car details</h2>
				<h5>car id is: {id}</h5>
				<div
					style={{
						minHeight: '50vh',
						backgroundColor: '#008F8C',
						border: '5px white solid',
						borderRadius: '20px',
					}}></div>
				<button style={{ marginTop: '10px' }} className='btn btn-warning' onClick={() => navigate(`/`)}>
					Home
				</button>
			</div>
		</>
	)
}
