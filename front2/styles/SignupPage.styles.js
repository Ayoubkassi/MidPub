import styled from 'styled-components';


export const Main = styled.div`
  background : white;
  max-width : 100vw;
  color : black;
  padding: 30px 120px;
  height : 100vh;
`

export const Container = styled.div`
  max-width : 60vw;
  position : relative;
  top : 15%;
  left : 50%;
  transform : translate(-50%,-50%);
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
    height : 80px;
    cursor : pointer;
`

export const PubButton = styled.button`
  color : black;
  background : #f2f2f2;
  font-weight : bold;
  width : 50%;
  outline : none;
  border : none;
  height : 80px;
  cursor : pointer;
`
