import styled from 'styled-components';

export const Cards = styled.div`
  display : grid;
  grid-template-columns: auto auto auto auto auto;
  align-content: center;
  column-gap: 30px;
  margin-bottom : 20px;
`

export const Card = styled.div`
  background-color : #f2f2f2;
  height: 120px;
  color : black;
  display : flex;
  flex-direction : column;
  padding : 12px;
  cursor : pointer;
`
