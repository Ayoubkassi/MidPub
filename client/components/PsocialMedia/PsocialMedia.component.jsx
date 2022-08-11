import { Flex , Element , Double , Wrap , Label , InputBut , ButContainer , Button } from '../PdisplayAds/PdisplayAds.styles';
import { useState } from 'react';


const PsocialMedia = () => {
	const [name , setName] = useState('');
	const [logo , setLogo] = useState('');
	const [facebookPageUrl , setFacebookPageUrl] = useState('');
	const [metaFollowers , setMetaFollowers] = useState('');
	const [instagramPageURL, setInstagramPageURL] = useState('');
	const [instagramFollowers, setInstagramFollowers] = useState('');

	return(
			<>
				<Flex>
					<Element>
						<p style={{"fontWeight":"bold", "marginBottom":"5px"}}>Details</p>
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
					          <Label>Facebook Page URL</Label>
					          <InputBut type="text" value={facebookPageUrl} onChange={(e) => setFacebookPageUrl(e.target.value) } />
					        </Wrap>
					        <Wrap>
					          <Label>Meta Followers</Label>
					          <InputBut type="text" value={metaFollowers} onChange={(e) =>  setMetaFollowers(e.target.value) } />
					        </Wrap>
				        </Double>
				        <Double>
				        <Wrap>
					          <Label>Instagram Page URL</Label>
					          <InputBut type="text" value={instagramPageURL} onChange={(e) =>  setInstagramPageURL(e.target.value) } />
					    </Wrap>
					    <Wrap>
					          <Label>Instagram Followers</Label>
					          <InputBut type="text" value={instagramFollowers} onChange={(e) =>  setInstagramFollowers(e.target.value) } />
					    </Wrap>
					    </Double>
					</Element>
					<Element>
						<p style={{"fontWeight":"bold"}}>Price List</p>
						<table className="table">
				          <thead style={{"padding":"0"}}>
				            <tr style={{"color" : "#8f8f8f" , "height": "7px"}}>
				              <th style={{"width":"65%" , "fontSize":"11px" }} scope="col">Options</th>
				              <th style={{"width":"15%", "fontSize":"11px"}} scope="col">Measure</th>
				              <th style={{"width":"10%", "fontSize":"11px"}} scope="col">Price (AED)</th>
				              <th style={{"width":"10%", "fontSize":"11px"}} scope="col">Net (AED)</th>
				            </tr>
				          </thead>
				          <tbody>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Meta Feed Image (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Meta Feed Video (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Meta Stories Image (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Meta Stories Video (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Instagram Feed Image (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Instagram Feed Video (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Instagram Stories Image (1,080 x 1,080 px)</td>
				              <td style={{"padding":"2px 0"}}>Per Post</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				              <td style={{"padding":"2px 0"}}>0.00</td>
				            </tr>
				            <tr style={{"height":"4px"}}>
				              <td style={{"padding":"2px 8px"}}>Instagram Stories Video (1,080 x 1,080 px)</td>
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

export default PsocialMedia;