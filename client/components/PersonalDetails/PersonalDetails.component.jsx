import  { Main , Double , Wrap , Label , InputBut , ButContainer , Button} from './PersonalDetails.styles';
import { useState } from 'react';

const PersonalDetails = () => {
	//const sizeWidth = 300;
	const [fullName , setFullName] = useState('');
	const [mobileNumber , setMobileNumber] = useState('');
	const [gender , setGender] = useState('');
	const [dateOfBirth , setDateOfBirth] = useState('');
	const [email , setEmail] = useState('');
	const [designation , setDesignation] = useState('');
	const [city , setCity] = useState('');
	const [ country , setCountry] = useState('');

	return(
			<>
				<Main>
					<Double>
			            <Wrap>
				          <Label>Full Name</Label>
				          <InputBut type="text" value={fullName} onChange={(e) => setFullName(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Mobile Number</Label>
				          <InputBut  type="text" value={mobileNumber} onChange={(e) =>  setMobileNumber(e.target.value) } />
				        </Wrap>
			        </Double>
			        <Double>
			            <Wrap>
				          <Label>Gender</Label>
				          <InputBut  type="text" value={gender} onChange={(e) => setGender(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Date of Birth</Label>
				          <InputBut  type="text" value={dateOfBirth} onChange={(e) =>  setDateOfBirth(e.target.value) } />
				        </Wrap>
			        </Double>
			        <Double>
			            <Wrap>
				          <Label>Email</Label>
				          <InputBut  type="text" value={email} onChange={(e) => setEmail(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Designation</Label>
				          <InputBut type="text" value={designation} onChange={(e) =>  setDesignation(e.target.value) } />
				        </Wrap>
			        </Double>
			        <Double>
			            <Wrap>
				          <Label>City</Label>
				          <InputBut  type="text" value={city} onChange={(e) => setCity(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Country</Label>
				          <InputBut type="text" value={country} onChange={(e) =>  setCountry(e.target.value) } />
				        </Wrap>
			        </Double>
			        <ButContainer>
			          <Button>Save</Button>
			        </ButContainer>
				</Main>
			</>
		);
}

export default PersonalDetails;