import { Routes as RoutesList, Route } from 'react-router-dom'

import { DetailSite, FormSite, HomePage, EditCar, ErrorComponent } from '../components/index'
import './Routes.css'
//context
import { DetailsProvider } from '../components/Details/DetailsContext'

const Routes = () => {
	return (
		<div className='container'>
			<DetailsProvider>
				<RoutesList>
					<Route path='/' element={<HomePage />} />
					<Route path='/addCar' element={<FormSite />} />
					<Route path='/cardetails/:id' element={<DetailSite />} />
					<Route path='/editcar/:id' element={<EditCar />} />
					<Route path='*' element={<ErrorComponent />} />
				</RoutesList>
			</DetailsProvider>
		</div>
	)
}

export default Routes
