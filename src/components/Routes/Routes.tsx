import { BrowserRouter as Router, Link, Routes as RoutesList, Route, useNavigate } from 'react-router-dom'

import { HomePage } from '../Header/homeHeader'
import { FormSite } from '../Form/formSites'
import { ErrorComponent } from '../Error/errorSite'
import { DetailSite } from '../Details/detailsSite'
import { SingUpComponent } from '../SignUp/SignUp'
//import context here
import { FormContext } from '../Form/formContext'

//components

const Routes = () => {
	return (
		<div className='container'>
			<FormContext.Provider value=''>
				<RoutesList>
					<Route path='/login' element={<SingUpComponent />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/form' element={<FormSite />} />
					<Route path='/cardetails/:carname' element={<DetailSite />} />
					<Route path='*' element={<ErrorComponent />} />
				</RoutesList>
			</FormContext.Provider>
		</div>
	)
}

export default Routes
