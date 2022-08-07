import styled from 'styled-components';


export const Main = styled.div`
  background : white;
  max-width : 100vw;
  color : black;
  padding: 30px 120px;
  min-height : 100vh;
`

export const Container = styled.div`
  max-width : 60vw;
  position : relative;
  top : 50%;
  left : 50%;
  transform : translate(-50%,-0%);
`

export const ButtonWrapper = styled.div`
  display : flex;
  width : 100%;
  padding : 20px 5px;
`

export const AdvButton = styled.button`
    background : black;
    color : white;
    font-weight : bold;
    width : 50%;
    outline : none;
    border : none;
    height : 70px;
    cursor : pointer;
    display : flex;
    align-items : center;
    padding : 20px ;
`

export const PubButton = styled.button`
  color : black;
  background : #f2f2f2;
  font-weight : bold;
  width : 50%;
  outline : none;
  border : none;
  height : 70px;
  cursor : pointer;
  display : flex;
  align-items : center;
  padding : 20px;
`
export const BlackArrow = styled.div`
  font-weight : 900;
  font-size : 50px;
  color : black;
  margin-bottom : 30px;
`

export  const WhiteArrow = styled.div`
  font-weight : 900;
  font-size : 50px;
  color : white;
  margin-bottom : 30px;
`
