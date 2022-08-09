import styled from 'styled-components';

export const Main = styled.div`
  display : flex;
  justify-content : center;
  margin-top : 80px;
`
export const ButContainer = styled.div`
  width : 100%;
  display : flex;
  justify-content : center;
  align-items : center;
`

export const Button = styled.button`
  color : white;
  font-weight : bold;
  background-color : black;
  padding : 6px 34px;
  outline : none;
  border : none;
  cursor : pointer;
  margin-bottom : 100px;

  &:focus{
    outline : none;
    border : none;
  }
`
export const Label = styled.label`
  color : #b5b3b3;
  font-size : 15px;
`

export const InputBut = styled.input`
  outline : none;
  border : 1px solid #b5b3b3;
  padding : 3px 6px;
  width : ${({ width }) => `${width}px`};
`
export const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  margin-bottom : 10px;
`

