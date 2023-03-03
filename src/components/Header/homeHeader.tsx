import { SearchInput } from '../shared/Search/Search'
import { Home } from '../Home/HomeCars'
import './Header.css'
export const HomePage = () => {
	return (
		<>
			<div className='container'>
				<SearchInput />
				<Home />
			</div>
		</>
	)
}
