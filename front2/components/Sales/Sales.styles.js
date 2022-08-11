import styled from 'styled-components';

export const Item = styled.div`
  background : #f2f2f2;
  padding : 10px;
  display : flex;
  justify-content : center;
  flex-direction : column;
  align-items : center;
`

export const Stats = styled.div`
  display  : grid;
  grid-template-columns: repeat(5,1fr);
  gap : 10px;
  margin-top : 30px;
  height : 180px;

`


export const Final = styled.div`
  display : grid;
  grid-template-columns: repeat(2,1fr);
  gap : 10px;
  height : 250px;
  margin-top : 50px;
`

export const Left = styled.div`
  background : #f2f2f2;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
  padding : 5px 20px;
`

export const Right = styled.div`
  background : #f2f2f2;
  padding : 10px 20px;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
`

export const Calendar = styled.div`
  display : grid;
  grid-template-columns: 2.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height : 100px;
  width : 100%;
  gap : 1px;
  padding-bottom : 15px;
`

export const Inside = styled.div`
  border : 1px solid black;
  font-size : 11px;
  display : flex;
  justify-content:center;
  align-items :center;

  &:first-of-type{
    border : none;
  }
`