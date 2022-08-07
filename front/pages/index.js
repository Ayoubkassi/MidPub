import { Main } from '../styles/HomePage.styles';
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
        <h1>Hey Hey and welcome again</h1>
      </Main>
      <Footer />
    </>
  )
}
