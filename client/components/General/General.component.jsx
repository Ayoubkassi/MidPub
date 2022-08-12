import { Element , Double , Wrap , Label , ButContainer , Button } from '../PdisplayAds/PdisplayAds.styles';
import { useState } from 'react';
import { Flex , InputBut , InputBut2} from './General.styles';

const General = () => {

	const [brandName, setBrandName] = useState('');
	const [themeColor, setThemeColor] = useState('');
	const [whiteLogo, setWhiteLogo] = useState('');
	const [blackLogo, setBlackLogo] = useState('');
	const [adress, setAdress] = useState('');
	const [poBox, setPoBox] = useState('');
	const [city, setCity] = useState('');
	const [country , setCountry] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [coAdress, setCoAdress] = useState('');
	const [websiteUrl, setWebsiteUrl] = useState('');
	const [registredName, setRegistredName] = useState('');
	const [tradeLicenseNumber, setTradeLicenseNumber] = useState('');
	const [file1, setFile1] = useState('');
	const [tax, setTax] = useState('');
	const [taxRegistrationNumber, setTaxRegistrationNumber] = useState('');
	const [file2, setFile2] = useState('');

	return(
			<>
				<Flex>
					<Element>
						<p style={{"fontWeight":"bold"}}>Brand Guidelines</p>
						<Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Brand Name</Label>
					          <InputBut type="text" value={brandName} onChange={(e) => setBrandName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Theme Color</Label>
					          <InputBut type="text" value={themeColor} onChange={(e) =>  setThemeColor(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Logo (White)</Label>
					          <InputBut type="text" value={whiteLogo} onChange={(e) => setWhiteLogo(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Logo (Black)</Label>
					          <InputBut type="text" value={blackLogo} onChange={(e) =>  setBlackLogo(e.target.value) } />
					        </Wrap>
				        </Double>
				        <p style={{"fontWeight":"bold","marginTop":"40px"}}>Brand Guidelines</p>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Address</Label>
					          <InputBut type="text" value={adress} onChange={(e) => setAddress(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>P.O. Box</Label>
					          <InputBut type="text" value={poBox} onChange={(e) =>  setPoBox(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>City</Label>
					          <InputBut type="text" value={city} onChange={(e) => setCity(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Country</Label>
					          <InputBut type="text" value={country} onChange={(e) =>  setCountry(e.target.value) } />
					        </Wrap>
				        </Double>
					</Element>

					<Element>
						
						<p style={{"fontWeight":"bold"}}>Communication Details</p>

						<Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Phone Number</Label>
					          <InputBut type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Email Address</Label>
					          <InputBut type="text" value={emailAddress} onChange={(e) =>  setEmailAdress(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Address</Label>
					          <InputBut type="text" value={coAdress} onChange={(e) => setCoAddress(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Website URL</Label>
					          <InputBut type="text" value={websiteUrl} onChange={(e) =>  setWebsiteUrl(e.target.value) } />
					        </Wrap>
				        </Double>

				        <p style={{"fontWeight":"bold","marginTop":"40px"}}>Legal Details</p>

				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Registred Name</Label>
					          <InputBut2 type="text" value={registredName} onChange={(e) => setRegistredName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Trade License Number</Label>
					          <InputBut2 type="text" value={tradeLicenseNumber} onChange={(e) =>  setTradeLicenseNumber(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>File</Label>
					          <InputBut2 type="text" value={file1} onChange={(e) =>  setFile1(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Tax Registration Number</Label>
					          <InputBut2 type="text" value={taxRegistrationNumber} onChange={(e) => setTaxRegistrationNumber(se.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Tax %</Label>
					          <InputBut2 type="text" value={tax} onChange={(e) =>  setTax(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>File</Label>
					          <InputBut2 type="text" value={file2} onChange={(e) =>  setFile2(e.target.value) } />
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

export default General;