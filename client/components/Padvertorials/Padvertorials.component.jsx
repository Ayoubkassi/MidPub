import { Flex , Element , Double , Wrap , Label , InputBut , ButContainer , Button } from '../PdisplayAds/PdisplayAds.styles';
import { useState } from 'react';


const Padvertorials = () => {
	const [name , setName] = useState('');
	const [logo , setLogo] = useState('');
	const [pageUrl , setPageUrl] = useState('');
	const [dailyReadership , setDailyReadership] = useState('');

	return(
			<>
				<Flex>
					<Element>
						<p style={{"fontWeight":"bold"}}>Details</p>
						<Double style={{"marginTop":"25px"}}>
				            <Wrap>
					          <Label>Name</Label>
					          <InputBut type="text" value={name} onChange={(e) => setName(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Logo</Label>
					          <InputBut type="text" value={logo} onChange={(e) =>  setLogo(e.target.value) } />
					        </Wrap>
				        </Double>

				        <Double>
				            <Wrap>
					          <Label>Page URL</Label>
					          <InputBut type="text" value={pageUrl} onChange={(e) => setPageUrl(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Daily Readership</Label>
					          <InputBut type="text" value={dailyReadership} onChange={(e) =>  setDailyReadership(e.target.value) } />
					        </Wrap>
				        </Double>
					</Element>
					<Element>
						<p style={{"fontWeight":"bold"}}>Price List</p>
						<table className="table">
				          <thead style={{"padding":"0"}}>
				            <tr style={{"color" : "#8f8f8f" , "height": "7px"}}>
				              <th style={{"width":"63%" , "fontSize":"11px" }} scope="col">Options</th>
				              <th style={{"width":"11%", "fontSize":"11px"}} scope="col">Measure</th>
				              <th style={{"width":"13%", "fontSize":"11px"}} scope="col">Price (AED)</th>
				              <th style={{"width":"13%", "fontSize":"11px"}} scope="col">Net (AED)</th>
				            </tr>
				          </thead>
				          <tbody>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>(500 words + 1 Image)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>(500 words + 1 Image + 1 Backlink)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>(500 words + 1 Image + 1 Backlink + 1 Video)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				          </tbody>
				        </table>
					</Element>
				</Flex>
				<ButContainer>
			          <Button>Save</Button>
			    </ButContainer>
			</>
		);
}

export default Padvertorials;