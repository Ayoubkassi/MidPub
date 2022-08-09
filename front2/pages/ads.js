import { Main , Navbar , Items , Logo , Lien  , Title} from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from '../components/Input/Input.component';
import { Double , TableContainer } from '../styles/AdsPage.styles';
import Image from 'next/image';



const Ads = () => {

  const [title , setTitle] = useState("Display Ads");
  const sizeWidth = 300;


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
            <Lien href="/">EN</Lien>
            <Lien href="/">Dashboard</Lien>
            <Lien href="/">Logout</Lien>
            <Lien href="/">Cart</Lien>
          </Items>
        </Navbar>
        <Title>{title}</Title>
        <Double>
          <Input type="text" placeholder="Select by Name..." width={sizeWidth} />
          <Input type="text" placeholder="Filter" width={sizeWidth} />
        </Double>

        <TableContainer>
        <table className="table">
          <thead>
            <tr style={{"color" : "#8f8f8f" , "height": "60px"}}>
              <th style={{"width":"10%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Type</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Billboard</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Large Leaderboard</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Leaderboard</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Half Page</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Wide Skyscrapper</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Sky scrapper</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Large Rectangle</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Medium Rectangle</th>
              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Square</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://seekvectorlogo.net/wp-content/uploads/2019/04/khaleej-times-vector-logo.png" /></th>
              <td>AED 700<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 400<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 200<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 50 <p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://cdn.worldvectorlogo.com/logos/national-1.svg" /></th>
              <td>AED 700<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 400<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 200<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 50 <p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://www.anagog.com/wp-content/uploads/2020/11/Forbes-Logo-copy-300x167.png" /></th>
              <td>AED 700<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 400<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 200<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 50 <p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="50%" src="https://sadaalmawakea.com/content/uploads/2019/03/05/4fe4c0bc94.png" /></th>
              <td>AED 700<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 400<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 300<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 200<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 100<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
              <td>AED 50 <p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per mile</p></td>
            </tr>
          </tbody>
        </table>
        </TableContainer>

      </Main>
    </>
  );
}

export default Ads;
