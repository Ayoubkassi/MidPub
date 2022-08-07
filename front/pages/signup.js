import Head from 'next/head';
import { Main , Container , ButtonWrapper , AdvButton , PubButton } from '../styles/SignupPage.styles';
import { Navbar , Logo , Items , Lien , Button , Title} from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';

export default function Signup() {
  return(
    <>
      <Head>
         <title>Sign Up</title>
         <meta name="keywords" content="This is a website for ads publishor and also advertisor" />
         <meta name="author" content="Ayoub Kassi" />
      </Head>
      <Main>
        <Navbar>
          <Logo>Name</Logo>
          <Items>
            <Lien href="/">EN</Lien>
            <Button>Have an account?</Button>
          </Items>
        </Navbar>

        <Container>
          <Title>Sign up</Title>
          <ButtonWrapper>
            <AdvButton>Sign in as Advertiser</AdvButton>
            <PubButton>Sign in as Publisher</PubButton>
          </ButtonWrapper>
        </Container>
      </Main>
      <Footer />

    </>
  );
}
