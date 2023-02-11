import styled from 'styled-components'
export const StyledInput = styled.input`
	width: 20vw;
	border: 2px solid;
	border-radius: 8px;
	font-size: 20px;
	&:focus {
		color: white;
		background-color: lightblue;
		border: white;
	}
`

export const StyledDiv = styled.div`
	border-radius: 10px;
	background-image: linear-gradient(135deg, white, lightgreen, darkblue);
	min-height: 50vh;
	margin-top: 50px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	padding: 20px;
`

export const StyledDivSearch = styled.div`
	margin-top: 20px;
`
export const StyledDivContent = styled.div`
	margin-top: 20px;
	color: black;
	border: 2px black solid;
	border-radius: 10px;
	padding: 10px;
`
export const StyledButton = styled.button`
	background-color: white;
	color: black;
	width: 15vw;
	border-radius: 20px;
	margin: 10px;
	transition: 2s;
	padding: 5px;
	font-size: 13px;
	border: 3px black solid;
	text-transform: uppercase;
	font-weight: 700;
	&:hover {
		color: black;
		background-color: lightcyan;
	}
`
export const StyledButtonDetails = styled.button`
	background-color: white;
	color: darkblue;
	min-width: 10vw;
	border-radius: 20px;
	margin: 10px;
	transition: 2s;
	padding: 5px;
	font-size: 13px;
	border: 3px darkblue solid;
	text-transform: uppercase;
	font-weight: 700;
	&:hover {
		color: black;
		background-color: lightskyblue;
	}
`
export const StyledButtonEdit = styled.button`
	background-color: white;
	text-transform: uppercase;
	border: 3px darkgreen solid;
	font-weight: 700;
	color: darkgreen;
	min-width: 10vw;
	border-radius: 20px;
	margin: 50px;
	transition: 2s;
	padding: 5px;
	font-size: 13px;
	font-weight: 700;
	&:hover {
		color: white;
		background-color: lightpink;
	}
`
