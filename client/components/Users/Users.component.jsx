

const Users = () => {
	return(
			<>
			<table className="table" style={{"marginTop":"50px","marginBottom":"40px"}}>
		          <thead style={{"padding":"0"}}>
		            <tr style={{"color" : "#8f8f8f" , "height": "10px"}}>
		              <th style={{"width":"5%" , "fontSize":"12px"}} scope="col">#</th>
		              <th style={{"width":"15%", "fontSize":"12px"}} scope="col">Acoount</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center" }} scope="col">Sales</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center" }} scope="col">Services</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center" }} scope="col">Pay in/out</th>		              
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Vendors</th>		              
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Users</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Settings</th>
		              <th style={{"width":"10%", "fontSize":"12px", "textAlign":"center"}} scope="col">Action</th>

		            </tr>
		          </thead>
		          <tbody>
		            <tr style={{"height":"10px"}}>
		              <td style={{"padding":"12px 10px"}}>1</td>
		              <td style={{"padding":"12px 0"}}>username</td>
		              <td style={{"padding":"12px 0", "textAlign":"center" }}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0" , "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Disable<br/>Delete</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"12px 10px"}}>2</td>
		              <td style={{"padding":"12px 0"}}>username</td>
		              <td style={{"padding":"12px 0", "textAlign":"center" }}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0" , "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Disable<br/>Delete</td>
		             </tr>
		             <tr style={{"height":"10px"}}>
		              <td style={{"padding":"12px 10px"}}>3</td>
		              <td style={{"padding":"12px 0"}}>username</td>
		              <td style={{"padding":"12px 0", "textAlign":"center" }}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0", "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"12px 0" , "textAlign":"center"}}>Yes | No</td>
		              <td style={{"padding":"2px 0", "textAlign":"center"}}>Disable<br/>Delete</td>
		             </tr>
		          </tbody>
		        </table>
			</>
		);
}

export default Users;