import styled from 'styled-components';


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
  margin-bottom : 100px;

  &:focus{
    outline : none;
    border : none;
  }
`