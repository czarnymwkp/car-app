import { BrowserRouter as Router, Link, Routes as RoutesList, Route, useNavigate } from 'react-router-dom'

import { DetailSite, FormSite, HomePage, EditCar, ErrorComponent } from '../index'
//context
import { DetailsProvider } from '../details/DetailsContext'

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
