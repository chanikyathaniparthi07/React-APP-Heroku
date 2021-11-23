import React ,{ Component } from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
class RestApi extends Component{
  constructor(props){
    super(props);
    //previous we write directly state object under class..but now state is under constructor so use this.state\\
    this.state={
      photos:[]
    }
    //here y square bracket is used
    this.headers=[
      {key:"albumId",label:"AlbumId"},
      {key:"id",label:"ID"},
      {key:"title",label:"Title"},
      {key:"url",label:"Url"},
      {key:"thumbnailUrl",label:"Thumbnail Photo"},

    ]
  }
  //to fetch the data from given restapi
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then(response =>{
      return response.json()
    }).then(result=>{
      this.setState({
        photos:result
      })
    })
  }
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
                       <h2> RestApi</h2>
                       <table className="table table-bordered">
                         <tr>
                           {this.headers.map(function(hdr){
                             return(
                               <th>{hdr.label}</th>
                             )
                           }
                           )}
                         </tr>
                       </table>
                       
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
    
  


export default RestApi



import React ,{ Component } from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
class RestApi extends Component{
  constructor(props){
    super(props);
    //previous we write directly state object under class..but now state is under constructor so use this.state\\
    this.state={
      photos:[]
    }
    //here y square bracket is used
    this.headers=[
      {key:"albumId",label:"AlbumId"},
      {key:"id",label:"ID"},
      {key:"title",label:"Title"},
      {key:"url",label:"Url"},
      {key:"thumbnailUrl",label:"Thumbnail Photo"},

    ]
  }
  //to fetch the data from given restapi
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then(response =>{
      return response.json()
    }).then(result=>{
      this.setState({
        photos:result
      })
    })
  }
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
                       <h2> RestApi</h2>
                       <table className="table table-striped">
                         <tr>
                           {this.headers.map(function(hdr){
                             return(
                               <th>{hdr.label}</th>
                             )
                           }
                           )}
                         </tr>
                         {this.state.photos.map(function(item,index){
                         return(
                             <tr>
                                 <td> {item.albumId}</td>
                                 <td> {item.id}</td>
                                 <td> {item.title}</td>
                                 <td> {item.url}</td>
                                 <td> {item.thumbnailUrl}</td>
                             </tr>
                         )
                         })}
                       </table>
                       
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
    
  


export default RestApi

