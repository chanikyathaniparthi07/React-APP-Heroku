
import React ,{Component} from "react";
class table extends Component{
    render(){
      
        return(
      
        <table class="table table-striped">
        
        <thead>
          <tr>
            <th >s.no</th>
            <th scope="">First</th>
            <th scope="">Last</th>
            <th scope="">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>chanikya</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            

          </tr>
          <tr>
            <th scope="row">4</th>
            <td colspan="1">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            

          </tr>
          
        </tbody>
        
      </table>)
      
      
        }
      }
      export default table;
      
        
        
         
    
  
