import styled from 'styled-components';
import Link  from 'next/link';



export const Main = styled.div`
  height :100vh;
  background : white;
  max-width : 100vw;
  color : black;
  padding: 30px 120px;
`
export const Navbar = styled.div`
  display : flex ;
  justify-content : space-between;
`

export const Logo = styled.h2`
  font-wight : bold;
`

export const Items = styled.div`
  display : flex;
  justify : content-space-between;
  align-self : flex-end;
`
export const Lien = styled.a`
  color : black;
  font-weight : bold;
  text-decoration : none;
  margin-right : 20px;
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
`

export const Title = styled.h1`
  color : black ;
  text-align : center;
  margin-top : 55px;
`;
