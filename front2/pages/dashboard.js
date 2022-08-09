import { Main , Navbar , Items , Logo , Lien , Title } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {  } from '../styles/DashboardPage.styles'


const Dashboard = () => {

	const router = useRouter();

	const handleClick = (e) => {
		    e.preventDefault()
		    router.push("/")
		  }
	return(
		<>
	      <Head>
	         <title>Iaalane</title>
	         <meta name="keywords" content="Ayoubkassi, Ayoub , kassi , software engineer" />
	         <meta name="author" content="Ayoub Kassi" />
	      </Head>

	      <Main>
	        <Navbar>
	          <Logo onClick={handleClick}>Name</Logo>
	          <Items>
	            <Lien href="/">EN</Lien>
	            <Lien href="/">Dashboard</Lien>
	            <Lien href="/">Logout</Lien>
	            <Lien href="/">Cart</Lien>
	          </Items>
	        </Navbar>
	        <Title>Dashboard</Title>


	       </Main>
	       <Footer />

	      </>
		);
}

export default Dashboard;