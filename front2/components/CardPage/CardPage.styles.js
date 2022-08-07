import styled from 'styled-components';

export const Cards = styled.div`
  display : grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  column-gap: 50px;
  margin-top : 50px;
`

export const Card = styled.div`
  background-color : white;
  height: 200px;
  font-weight : bold;
  color : black;
  display : flex;
  flex-direction : column;
  padding : 12px;
  cursor : pointer;
`
export const ImageWrapper = styled.div`
  width: 50px;
  height : 50px;
`
