import styled from 'styled-components';
import Link  from 'next/link';
import Image from 'next/image';



export const Main = styled.div`
  background-color: black;
  padding: 30px 120px;
  font-weight: 400;
  line-height: 1.5;
  display : flex;
  flex-direction : column;
  color : white;
  @media screen and (max-width : 550px){
    padding : 30px;
  }
`

export const Mobile = styled.div`
  display : flex;
`

export const MobileImage = styled.div`
 // border : 1px solid white;
  margin-right : 20px;
  padding: 5px;
  cursor : pointer;
`

export const Copyright = styled.p`
  color : #cac8bb;
`

export const Media = styled.div`
  display: flex;
  justify-content : space-between;
  align-items : center;
  width : 100%;
  margin-bottom : 10px;
  &:first-of-type{
    margin-bottom : 50px;
  }
 // &:hover{
  //  cursor:pointer;
 // }
`

export const Social = styled.div`
  display : flex;
`
export const LinkContainer = styled.div`
  margin-right : 30px;
`

export const Links = styled.div`
  display : flex;
`

export const ItemMedia = styled.div`
  width : 40px;
  height : 40px;
  margin-right : 10px;
  background : #231e20;
  border-radius : 5px;
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
`


export const Item = styled.a`
  text-decoration : none;
  color : #cac8bb;
  cursor : pointer;
  &:hover{
    text-decoration: underline;
    color : white;
  }
`

export const StyledImage = styled(Image)`
  @media screen and (max-width : 550px){
    width : 40px;
    height : 40px;
}
`
