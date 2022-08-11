import Head from 'next/head';
import { useState } from "react";
import { Main , Container , ButtonWrapper , AdvButton , PubButton ,Arrow } from '../styles/SignupPage.styles';
import { Navbar , Logo , Items , Lien , Button , Title} from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import SignupForm from '../components/SignupForm/SignupForm.component';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signup() {

  const [col1, setCol1 ] = useState("white");
  const [col2 , setCol2] = useState("black");

  const handleClick1 = () => {
    setCol1("black");
    setCol2("white");
  }

  const handleClick2 = () => {
    setCol1("white");
    setCol2("black");
  }

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push("login")
  }


  return(
    <>
      <Head>
         <title>Sign Up</title>
         <meta name="keywords" content="This is a website for ads publishor and also advertisor" />
         <meta name="author" content="Ayoub Kassi" />
      </Head>
      <Main>
        <Navbar>
          <Logo onClick={handleClick} >Name</Logo>
          <Items>
            <Lien href="/">EN</Lien>
            <Button onClick={handleClick}>Have an account?</Button>
          </Items>
        </Navbar>

        <Container>
          <Title>Sign up</Title>
          <ButtonWrapper>
            <AdvButton color={col1} onClick={handleClick2}><p style={{"marginBottom" : "-1rem"}}>Sign in as Advertiser</p><Arrow color={col1}>&rarr;</Arrow></AdvButton>
            <PubButton color={col2} onClick={handleClick1}><p style={{"marginBottom" : "-1rem"}}>Sign in as Publisher</p><Arrow color={col2}>&rarr;</Arrow></PubButton>
          </ButtonWrapper>
          <SignupForm />
        </Container>
      </Main>
      <Footer />

    </>
  );
}
