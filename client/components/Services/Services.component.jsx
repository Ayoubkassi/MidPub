import { Flex , Element } from './Services.styles';
import AdmDisplayAds from '../AdmDisplayAds/AdmDisplayAds.component';
import AdmSocialMedia from '../AdmSocialMedia/AdmSocialMedia.component';
import AdmAdvertorials from '../AdmAdvertorials/AdmAdvertorials.component';
import { useState } from 'react';


const Services = () => {

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

	return (
			<>
				<Flex>
		        	<Element color={color1} onClick={changeOne} >
		        		<p style={{"marginTop":"15px"}}>Display Ads</p>
		        	</Element >

		        	<Element onClick={changeTwo} color={color2} >
		        		<p style={{"marginTop":"15px"}}>Social Media</p>
		        	</Element >

		        	<Element onClick={changeThree} color={color3}>
		        		<p style={{"marginTop":"15px"}}>Advertorials</p>
		        	</Element >
		        </Flex>

		        {
		        	color1 == "black" ? <AdmDisplayAds /> : 
		        	( color2 == "black" ? <AdmSocialMedia /> : <AdmAdvertorials /> )
		        }
			</>
		);
}

export default Services;