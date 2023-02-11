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
	background-color: #fff;
	min-height: 50vh;
	margin-top: 50px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	padding: 20px;
	
`
export const StyledForms = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	background-color: #fff;
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
	border: 2px white solid;
`
export const StyledButton = styled.button`
	background-color: black;
	color: white;
	width: 10vw;
	border-radius: 10px;
	margin: 10px;
	transition: 2s;
	padding: 5px;
	font-size: 13px;
	&:focus {
		background-color: darkgray;
	}
	&:hover {
		color: black;
		background-color: #fff;
	}
`
// Modal style

export const ModalDiv = styled.div`
	background-color: #fff;
	border: 2px solid black;
	min-width: 300px;
	min-height: 100px;
	position: absolute;
	left: 20%;
	right: 20%;
	top: 300px;
	text-align: center;
	border-radius: 15px;
`
