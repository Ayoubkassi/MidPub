import {  TableContainer } from './SocialTable.styles';
import Image from 'next/image';


const SocialTable = () => {
	return(
		<TableContainer>
        <table className="table">
          <thead>
            <tr style={{"color" : "#8f8f8f" , "height": "60px"}}>
              <th style={{"width":"12%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Type</th>
              <th style={{"width":"11%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Meta Feed Image</th>
              <th style={{"width":"11%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Meta Feed Video</th>
              <th style={{"width":"11%", "fontSize":"13px", "paddingBottom" : "30px"}} scope="col">Meta Story Image</th>
              <th style={{"width":"11%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Meta Story Video</th>
              <th style={{"width":"11%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Instagram Feed Image</th>
              <th style={{"width":"11%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Instagram Feed Video</th>
              <th style={{"width":"11%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Instagram Story Image</th>
              <th style={{"width":"11%" , "fontSize":"13px" , "paddingBottom" : "30px"}} scope="col">Instagram Story Video</th>

            </tr>
          </thead>
          <tbody>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://seekvectorlogo.net/wp-content/uploads/2019/04/khaleej-times-vector-logo.png" /></th>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://cdn.worldvectorlogo.com/logos/national-1.svg" /></th>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="65%" src="https://www.anagog.com/wp-content/uploads/2020/11/Forbes-Logo-copy-300x167.png" /></th>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>

            </tr>
            <tr style={{"height":"70px"}}>
              <th scope="row"><Image width="80%" height="50%" src="https://sadaalmawakea.com/content/uploads/2019/03/05/4fe4c0bc94.png" /></th>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 5,000<p style={{"color" : "rgb(131 133 133)" , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
              <td>AED 7,000<p style={{"color" : "rgb(131 133 133)"  , "fontSize":"14px"}}>per post</p></td>
            </tr>
          </tbody>
        </table>
        </TableContainer>
		);
}

export default SocialTable;