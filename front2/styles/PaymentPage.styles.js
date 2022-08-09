import styled from 'styled-components';


export const Container = styled.div`
	display : flex;
	justify-content : space-between;
	margin-top : 40px;
	margin-bottom : 230px;
`

export const Left = styled.div`
	flex-basis : 75%;
	width : 75%;
`

export const Right = styled.div`
	flex-basis : 35%;
	width : 35%;
	background : #f2f2f2;
	height : fit-content;
	padding : 10px 15px;

`
export const Label = styled.label`
  color : #b5b3b3;
  font-size : 15px;
`;

export const InputBut = styled.input`
  outline : none;
  border : 1px solid #b5b3b3;
  padding : 3px 6px;
  width : ${({ width }) => `${width}px`};

  &::placeholder{
  	color : black;
  }
`
export const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  margin-bottom : 10px;
`

export const Info = styled.div`
	max-width : 450px;
	margin : 30px 10px;
`
export const ButContainer = styled.div`
  width : 450px;
  display : flex;
  justify-content : center;
  align-items : center;
  margin-top : 10px;
`

export const Button = styled.button`
  color : white;
  font-weight : bold;
  background-color : black;
  padding : 6px 34px;
  outline : none;
  border : none;
  cursor : pointer;

  &:focus{
    outline : none;
    border : none;
  }

`

export const Flex = styled.div`
	display : flex;
	justify-content : space-between;
	align-items : center;
`