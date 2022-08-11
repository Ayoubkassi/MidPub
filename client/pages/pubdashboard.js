import { Main , Navbar , Items , Logo , Lien , Button , Square , Flexi , Element , Flex , Stats , Item , Final , Left , Right , Calendar , Inside } from '../styles/PubDashboardPage.styles';
import Head from 'next/head';
import Footer from '../components/Footer/Footer.component';
import { useRouter } from 'next/router';
import { BsVolumeUpFill , BsPersonFill , BsAlarm, BsReception4 , BsFillCreditCard2BackFill  } from 'react-icons/bs';
import { useState } from 'react';
import { FaBuilding  } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import Sales from '../components/Sales/Sales.component';
import Campaigns from '../components/Campaigns/Campaigns.component';
import PriceList from '../components/PriceList/PriceList.component';
import Payments from '../components/Payments/Payments.component';
import Company from '../components/Company/Company.component';
import Profile from '../components/Profile/Profile.component';

const PubDashboard = () => {

	  const router = useRouter()

	  const handleClick = (e) => {
	    e.preventDefault()
	    router.push("/")
	  }

	    const [color1 , setColor1] = useState("black");
		const [color2 , setColor2] = useState("white");
		const [color3 , setColor3] = useState("white");
		const [color4 , setColor4] = useState("white");
		const [color5 , setColor5] = useState("white");
		const [color6 , setColor6] = useState("white");

		const changeOne = () => {
			setColor1("black");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
		}

		const changeTwo = () => {
			setColor2("black");
			setColor3("white");
			setColor1("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
		}

		const changeThree = () => {
			setColor3("black");
			setColor1("white");
			setColor2("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
		}

		const changeFour = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("black");
			setColor5("white");
			setColor6("white");
		}

		const changeFive = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("black");
			setColor6("white");
		}

		const changeSix = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("white");
			setColor6("black");
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
		            <Button>Publisher Panel</Button>
		          </Items>
		        </Navbar>
		        <Flexi style={{"marginTop":"60px"}}>
		        	<Square>Logo</Square>
		        	<h5 style={{"fontWeight":"bold"}}>Status</h5>
		        </Flexi>

		        <Flex>
		        	<Element color={color1} onClick={changeOne} >
		        		<BsReception4 size={30} />
		        		<p style={{"marginTop":"15px"}}>Sales</p>
		        	</Element >

		        	<Element onClick={changeTwo} color={color2} >
		        		<BsVolumeUpFill size={30} />
		        		<p style={{"marginTop":"15px"}}>Campaigns</p>
		        	</Element >

		        	<Element onClick={changeThree} color={color3}>
		        		<IoIosPricetag size={30} />
		        		<p style={{"marginTop":"15px"}}>Price List</p>
		        	</Element >
		        	<Element color={color4} onClick={changeFour} >
		        		<BsFillCreditCard2BackFill size={30} />
		        		<p style={{"marginTop":"15px"}}>Payments</p>
		        	</Element >

		        	<Element onClick={changeFive} color={color5} >
		        		<FaBuilding size={30} />
		        		<p style={{"marginTop":"15px"}}>Company</p>
		        	</Element >

		        	<Element onClick={changeSix} color={color6}>
		        		<BsPersonFill size={30} />
		        		<p style={{"marginTop":"15px"}}>Profile</p>
		        	</Element >
	        	</Flex>

	        	{
	        		color1 == "black" ? <Sales /> : (
	        				color2 == "black" ? <Campaigns /> : (
	        				color3 == "black" ? <PriceList /> : ( 
	        				color4 == "black" ?	<Payments />  : (
	        				color5 == "black" ? <Company />   :
	        				<Profile />
	        					)
	        					)
	        					)
	        					)
	        	}
	        	
		       </Main>
		       <Footer />
			</>
		);
}

export default PubDashboard;
