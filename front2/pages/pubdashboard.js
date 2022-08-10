import { Main , Navbar , Items , Logo , Lien , Button , Square , Flexi , Element , Flex , Stats , Item , Final , Left , Right , Calendar , Inside } from '../styles/PubDashboardPage.styles';
import Head from 'next/head';
import Footer from '../components/Footer/Footer.component';
import { useRouter } from 'next/router';
import { BsVolumeUpFill , BsPersonFill , BsAlarm, BsReception4 , BsFillCreditCard2BackFill  } from 'react-icons/bs';
import { useState } from 'react';
import { FaBuilding  } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';

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
		          <Logo>Name</Logo>
		          <Items>
		            <Button onClick={handleClick}>Publisher Panel</Button>
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
	        	<Stats>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Sales</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Profit</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Paid</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Pending</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Customers</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Orders</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Completed</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Live</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Pending</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Disputed</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        </Stats>

		        <Final>
		        	<Left>
		        		<p>Sales Performance</p>
		        		<table className="table">
				          <thead>
				            <tr>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				            </tr>
				          </thead>
				            <tr style={{"height":"10px"}}>
				              <td>Jan</td>
				              <td>Feb</td>
				              <td>Mar</td>
				              <td>Apr</td>
				              <td>May</td>
				              <td>Jun</td>
				              <td>Jul</td>
				              <td>Aug</td>
				              <td>Sept</td>
				              <td>Oct</td>
				              <td>Nov</td>
				              <td>Dec</td>
				            </tr>
				        </table>
		        	</Left>
		        	<Right>
		        		<p>Sales by Type</p>
		        		<Calendar>
		        			<Inside></Inside>
		        			<Inside>Jan</Inside>
		        			<Inside>Feb</Inside>
		        			<Inside>Mar</Inside>
		        			<Inside>Apr</Inside>
		        			<Inside>May</Inside>
		        			<Inside>Jun</Inside>
		        			<Inside>Jul</Inside>
		        			<Inside>Aug</Inside>
		        			<Inside>Sep</Inside>
		        			<Inside>Oct</Inside>
		        			<Inside>Nov</Inside>
		        			<Inside>Dec</Inside>
		        			<Inside>Display Ads</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>Social Media</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>Advertorials</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        		</Calendar>
		        	</Right>
		        </Final>

		       </Main>
		       <Footer />
			</>
		);
}

export default PubDashboard;
