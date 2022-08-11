import { Stats , Item , Final , Left , Right , Calendar , Inside } from './Sales.styles';


const Sales = () => {
	return(
			<>
				<Stats>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Sales</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Profit</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Paid</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Pending</p>
		        			<h4 style={{"fontWeight":"bold"}}>0.00 M</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Customers</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Orders</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Completed</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Live</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Pending</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        		<Item>
		        			<p style={{"color":"#9b9b9b"}}>Total Disputed</p>
		        			<h4 style={{"fontWeight":"bold"}}>0</h4>
		        		</Item>
		        </Stats>

		        <Final>
		        	<Left>
		        		<p>Sales Performance</p>
		        		<table className="table">
				          <thead>
				            <tr>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				              <td>0</td>
				            </tr>
				          </thead>
				            <tr style={{"height":"10px"}}>
				              <td>Jan</td>
				              <td>Feb</td>
				              <td>Mar</td>
				              <td>Apr</td>
				              <td>May</td>
				              <td>Jun</td>
				              <td>Jul</td>
				              <td>Aug</td>
				              <td>Sept</td>
				              <td>Oct</td>
				              <td>Nov</td>
				              <td>Dec</td>
				            </tr>
				        </table>
		        	</Left>
		        	<Right>
		        		<p>Sales by Type</p>
		        		<Calendar>
		        			<Inside></Inside>
		        			<Inside>Jan</Inside>
		        			<Inside>Feb</Inside>
		        			<Inside>Mar</Inside>
		        			<Inside>Apr</Inside>
		        			<Inside>May</Inside>
		        			<Inside>Jun</Inside>
		        			<Inside>Jul</Inside>
		        			<Inside>Aug</Inside>
		        			<Inside>Sep</Inside>
		        			<Inside>Oct</Inside>
		        			<Inside>Nov</Inside>
		        			<Inside>Dec</Inside>
		        			<Inside>Display Ads</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>Social Media</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>Advertorials</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        			<Inside>0</Inside>
		        		</Calendar>
		        	</Right>
		        </Final>
			</>
		);
}

export default Sales;