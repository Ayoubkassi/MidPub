import { Main , Navbar , Items , Logo , Lien , Title } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex , Element  } from '../styles/DashboardPage.styles'
import { BsVolumeUpFill , BsPersonFill , BsAlarm } from 'react-icons/bs'
import { useState } from 'react';
import ActiveCompaigns from '../components/ActiveCompaigns/ActiveCompaigns.component';
import PurchaseHistory from '../components/PurchaseHistory/PurchaseHistory.component';
import Profile from '../components/Profile/Profile.component';



const Dashboard = () => {

	const router = useRouter();

	const handleClick = (e) => {
		    e.preventDefault()
		    router.push("/")
		  }

	const [color1 , setColor1] = useState("black");
	const [color2 , setColor2] = useState("white");
	const [color3 , setColor3] = useState("white");

	const changeOne = () => {
		setColor1("black");
		setColor2("white");
		setColor3("white");
	}

	const changeTwo = () => {
		setColor2("black");
		setColor3("white");
		setColor1("white");
	}

	const changeThree = () => {
		setColor3("black");
		setColor1("white");
		setColor2("white");
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
	            <Lien href="/payment">Cart</Lien>
	          </Items>
	        </Navbar>
	        <Title>Dashboard</Title>
	        <Flex>
	        	<Element color={color1} onClick={changeOne} >
	        		<BsVolumeUpFill size={30} />
	        		<p style={{"marginTop":"15px"}}>Active Campaigns</p>
	        	</Element >

	        	<Element onClick={changeTwo} color={color2} >
	        		<BsAlarm size={30} />
	        		<p style={{"marginTop":"15px"}}>Purchase History</p>
	        	</Element >

	        	<Element onClick={changeThree} color={color3}>
	        		<BsPersonFill size={30} />
	        		<p style={{"marginTop":"15px"}}>Profile</p>
	        	</Element >
	        </Flex>

	        { 
	        	color1 == "black" ? 
	        	<ActiveCompaigns /> : (
	        		color2 == "black" ? <PurchaseHistory /> : <Profile />
	        		)
	        }
	       </Main>
	       <Footer />

	      </>
		);
}

export default Dashboard;