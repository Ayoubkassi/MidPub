import { Title , TableContainer } from './ActiveCompaigns.styles';

const ActiveCompaigns = () => {
	return(

			<>
				<Title>You have 6 campaigns pending</Title>
				<TableContainer>
			        <table className="table">
			          <thead>
			            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
			              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Display Ads</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Specs</th>
			              <th style={{"width":"25%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Submit Materials</th>
			              <th style={{"width":"14%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Schedule Date</th>
			              <th style={{"width":"6%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>

			            </tr>
			          </thead>
			          <tbody>
			            <tr style={{"height":"15px"}}>
			              <td>Khaleej Times</td>
			              <td>Half Page</td>
			              <td>300 x 600 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			         	<tr style={{"height":"15px"}}>
			              <td>Forbes</td>
			              <td>Large Rectangle</td>
			              <td>336 x 280 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			            <tr style={{"height":"15px"}}>
			              <td>Al Khaleej</td>
			              <td>Wide Skyscrapper</td>
			              <td>160 x 600 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			          </tbody>
			        </table>
			        </TableContainer>

			        <TableContainer>
			        <table className="table">
			          <thead>
			            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
			              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Social Media</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Specs</th>
			              <th style={{"width":"25%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Submit Materials</th>
			              <th style={{"width":"14%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Schedule Date</th>
			              <th style={{"width":"6%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>

			            </tr>
			          </thead>
			          <tbody>
			            <tr style={{"height":"15px"}}>
			              <td>Forbes</td>
			              <td>Instagram Feed Video</td>
			              <td>1,080 x 1,080 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			         	<tr style={{"height":"15px"}}>
			              <td>Forbes</td>
			              <td>Facebook Feed Image</td>
			              <td>1,080 x 1,080 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			          </tbody>
			        </table>
			        </TableContainer>

			        <TableContainer>
			        <table className="table">
			          <thead>
			            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
			              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Advertorials</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Options</th>
			              <th style={{"width":"20%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Specs</th>
			              <th style={{"width":"25%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Submit Materials</th>
			              <th style={{"width":"14%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Schedule Date</th>
			              <th style={{"width":"6%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Action</th>

			            </tr>
			          </thead>
			          <tbody>
			            <tr style={{"height":"15px"}}>
			              <td>The National</td>
			              <td>Text + 1 Backlink</td>
			              <td>500 words</td>
			              <td>Enter Text (max 500 words)</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			         	<tr style={{"height":"15px"}}>
			              <td>The National</td>
			              <td>1 Picture</td>
			              <td>1280 x 720 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			            <tr style={{"height":"15px"}}>
			              <td>The National</td>
			              <td>1 Video</td>
			              <td>1920 x 1080 px</td>
			              <td>Upload</td>
			              <td>dd/mm/yyyy</td>
			              <td>Submit</td>
			            </tr>
			          </tbody>
			        </table>
			        </TableContainer>


			</>
		);
}

export default ActiveCompaigns;