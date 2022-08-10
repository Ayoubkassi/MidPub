import { TableContainer } from './PurchaseHistory.styles';

const PurchaseHistory = () => {
	return(
			<>
				<TableContainer>
			        <table className="table">
			          <thead>
			            <tr style={{"color" : "#8f8f8f" , "height": "15px"}}>
			              <th style={{"width":"15%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Date</th>
			              <th style={{"width":"15%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Time</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Order</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Type</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Option</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Amount (AED)</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Artwork</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Report</th>
			              <th style={{"width":"10%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Receipt</th>
			            </tr>
			          </thead>
			          <tbody>
			            <tr style={{"height":"15px"}}>
			              <td>dd/mm/yyyy</td>
			              <td>hh:mm</td>
			              <td>Order #</td>
			              <td>Type</td>
			              <td>Option</td>
			              <td>0.00</td>
			              <td>Download</td>
			              <td>Download</td>
			              <td>Download</td>
			            </tr>
			         	<tr style={{"height":"15px"}}>
			              <td>dd/mm/yyyy</td>
			              <td>hh:mm</td>
			              <td>Order #</td>
			              <td>Type</td>
			              <td>Option</td>
			              <td>0.00</td>
			              <td>Download</td>
			              <td>Download</td>
			              <td>Download</td>
			            </tr>
			            <tr style={{"height":"15px"}}>
			              <td>dd/mm/yyyy</td>
			              <td>hh:mm</td>
			              <td>Order #</td>
			              <td>Type</td>
			              <td>Option</td>
			              <td>0.00</td>
			              <td>Download</td>
			              <td>Download</td>
			              <td>Download</td>
			            </tr>
			          </tbody>
			        </table>
			   </TableContainer>
			</>
		);
}

export default PurchaseHistory;