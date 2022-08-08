import { Navbar , Logo  } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { Main , Container , Title } from '../styles/LoginPage.styles';
import LoginForm from '../components/LoginForm/LoginForm.component';

export default function Login() {
  return (
    <>
      <Head>
         <title>Log In</title>
         <meta name="keywords" content="This is a website for ads publishor and also advertisor" />
         <meta name="author" content="Ayoub Kassi" />
       </Head>

       <Main>
         <Navbar>
           <Logo>Name</Logo>
         </Navbar>
         <Container>
            <Title>Log in</Title>
            <LoginForm />
         </Container>
      </Main>
      <Footer />
    </>
  );
}
