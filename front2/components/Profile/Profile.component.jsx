import { useState } from 'react'; 
import { Flex , Element } from './Profile.styles';
import PersonalDetails from '../PersonalDetails/PersonalDetails.component';
import BillingDetails from '../BillingDetails/BillingDetails.component';
import Security from '../Security/Security.component';

const Profile = () => {

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
				<Flex>
		        	<Element color={color1} onClick={changeOne} >
		        		<p style={{"marginTop":"15px"}}>Personal Details</p>
		        	</Element >

		        	<Element onClick={changeTwo} color={color2} >
		        		<p style={{"marginTop":"15px"}}>Billing Details</p>
		        	</Element >

		        	<Element onClick={changeThree} color={color3}>
		        		<p style={{"marginTop":"15px"}}>Sign in & Security</p>
		        	</Element >
		        </Flex>

		        {
		        	color1 == "black" ? <PersonalDetails /> : 
		        	( color2 == "black" ? <BillingDetails /> : <Security /> )
		        }
			</>
		);
}

export default Profile;