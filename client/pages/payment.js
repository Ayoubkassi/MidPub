import { Main , Navbar , Items , Logo , Lien , Title  } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container , Left , Right , Wrap , Label , InputBut , Info , ButContainer , Button , Flex} from '../styles/PaymentPage.styles';
import { useState } from 'react';

const Payment = () => {



	  const router = useRouter()

	  const handleClick = (e) => {
	    e.preventDefault()
	    router.push("/")
	  }

	  const [cardholderName,setCardholderName] = useState('');
	  const [cardNumber, setCardNumber] = useState('');
	  const [endMonth , setEndMonth] = useState(0);
	  const [endYear , setEndYear] = useState(0);
	  const [cvv, setCvv] = useState(0);
	  const [coupon, setCoupon] = useState('');

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
	            <Lien href="/dashboard">Dashboard</Lien>
	            <Lien href="/">Logout</Lien>
	            <Lien href="/payment">Cart</Lien>
	          </Items>
	        </Navbar>
	        <Title>Payment</Title>

		        <Container>
		      		<Left>
		      			<div style={{"display": "flex", "alignItems":"flex-start"}}>
		      				<p style={{"fontWeight":"bold", "margin":"6px 20px 0 0"}}>Credit & Debit Card</p>
		      				<Image src="/credit.png" alt="payment cards" width={220} height={40} /> 
		      			</div>
		      			 <Wrap>
				          <Label>Cardholder Name</Label>
				          <InputBut width='45vw' type="text" value={cardholderName} onChange={(e) => setCardholderName(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Card Number</Label>
				          <InputBut width='45vw' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value) } />
				        </Wrap>

				       <div style={{"display":"flex","alignItems":"center", "justifyContent":"space-between", "width":"85%"}}>
				        <Wrap>
				          <Label>End Date</Label>
				          <InputBut width='10vw' placeholder="mm" type="text" value={endMonth} onChange={(e) => setEndMonth(e.target.value) } />
				        </Wrap>

				        <Wrap>
				          <Label style={{"color":"transparent"}}>End</Label>
				          <InputBut width='10vw' placeholder="yyyy" type="text" value={endYear} onChange={(e) => setEndYear(e.target.value) } />
				        </Wrap>

				        <Wrap>
				          <Label>CVV</Label>
				          <InputBut width='15vw'  type="text" value={cvv} onChange={(e) => setCvv(e.target.value) } />
				        </Wrap>
				        <p style={{"marginTop":"30px"}}>3 digits</p>
				       </div>

				       <Info>
				       	<p style={{"fontSize":"13px","fontWeight":"500"}}>By proceeding, I agree to Name’s Terms & Conditions and acknowledge that I have read the Privacy Policy.</p>
				       </Info>

				       <ButContainer>
          					<Button>Pay now</Button>
        				</ButContainer>

		      		</Left>
		      		<Right>
		      			<Flex>
		      				<p style={{"fontWeight":"bold"}}>Subtotal</p>
		      				<p style={{"fontWeight":"bold"}}>AED 27,000.00</p>
		      			</Flex>

		      			<Flex>
		      				<p>VAT</p>
		      				<p>AED 1,350</p>
		      			</Flex>

		      			<Flex>
		      				<p style={{"fontWeight":"bold"}}>Total</p>
		      				<p style={{"fontWeight":"bold"}}>AED 28,350</p>
		      			</Flex>

		      			<p style={{"color":"#b5b3b3","marginTop":"10px", "fontSize":"13px"}}>Coupon</p>

		      			<Flex>
				          	<InputBut width='10vw' placeholder="Coupon Code" type="text" value={coupon} onChange={(e) => setCoupon(e.target.value) } />
		      				<Button>Apply</Button>
		      			</Flex>

		      		</Right>
	      		</Container>
	      </Main>

	      

	      <Footer />
	      </>
		);
}

export default Payment;