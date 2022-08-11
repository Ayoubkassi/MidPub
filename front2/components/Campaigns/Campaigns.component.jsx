

const Campaigns = () => {
	return(
			<>
				<table className="table" style={{"marginTop":"10px"}}>
		          <thead>
		            <tr style={{"color" : "#8f8f8f" , "height": "10px"}}>
		              <th style={{"width":"15%" , "fontSize":"12px" , "paddingBottom" : "30px"}} scope="col">Date</th>
		              <th style={{"width":"10%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Time</th>
		              <th style={{"width":"10%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Order</th>
		              <th style={{"width":"8%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Type</th>
		              <th style={{"width":"8%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Option</th>
		              <th style={{"width":"15%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Scheduled Date</th>		              
		              <th style={{"width":"10%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Artwork</th>		              
		              <th style={{"width":"10%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Report</th>
		              <th style={{"width":"14%", "fontSize":"12px", "paddingBottom" : "30px"}} scope="col">Work Completion</th>
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"10px"}}>
		              <td scope="row">dd/mm/yyyy</td>
		              <td>hh:mm</td>
		              <td>Order</td>
		              <td>Type</td>
		              <td>Option</td>
		              <td>dd/mm/yyyy</td>
		              <td>Download</td>
		              <td>Upload</td>
		              <td>Status</td>
		            </tr>
		             <tr style={{"height":"10px"}}>
		              <td scope="row">dd/mm/yyyy</td>
		              <td>hh:mm</td>
		              <td>Order</td>
		              <td>Type</td>
		              <td>Option</td>
		              <td>dd/mm/yyyy</td>
		              <td>Download</td>
		              <td>Upload</td>
		              <td>Status</td>
		            </tr>
		             <tr style={{"height":"10px"}}>
		              <td scope="row">dd/mm/yyyy</td>
		              <td>hh:mm</td>
		              <td>Order</td>
		              <td>Type</td>
		              <td>Option</td>
		              <td>dd/mm/yyyy</td>
		              <td>Download</td>
		              <td>Upload</td>
		              <td>Status</td>
		            </tr>
		          </tbody>
		        </table>
			</>
		);
}

export default Campaigns;