import { Element , Double , Wrap , Label , ButContainer , Button } from '../PdisplayAds/PdisplayAds.styles';
import { useState } from 'react';
import { InputBut , Flex } from './Company.styles'


const Company = () => {

	const [companyName, setCompanyName] = useState('');
	const [logo , setLogo] = useState('');
	const [country , setCountry] = useState('');
	const [city , setCity] = useState('');
	const [adress , setAddress] = useState('');
	const [phoneNumber , setPhoneNumber] = useState('');
	const [emailAddress , setEmailAddress] = useState('');
	const [website , setWebsite] = useState('');
	const [tradeLicense , setTradeLicense] = useState('');
	const [file1 , setFile1] = useState('');
	const [taxRegistrationNumber , setTaxRegistrationNumber] = useState('');
	const [file2 , setFile2] = useState('');
	const [bankAccountName , setBankAccountName] = useState('');
	const [bankAccountNumber , setBankAccountNumber] = useState('');
	const [iban , setIban] = useState('');
	const [currency , setCurrency] = useState('');
	const [bankName , setBankName] = useState('');
	const [branch , setBranch] = useState('');
	const [bankAdress , setBankAdress] = useState('');
	const [swiftCode , setSwiftCode] = useState('');

	return(
			<>
				<Flex>
					<Element>
						<p style={{"fontWeight":"bold"}}>Company Information</p>
						<Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Company Name</Label>
					          <InputBut type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Logo</Label>
					          <InputBut type="text" value={logo} onChange={(e) =>  setLogo(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Country</Label>
					          <InputBut type="text" value={country} onChange={(e) => setCountry(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>City</Label>
					          <InputBut type="text" value={city} onChange={(e) =>  setCity(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Address</Label>
					          <InputBut type="text" value={adress} onChange={(e) => setAddress(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Phone Number</Label>
					          <InputBut type="text" value={phoneNumber} onChange={(e) =>  setCity(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Email Address</Label>
					          <InputBut type="text" value={emailAddress} onChange={(e) => setEmailAdress(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>website</Label>
					          <InputBut type="text" value={website} onChange={(e) =>  setWebsite(e.target.value) } />
					        </Wrap>
				        </Double>
				        <p style={{"fontWeight":"bold" , "margin" : "10px 0"}}>Company Legal Documents</p>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Trade License</Label>
					          <InputBut type="text" value={tradeLicense} onChange={(e) => setTradeLicense(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>File</Label>
					          <InputBut type="text" value={file1} onChange={(e) =>  setFile1(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Tax Registration Number</Label>
					          <InputBut type="text" value={taxRegistrationNumber} onChange={(e) => setTaxRegistrationNumber(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>File</Label>
					          <InputBut type="text" value={file2} onChange={(e) =>  setFile2(e.target.value) } />
					        </Wrap>
				        </Double>

					</Element>
					<Element>
						
						<p style={{"fontWeight":"bold"}}>Company Bank Details</p>

						<Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Bank Account Name</Label>
					          <InputBut type="text" value={bankAccountName} onChange={(e) => setBankAccountName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Bank Account Number</Label>
					          <InputBut type="text" value={bankAccountNumber} onChange={(e) =>  setBankAccountNumber(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>IBAN</Label>
					          <InputBut type="text" value={iban} onChange={(e) => setIban(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Currency</Label>
					          <InputBut type="text" value={currency} onChange={(e) =>  setCurrency(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Bank Name</Label>
					          <InputBut type="text" value={bankName} onChange={(e) => setBankName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Branch</Label>
					          <InputBut type="text" value={branch} onChange={(e) =>  setBranch(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Address</Label>
					          <InputBut type="text" value={bankAdress} onChange={(e) => setBankAdress(se.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Swift Code</Label>
					          <InputBut type="text" value={swiftCode} onChange={(e) =>  setSwiftCode(e.target.value) } />
					        </Wrap>
				        </Double>
						
					</Element>
				</Flex>
				<ButContainer>
			          <Button>Save</Button>
			    </ButContainer>
			</>
		);
}

export default Company;