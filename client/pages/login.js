import { Navbar , Logo  } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { Main , Container , Title } from '../styles/LoginPage.styles';
import LoginForm from '../components/LoginForm/LoginForm.component';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Login() {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <>
      <Head>
         <title>Log In</title>
         <meta name="keywords" content="This is a website for ads publishor and also advertisor" />
         <meta name="author" content="Ayoub Kassi" />
       </Head>

       <Main>
         <Navbar>
           <Logo onClick={handleClick}>Name</Logo>
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
