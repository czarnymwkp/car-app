import { MainSearchInput } from './mainSearchInput'
import { MainAddCar } from './mainAddCar'
import StyledMainHeader from '../style/mainStyle'

export const MainHeader = () => {
	return (
		<>
			<StyledMainHeader>
				<MainAddCar></MainAddCar>
			</StyledMainHeader>
		</>
	)
}
