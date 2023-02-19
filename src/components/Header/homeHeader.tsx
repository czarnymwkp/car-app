import { SearchInput } from '../shared/search'
import { Home } from '../home/HomeCars'
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
