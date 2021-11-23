import React, { Component } from "react";


 

// material ui
//import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// theme of material ui
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import './App.css'

// use font
//import 'typeface-roboto';

// set styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop:50
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
        text: 'Rohit is a crickter'
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
          

            { /* main container */ }
            <div className="row">
                { /* left panel */}
              

                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-10">
                    <div className="contentCenter">
                        <div className="">
                            <div className="">
                                <h2 className="center">Material UI Form validation </h2>

                                <MuiThemeProvider
                                  muiTheme={muiTheme}
                                >
                                  <div style={styles.container}>
                                    <h3 className="sample">Form Entry</h3>
                                    <br/>
                                    <form onSubmit={this.onSubmit}>
                                      <TextField
                                        defaultValue={this.state.text}
                                        ref="sample_text"
                                        floatingLabelText='say something '
                                        />
                                        <br />
                                        <Button type="submit" label="submit" color="primary"  >submit</Button>
                                    </form>
                                  </div>
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
          
            </div>

            { /* footer */ }
      
        </div>
        );
    }
}

export default MaterialUI_FV;
