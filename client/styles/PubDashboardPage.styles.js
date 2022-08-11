import styled from 'styled-components';
import Link  from 'next/link';



export const Main = styled.div`
  background : white;
  max-width : 100vw;
  color : black;
  padding: 30px 120px;
`
export const Navbar = styled.div`
  display : flex ;
  justify-content : space-between;
  align-items : center;
`

export const Logo = styled.h2`
  font-wight : bold;
  cursor : pointer;
`

export const Items = styled.div`
  display : flex;
  justify : content-space-between;
  align-self : flex-end;
  align-items : center;
`
export const Lien = styled.a`
  color : black;
  font-weight : bold;
  text-decoration : none;
  margin-right : 30px;
  &:first-of-type{
    margin-right: 60px;
  }

`
export const Button = styled.button`
  color : white;
  font-weight : bold;
  background-color : black;
  padding : 6px 14px;
  outline : none;
  border : none;
  cursor : pointer;

  &:focus{
    outline : none;
    border : none;
    color : white;
  }

  &:hover{
    color : white;
  }
`
export const Flexi = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`

export const Square = styled.div`
  height : 100px;
  width : 100px;
  background : #f2f2f2;
  display : flex;
  justify-content : center;
  align-items : center;
`

export const Element = styled.div`
  flex-basis : 0,33%;
  background : ${({ color }) => color == "black" ? "black" : "#f2f2f2" };
  color : ${({color}) => color == "black" ? "white" : "black" };
  padding : 15px 20px;
  cursor : pointer;
  font-weight : ${({color}) => color == "black" ? "bold" : "normal" };;
`

export const Flex = styled.div`
  display : grid;
  grid-template-columns: auto auto auto auto auto auto;
  align-content : center;
  height : 100px;
  margin-top : 40px;
`

export const Stats = styled.div`
  display  : grid;
  grid-template-columns: repeat(5,1fr);
  gap : 10px;
  margin-top : 30px;
  height : 180px;

`

export const Item = styled.div`
  background : #f2f2f2;
  padding : 10px;
  display : flex;
  justify-content : center;
  flex-direction : column;
  align-items : center;
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