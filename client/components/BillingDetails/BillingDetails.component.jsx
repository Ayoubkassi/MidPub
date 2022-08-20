import { Main , Double , Wrap , Label , InputBut , ButContainer , Button } from './BillingDetails.styles';
import { useState } from 'react';

const BillingDetails = () => {

	const sizeWidth = 300;
	const [fullName , setFullName] = useState('');
	const [mobileNumber , setMobileNumber] = useState('');
	const [city , setCity] = useState('');
	const [ country , setCountry] = useState('');
	const [adress , setAdress] = useState('');

	return(
			<>
				<Main>
					<Double>
			            <Wrap>
				          <Label>Full Name</Label>
				          <InputBut width='24vw' type="text" value={fullName} onChange={(e) => setFullName(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Mobile Number</Label>
				          <InputBut width='24vw' type="text" value={mobileNumber} onChange={(e) =>  setMobileNumber(e.target.value) } />
				        </Wrap>
			        </Double>
			         <Wrap>
				          <Label>Adress</Label>
				          <InputBut width='big' type="text" value={adress} onChange={(e) =>  setAdress(e.target.value) } />
				     </Wrap>
			        <Double>
			            <Wrap>
				          <Label>City</Label>
				          <InputBut width='24vw' type="text" value={city} onChange={(e) => setCity(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Country</Label>
				          <InputBut width='24vw' type="text" value={country} onChange={(e) =>  setCountry(e.target.value) } />
				        </Wrap>
			        </Double>
			        <ButContainer>
			          <Button>Save</Button>
			        </ButContainer>
				</Main>
			</>
		);
}

export default BillingDetails;