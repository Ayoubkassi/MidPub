import styled from 'styled-components';


export const TableContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  margin-top : 20px;

`
export const Title = styled.h1`
  color : black ;
  text-align : center;
  margin-top : 55px;
  margin-bottom : 100px;
`
export const ButContainer = styled.div`
  width : 100%;
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
  margin-bottom : 100px;

  &:focus{
    outline : none;
    border : none;
  }
`