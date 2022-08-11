import { useState } from 'react'; 
import { Flex , Element } from './PriceList.styles';
import PdisplayAds from '../PdisplayAds/PdisplayAds.component';
import PsocialMedia from '../PsocialMedia/PsocialMedia.component';
import Padvertorials from '../Padvertorials/Padvertorials.component';


const PriceList = () => {

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
		        	color1 == "black" ? <PdisplayAds /> : 
		        	( color2 == "black" ? <PsocialMedia /> : <Padvertorials /> )
		        }
			</>
		);
}

export default PriceList;