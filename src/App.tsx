import { BrowserRouter as Router, Link, Routes, Route, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Sites

import { HomePage } from './sites/mainSite'
import { FormSite } from './sites/formSites'
import { ErrorComponent } from './sites/errorSite'

//components

import { MainHeader } from './components/mainHeader'
import { MainNav } from './components/mainNav'
import { MainCars } from './components/mainCarList'
import { DetailSite } from './sites/detailsSite'
//style

import StyledMainHeader from './style/mainStyle'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/form' element={<FormSite />} />
					<Route path='/cardetails/:carname' element={<DetailSite />} />
					<Route path='*' element={<ErrorComponent />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
