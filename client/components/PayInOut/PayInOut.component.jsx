

const PayInOut = () => {
	return(
			<>
				<table className="table" style={{"marginTop":"50px","marginBottom":"40px"}}>
		          <thead style={{"padding":"0"}}>
		            <tr style={{"color" : "#8f8f8f" , "height": "10px"}}>
		              <th style={{"width":"12%" , "fontSize":"12px"}} scope="col">Date</th>
		              <th style={{"width":"9%", "fontSize":"12px"}} scope="col">Time</th>
		              <th style={{"width":"9%", "fontSize":"12px"}} scope="col">Order</th>
		              <th style={{"width":"13%", "fontSize":"12px"}} scope="col">Order Amount (AED)</th>
		              <th style={{"width":"7%", "fontSize":"12px", "textAlign":"center" }} scope="col">Type</th>		              
		              <th style={{"width":"7%", "fontSize":"12px", "textAlign":"center"}} scope="col">Option</th>		              
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Amount (AED)</th>
		              <th style={{"width":"15%", "fontSize":"12px", "textAlign":"center"}} scope="col">Work Completion</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Amount to pay</th>
		              <th style={{"width":"7%", "fontSize":"12px", "textAlign":"center"}} scope="col">Pay out</th>
		              <th style={{"width":"7%", "fontSize":"12px", "textAlign":"center"}} scope="col">Actions</th>

		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Type</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Option</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Pay</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Type</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Option</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Pay</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 0"}}>dd/mm/yyyy</td>
		              <td style={{"padding":"2px 0"}}>hh:mm</td>
		              <td style={{"padding":"2px 0"}}>Order #</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Type</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Option</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>0.00</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Status</td>
		              <td style={{"padding":"2px 0" , "textAlign":"center"}}>Pay</td>
		             </tr>
		          </tbody>
		        </table>
			</>
		);
}

export default PayInOut;