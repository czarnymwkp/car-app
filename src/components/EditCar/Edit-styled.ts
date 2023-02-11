import styled from 'styled-components'

export const StyledDiv = styled.div`
	background-color: grey;
	min-height: 50vh;
	margin-top: 50px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	padding: 20px;
	color: black;
`
export const StyledDivSearch = styled.div`
	margin-top: 20px;
`
export const StyledDivContent = styled.div`
	margin-top: 20px;
	color: black;
	border: 2px white solid;
`

export const StyledButton = styled.button`
	background-color: black;
	color: white;
	width: 10vw;
	border-radius: 10px;
	margin: 10px;
	transition: 2s;
	padding: 10px;

	&:hover {
		color: black;
		background-color: #fff;
	}
`
export const DivDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 20px;
	margin-top: 100px;
	background-color: #fff;
	border: 2px black solid;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
