import React, { Component } from "react";


import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

// material ui
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// theme of material ui
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// use font
import 'typeface-roboto';

// set styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100
  }
}

// use theme
const muiTheme = getMuiTheme({
  pallete: {
    accent1Color: deepOrange500
  }
})


class MaterialUI_FV extends Component {
    constructor(props, context) {
      super(props, context);
      // declaring the state object
      this.state = {
        text: 'Jay is a Film Producer'
      }
    }

    onSubmit = event => {
      // defaultly ignoring the functionality
      event.preventDefault();

      const text = this.refs.sample_text.input.value;

      // update the property
      this.setState({
        text
      });

      alert(`You Entered: ${text}`);
    }
    render() {
        return(
        <div className="container wrapper">
            { /* header */ }
            <Header />

            { /* main container */ }
            <div className="row">
                { /* left panel */}
                <LeftPanel />

                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-6">
                    <div className="contentCenter">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Material UI Form validation </h1>

                                <MuiThemeProvider
                                  muiTheme={muiTheme}
                                >
                                  <div style={styles.container}>
                                    <h3>Form Entry</h3>
                                    <form onSubmit={this.onSubmit}>
                                      <TextField
                                        defaultValue={this.state.text}
                                        ref="sample_text"
                                        floatingLabelText='say something instead of nothing'
                                        />
                                        <br />
                                        <RaisedButton type="submit" label="submit" />
                                    </form>
                                  </div>
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
                <RightPanel />
            </div>

            { /* footer */ }
            <Footer />
        </div>
        );
    }
}

export default MaterialUI_FV;








import React, {Component}from "react";

//material UI
import RaisedButton from 'material-ui/RaisedButton';
import  TextField from 'material-ui/TextField';

//theme of material UI
import { deepOrange } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider';

//use font
//import'typeface-roboto';

//set styles
 const styles={
     container:{
         textAlign:'center',
         paddingTop:200
     }
 }

 //usetheme
 const muiTheme =getMuiTheme({
     pallete:{
         accent1color:deepOrange
     }
 })
 class MaterialUI_FV extends Component{
     constructor(props,context){
         super(props,context);
         this.state={
             text:'Rohit is a crickter'

         }

     }
     onSubmit=event=>{
         //defaultly ignoring the funcftionality
         event.preventDefault();

          const text=this.refs.sample_text.input.value;
          //update the property
          this.setState({
              text
          });

          alert("You entered")
     }
     render(){
         return(
             <div className="container">
                 <div className="row">
                     <div className="col-sm-12">
                         <h2>MaterialUI_Fv</h2>
                         <MuiThemeProvider
                         muiTheme={muiTheme}
                         >
                             <h3> Form Entry</h3>
                             <form onSubmit={this.onSubmit}>


                         <TextField
                         defaultvalue={this.state.text}
                         ref="sample_text"
                         floatingLabelText="say something "
                         />
                         <br/>
                         <RaisedButton type="submit" label="submit"/>
                         
                             
                         </form>
                         </MuiThemeProvider>

                     </div>

                 </div>

             </div>
         )
     }
 }
 export default MaterialUI_FV;
