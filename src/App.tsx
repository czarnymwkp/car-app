import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes'

import styled from 'styled-components'

export const AppWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: lightgray;
	padding: 10px 5px;
	min-height: 100vh;
`

function App() {
	return <AppWrapper>
		<Routes />
	</AppWrapper>
}

export default App
