import Head from 'next/head';
import { Main , Container , ButtonWrapper , AdvButton , PubButton , BlackArrow , WhiteArrow } from '../styles/SignupPage.styles';
import { Navbar , Logo , Items , Lien , Button , Title} from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import SignupForm from '../components/SignupForm/SignupForm.component';

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
            <AdvButton><p>Sign in as Advertiser</p><WhiteArrow>&rarr;</WhiteArrow></AdvButton>
            <PubButton><p>Sign in as Publisher</p><BlackArrow>&rarr;</BlackArrow></PubButton>
          </ButtonWrapper>
          <SignupForm />
        </Container>
      </Main>
      <Footer />

    </>
  );
}
