import { Flex , Element , Double , Wrap , Label , InputBut , ButContainer , Button } from './PdisplayAds.styles';
import { useState } from 'react';

const PdisplayAds = () => {

	const [name , setName] = useState('');
	const [logo , setLogo] = useState('');
	const [pageUrl , setPageUrl] = useState('');
	const [coverageArea , setCoverageArea] = useState('');
	const [dailyPageViews , setDailyPageViews] = useState('');
	return(
			<>
				<Flex>
					<Element>
						<p style={{"fontWeight":"bold", "marginBottom":"5px"}}>Details</p>
						<Double>
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
					          <Label>Coverage Area</Label>
					          <InputBut type="text" value={coverageArea} onChange={(e) =>  setCoverageArea(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Wrap>
					          <Label>Daily Page Views</Label>
					          <InputBut type="text" value={dailyPageViews} onChange={(e) =>  setDailyPageViews(e.target.value) } />
					    </Wrap>
					</Element>
					<Element>
						<p style={{"fontWeight":"bold"}}>Price List</p>
						<table className="table">
				          <thead style={{"padding":"0"}}>
				            <tr style={{"color" : "#8f8f8f" , "height": "7px"}}>
				              <th style={{"width":"50%" , "fontSize":"11px" }} scope="col">Options</th>
				              <th style={{"width":"15%", "fontSize":"11px"}} scope="col">Measure</th>
				              <th style={{"width":"17.5%", "fontSize":"11px"}} scope="col">Price (AED)</th>
				              <th style={{"width":"17.5%", "fontSize":"11px"}} scope="col">Net (AED)</th>
				            </tr>
				          </thead>
				          <tbody>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Billboard (970 x 250 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Large Leaderboard (970 x 90 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Leaderboard (728 x 90 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Half Page (300 x 600 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Wide Skyscrapper (160 x 600 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Skyscrapper (120 x 600 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Large Rectangle (336 x 280 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Medium Rectangle (300 x 250 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Square (250 x 250 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Mile</td>
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

export default PdisplayAds;