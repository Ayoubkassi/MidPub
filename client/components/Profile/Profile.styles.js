import styled from 'styled-components';

export const Flex = styled.div`
	display : grid;
	grid-template-columns: auto auto auto;
	align-content : center;
	height : 30px;
	margin-top : 40px;
`

export const Element = styled.div`
	flex-basis : 0,33%;
	background : ${({ color }) => color == "black" ? "black" : "#f2f2f2" };
	color : ${({color}) => color == "black" ? "white" : "black" };
	padding : 4px 15px;
	cursor : pointer;
	font-weight : ${({color}) => color == "black" ? "bold" : "normal" };;
	
`

