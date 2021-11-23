import React ,{ Component } from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
class Aboutus extends Component{
  render(){
    return(
      <div className="container">
          
                <Header/>
 
             
              <div className="row">
                <LeftPanel/>
                
               <div className="col-sm-6">
                 <div className="contentCenter">
                   <div className="row">
                     <div className="col-sm-12">
                       <h2> Aboutus</h2>
                       <p>
                       
                           The sport of cricket has a known history beginning in the late 16th century. 
                           Having originated in south-east England, it became the country's national sport 
                           in the 18th century and has developed globally in the 19th and 20th centuries.
                       </p>
                     </div>
                   </div>
                  
            
                </div>
                </div>

               <RightPanel/>
              </div>
          
        
                <Footer/>
 
             </div>
        );
    }
}
    
  


export default Aboutus
