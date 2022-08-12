import  { ButContainer , Button} from './Emails.styles';


const Emails = () => {
	return(
			<>
				<table className="table" style={{"marginTop":"50px","marginBottom":"40px"}}>
		          <thead style={{"padding":"0"}}>
		            <tr style={{"color" : "#8f8f8f" , "height": "10px"}}>
		              <th style={{"width":"10%" , "fontSize":"12px"}} scope="col">#</th>
		              <th style={{"width":"25%", "fontSize":"12px"}} scope="col">Email</th>
		              <th style={{"width":"50%", "fontSize":"12px"}} scope="col">Text</th>
		              <th style={{"width":"7%", "fontSize":"12px"}} scope="col">Status</th>
		              <th style={{"width":"8%", "fontSize":"12px","textAlign":"center"}} scope="col">Actions</th>
		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>1</td>
		              <td style={{"padding":"2px 0"}}>Double opt-in email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>2</td>
		              <td style={{"padding":"2px 0"}}>Welcome email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>3</td>
		              <td style={{"padding":"2px 0"}}>Password reset email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>4</td>
		              <td style={{"padding":"2px 0"}}>Abandoned cart email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>5</td>
		              <td style={{"padding":"2px 0"}}>Order confirmation email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>6</td>
		              <td style={{"padding":"2px 0"}}>Delivery confirmation email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>7</td>
		              <td style={{"padding":"2px 0"}}>Invoice email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>8</td>
		              <td style={{"padding":"2px 0"}}>Legal update email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>9</td>
		              <td style={{"padding":"2px 0"}}>Order cancellation email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"2px 10px"}}>10</td>
		              <td style={{"padding":"2px 0"}}>Refund confirmation email</td>
		              <td style={{"padding":"2px 0"}}>input</td>
		              <td style={{"padding":"2px 0"}}>Status</td>
		              <td style={{"padding":"2px 0","textAlign":"center"}}>Edit</td>
		             </tr>

		          </tbody>
		        </table>
		        <ButContainer>
			         <Button>Save</Button>
			    </ButContainer>
			</>
		);
}

export default Emails;