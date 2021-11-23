import React, { Component } from "react";
import './App.css';
import cricketimg from './images/cricketimg.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
//import Container from "./components/Container";
import RightPanel from "./components/RightPanel";
import User from "./components/User";
class App extends Component{
    render(){
      
          return(
 
            <div className="container">
              {/*Header */}
                <Header/>
 
              {/*Main content */}
              {/*LeftPanel*/}
              <div className="row">
                <LeftPanel/>
                {/*container*/}
               {/*} <Container/> */}
               <div className="col-sm-6">
            <div className="contentCenter">
              <div className="row">
              <User userId="124" userName="jay" userEmail="jay@gmail.com" userAge="20" userMobile="957373" 
              userDescription="jay is wed devloper"/>
              <User userId="134" userName="jhon" userEmail="jhon@gmail.com" userAge="25" userMobile="8798973" 
              userDescription="jhon  is freelancer"/>
              <User userId="144" userName="msd" userEmail="msd@gmail.com" userAge="40" userMobile="977773" 
              userDescription="msd is a crickter"/>
              </div>
              
          
            
                </div>
                </div>

               
    
               {/*RightPanel*/}
               <RightPanel/>
              </div>
              {/*footer*/}
        
                <Footer/>
 
             </div>
        );
    }
}
export default App;
 