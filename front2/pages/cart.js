import { Main , Navbar , Items , Logo , Lien  } from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TableContainer , Title , ButContainer , Button } from '../styles/CartPage.styles';
import Image from 'next/image';

const Cart = () => {

  const router = useRouter()

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
	        <Title>Cart</Title>
	        <TableContainer>
	        	<table className="table">
		          <thead>
		            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
		              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Display Ads</th>
		              <th style={{"width":"35%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
		              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px", "textAlign" : "center"}} scope="col">CPM (Min 10x)</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Price</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>		              
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">Khaleej Times</td>
		              <td>Half Page</td>
		              <td style={{"textAlign":"center"}}>10,000</td>
		              <td>AED 1,000.00</td>
		              <td>Remove</td>
		            </tr>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">Forbes</td>
		              <td>Large Rectangle</td>
		              <td style={{"textAlign":"center"}}>20,000</td>
		              <td>AED 2,000.00</td>
		              <td>Remove</td>
		            </tr>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">Al Khaleej</td>
		              <td>Wide Skyscrapper</td>
		              <td style={{"textAlign":"center"}}>50,000</td>
		              <td>AED 5,000.00</td>
		              <td>Remove</td>
		            </tr>
		          </tbody>
		        </table>
	        </TableContainer>


	        <TableContainer>
	        	<table className="table">
		          <thead>
		            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
		              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Social Media</th>
		              <th style={{"width":"35%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
		              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px" , "textAlign" : "center"}} scope="col">Post</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Price</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>		              
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">Forbes</td>
		              <td>Instagram Feed Video</td>
		              <td style={{"textAlign":"center"}}>1</td>
		              <td>AED 7,000.00</td>
		              <td>Remove</td>
		            </tr>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">Forbes</td>
		              <td>Facebook Feed Image</td>
		              <td style={{"textAlign":"center"}}>1</td>
		              <td>AED 7,000.00</td>
		              <td>Remove</td>
		            </tr>
		          </tbody>
		        </table>
	        </TableContainer>


	        <TableContainer>
	        	<table className="table">
		          <thead>
		            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
		              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Advertorials</th>
		              <th style={{"width":"35%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
		              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px" , "textAlign" : "center"}} scope="col">Post</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Price</th>
		              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>		              
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"15px"}}>
		              <td scope="row">The National</td>
		              <td>500 words + 1 picture + 1 Backlink + 1 Video</td>
		              <td style={{"textAlign":"center"}}>500 words</td>
		              <td>AED 7,000.00</td>
		              <td>Remove</td>
		            </tr>
		          </tbody>
		        </table>
	        </TableContainer>


	        <TableContainer>
	        	<table className="table">
	        	  <tbody>
		        	<tr>
		        		<td style={{"width":"15%"}}></td>
		        		<td style={{"width":"40%"}}></td>
		        		<td style={{"width":"10%"}}>Total</td>
		        		<td style={{"width":"20%"}}>AED 27,000.00</td>
		        		<td></td>
		        	</tr>
		          </tbody>

	        	</table>
	        </TableContainer>

	        <ButContainer>
          		<Button>Checkout</Button>
        	</ButContainer>

	      </Main>
      	 <Footer />
      	</>
		);
}

export default Cart;