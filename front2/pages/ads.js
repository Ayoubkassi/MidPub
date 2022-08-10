import { Main , Navbar , Items , Logo , Lien  , Title} from '../styles/HomePage.styles';
import Footer from '../components/Footer/Footer.component';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from '../components/Input/Input.component';
import { Double  } from '../styles/AdsPage.styles';
import Image from 'next/image';
import AdsTable from '../components/AdsTable/AdsTable.component';
import AdvertorialTable from '../components/AdvertorialTable/AdvertorialTable.component';
import SocialTable from '../components/SocialTable/SocialTable.component';



const Ads = () => {

  //const [title , setTitle] = useState("Display Ads");
  const sizeWidth = 300;
  const [currentNum,setCurrentNum] = useState(0);

  const data = ["Display Ads","Social Media","Advertorial"]


  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }

  const backWard = () => {
    if(currentNum == 0){
      setCurrentNum(2);
    }
    else{
      setCurrentNum(currentNum--);
      setCurrentNum(currentNum%3);
    }
  }

  const forWard = () => {
    setCurrentNum(currentNum++);
    setCurrentNum(currentNum%3);

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
            <Lien href="/dashboard">Dashboard</Lien>
            <Lien href="/">Logout</Lien>
            <Lien href="/payment">Cart</Lien>
          </Items>
        </Navbar>
        <Title><span style={{"fontSize":"45px","fontWeight":"bold","marginRight":"50px","cursor":"pointer"}} onClick={backWard} >&#60;</span>{data[currentNum]}
        <span style={{"fontSize":"45px","fontWeight":"bold","marginLeft":"50px","cursor":"pointer"}} onClick={forWard}>&#62;</span></Title>
        <Double>
          <Input type="text" placeholder="Select by Name..." width={sizeWidth} />
          <Input type="text" placeholder="Filter" width={sizeWidth} />
        </Double>
        {
          currentNum === 0 ? <AdsTable /> : ( currentNum === 1 ? <AdvertorialTable /> : <SocialTable /> )
        }

        

      </Main>
      <Footer />
    </>
  );
}

export default Ads;
