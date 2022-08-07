import styled from 'styled-components';

export const Cards = styled.div`
  display : grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  column-gap: 50px;
  margin-bottom : 30px;
`

export const Card = styled.div`
  background-color : #f2f2f2;
  height: 200px;
  font-weight : bold;
  color : black;
  display : flex;
  align-items : flex-end;
  padding : 12px;
  cursor : pointer;
`

export const Arrow = styled.span`
  font-weight : 900;
  font-size : 30px;
  margin-bottom : -5px;
`
