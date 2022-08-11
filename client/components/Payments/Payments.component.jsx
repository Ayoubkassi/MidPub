

const Payments = () => {
	return(
			<>
				<table className="table" style={{"marginTop":"30px"}}>
		          <thead style={{"padding":"0"}}>
		            <tr style={{"color" : "#8f8f8f" , "height": "10px"}}>
		              <th style={{"width":"17%" , "fontSize":"12px"}} scope="col">Date</th>
		              <th style={{"width":"10%", "fontSize":"12px"}} scope="col">Time</th>
		              <th style={{"width":"10%", "fontSize":"12px"}} scope="col">Order</th>
		              <th style={{"width":"10%", "fontSize":"12px"}} scope="col">Type</th>
		              <th style={{"width":"10%", "fontSize":"12px"}} scope="col">Option</th>
		              <th style={{"width":"15%", "fontSize":"12px" , "textAlign":"center"}} scope="col">Amount (AED)</th>		              
		              <th style={{"width":"14%", "fontSize":"12px", "textAlign":"center"}} scope="col">Work Completion</th>		              
		              <th style={{"width":"14%", "fontSize":"12px", "textAlign":"center"}} scope="col">Payment Status</th>
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0"}}>Type</td>
		              <td style={{"padding":"2px 0"}}>Option</td>
		              <td style={{"padding":"2px 0" ,"textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0"}}>Type</td>
		              <td style={{"padding":"2px 0"}}>Option</td>
		              <td style={{"padding":"2px 0" ,"textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0"}}>Type</td>
		              <td style={{"padding":"2px 0"}}>Option</td>
		              <td style={{"padding":"2px 0" ,"textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Status</td>
		             </tr>
		          </tbody>
		        </table>
			</>
		);
}

export default Payments;