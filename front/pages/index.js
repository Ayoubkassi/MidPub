import { Main , Navbar , Items , Logo , Lien , Button , Title } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';



export default function Home() {
  return (
    <>
      <Head>
         <title>Iaalane</title>
         <meta name="keywords" content="Ayoubkassi, Ayoub , kassi , software engineer" />
         <meta name="author" content="Ayoub Kassi" />
      </Head>

      <Main>
        <Navbar>
          <Logo>Name</Logo>
          <Items>
            <Lien href="/">EN</Lien>
            <Lien href="/">Log in</Lien>
            <Button>Sign up</Button>
          </Items>
        </Navbar>
        <Title>Where do you want to advertise?</Title>
      </Main>
      <Footer />
    </>
  )
}
