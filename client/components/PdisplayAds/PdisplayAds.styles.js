import styled from 'styled-components';

export const Flex = styled.div`
	display : grid;
	grid-template-columns : 45% 55%;
	width : 100%;
	gap : 10px;
	margin-top : 45px;
`

export const Element = styled.div`

`

export const Double = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`
export const Label = styled.label`
  color : #b5b3b3;
  font-size : 15px;
`

export const InputBut = styled.input`
  outline : none;
  border : 1px solid #b5b3b3;
  padding : 3px 6px;
  width : 15vw;
`
export const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  margin-bottom : 10px;
`
export const ButContainer = styled.div`
  width : 100%;
  display : flex;
  justify-content : center;
  align-items : center;
  margin-top : 15px;
`

export const Button = styled.button`
  color : white;
  font-weight : bold;
  background-color : black;
  padding : 3px 54px;
  outline : none;
  border : none;
  cursor : pointer;
  margin-top : 50px;
  margin-bottom : 40px;

  &:focus{
    outline : none;
    border : none;
  }
`