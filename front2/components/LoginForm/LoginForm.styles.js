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
