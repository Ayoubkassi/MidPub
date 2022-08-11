import { Main , Navbar , Items , Logo , Lien , Button , Square , Flexi , Element  , Stats , Item , Final , Left , Right , Calendar , Inside } from '../styles/PubDashboardPage.styles';
import { Flex } from '../styles/AdmDashboardPage.styles';
import Head from 'next/head';
import Footer from '../components/Footer/Footer.component';
import { useRouter } from 'next/router';
import { BsVolumeUpFill , BsPersonFill , BsAlarm, BsReception4 , BsFillCreditCard2BackFill  } from 'react-icons/bs';
import { useState } from 'react';
import { FaBuilding  } from 'react-icons/fa';
import { IoIosPricetag , IoMdSettings } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';

const AdmDashboard = () => {

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
		const [color7 , setColor7] = useState("white");

		const changeOne = () => {
			setColor1("black");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
			setColor7("white");
		}

		const changeTwo = () => {
			setColor2("black");
			setColor3("white");
			setColor1("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
			setColor7("white");
		}

		const changeThree = () => {
			setColor3("black");
			setColor1("white");
			setColor2("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
			setColor7("white");
		}

		const changeFour = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("black");
			setColor5("white");
			setColor6("white");
			setColor7("white");
		}

		const changeFive = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("black");
			setColor6("white");
			setColor7("white");
		}

		const changeSix = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("white");
			setColor6("black");
			setColor7("white");
		}

		const changeSaven = () => {
			setColor1("white");
			setColor2("white");
			setColor3("white");
			setColor4("white");
			setColor5("white");
			setColor6("white");
			setColor7("black");
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
		            <Button>Admin Panel</Button>
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
		        		<GiHamburgerMenu size={30} />
		        		<p style={{"marginTop":"15px"}}>Services</p>
		        	</Element >

		        	<Element onClick={changeThree} color={color3}>
		        		<AiFillPlusCircle size={30} />
		        		<p style={{"marginTop":"15px"}}>Pay in/out</p>
		        	</Element >
		        	<Element color={color4} onClick={changeFour} >
		        		<RiContactsBook2Fill size={30} />
		        		<p style={{"marginTop":"15px"}}>Vendors</p>
		        	</Element >

		        	<Element onClick={changeFive} color={color5} >
		        		<BsPersonFill size={30} />
		        		<p style={{"marginTop":"15px"}}>Profile</p>
		        	</Element >

		        	<Element onClick={changeSix} color={color6}>
		        		<HiUserGroup size={30} />
		        		<p style={{"marginTop":"15px"}}>Users</p>
		        	</Element >
		        	<Element onClick={changeSaven} color={color7}>
		        		<IoMdSettings size={30} />
		        		<p style={{"marginTop":"15px"}}>Settings</p>
		        	</Element >
	        	</Flex>
		      </Main>
			</>
		);
}

export default AdmDashboard;