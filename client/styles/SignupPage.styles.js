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
    color : ${({ color }) => (color === 'white' ? 'white' : 'black' )};
    background :  ${({ color }) => (color === 'black' ? '#f2f2f2;' : 'black' )};
    font-weight : bold;
    width : 50%;
    outline : none;
    border : none;
    height : 70px;
    cursor : pointer;
    display : flex;
    align-items : center;
    padding : 0px 15px ;

    &:focus{
      outline : none;
      border : none;
    }
`

export const PubButton = styled.button`
  color : ${({ color }) => (color === 'white' ? 'white' : 'black' )};
  background :  ${({ color }) => (color === 'black' ? '#f2f2f2;' : 'black' )};
  font-weight : bold;
  width : 50%;
  outline : none;
  border : none;
  height : 70px;
  cursor : pointer;
  display : flex;
  align-items : center;
  padding : 0px 15px;

  &:focus{
    outline : none;
    border : none;
  }
`


export  const Arrow = styled.div`
  font-weight : 900;
  font-size : 50px;
  color : ${({ color }) => (color === 'white' ? 'white' : 'black' )};
  margin-bottom : 10px;
  position : relative;
  top : -20px;
  height : 20px;
`
