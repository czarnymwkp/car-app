import { BrowserRouter as Router, Link, Routes as RoutesList, Route, useNavigate } from 'react-router-dom'

import { HomePage } from '../Header/homeHeader'
import { FormSite } from '../Form/formSites'
import { ErrorComponent } from '../Error/errorSite'
import { DetailSite } from '../Details/detailsSite'

//components

const Routes = () => {
	
	return (
		<div className='container'>
			<RoutesList>
				<Route path='/' element={<HomePage />} />
				<Route path='/form' element={<FormSite />} />
				<Route path='/cardetails/:carname' element={<DetailSite />} />
				<Route path='*' element={<ErrorComponent />} />
			</RoutesList>
		</div>
	)
}

export default Routes
