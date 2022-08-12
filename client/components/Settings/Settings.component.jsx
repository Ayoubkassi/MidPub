import { Flex , Element } from './Settings.styles';
import { useState } from 'react';
import General from '../General/General.component';
import Monetary from '../Monetary/Monetary.component';
import Pages from '../Pages/Pages.component';
import Emails from '../Emails/Emails.component';

const Settings = () => {
	const [color1 , setColor1] = useState("black");
	const [color2 , setColor2] = useState("white");
	const [color3 , setColor3] = useState("white");
	const [color4 , setColor4] = useState("white");

	const changeOne = () => {
		setColor1("black");
		setColor2("white");
		setColor3("white");
		setColor4("white");
	}

	const changeTwo = () => {
		setColor2("black");
		setColor3("white");
		setColor1("white");
		setColor4("white");
	}

	const changeThree = () => {
		setColor3("black");
		setColor1("white");
		setColor2("white");
		setColor4("white");
	}

	const changeFour = () => {
		setColor3("white");
		setColor1("white");
		setColor2("white");
		setColor4("black");
	}



	return(
			<>
				<Flex>
		        	<Element color={color1} onClick={changeOne} >
		        		<p style={{"marginTop":"15px"}}>General</p>
		        	</Element >

		        	<Element onClick={changeTwo} color={color2} >
		        		<p style={{"marginTop":"15px"}}>Pages</p>
		        	</Element >

		        	<Element onClick={changeThree} color={color3}>
		        		<p style={{"marginTop":"15px"}}>Monetary</p>
		        	</Element >
		        	<Element onClick={changeFour} color={color4}>
		        		<p style={{"marginTop":"15px"}}>Emails</p>
		        	</Element >
		        </Flex>

		        {
		        	color1 == "black" ? <General /> : (
		        	color2 == "black" ? <Pages />  :  (
		        	color3 == "black" ? <Monetary /> :<Emails /> 
		        		)
		        		)	
		        }
			</>
		);
}

export default Settings;