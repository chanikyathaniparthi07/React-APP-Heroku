import React, { Component } from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
//Material UI packages
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

//generating the random number
function rand() {
  return (Math.round(Math.random() * 20) - 10);
}
//creating the functionality
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    //here backTicks are used for consider property value as dynamicaly
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%)`,   //this line is used for creation of simple animation
  }
}
//creating the concept of material ui theme use
const useStyles=makeStyles(theme=>({
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  paper:{
    position:'absolute',
    width:'450px',
    backgroundColor:theme.palette.background.paper,
    boxShadow:theme.shadows[5],
    padding:theme.spacing(2,4,3),

  }
}))
 


  

//function based component
export default function MaterialUI_MDB() {

    //declaring the constants which needs to be initialized
    //useStyles is just a identifier but its acting as a function
    const classes = useStyles();

    //we are using functional based life cycle hooks
    //useState is one of the built in hook /method of functional life cycle hooks
    //it is used for assingnig the values to identifiers
    const [modalStyle] = React.useState(getModalStyle);

    //assigning/initializing the 'false' value defaultly into 'open' const
    //here setOpen is used to update the value of 'open'
    //useState is useful for both property and functionn  at a time like open is a property and setOpen is function
    const [open, setOpen] = React.useState(false);

    //defnition of handle open
    const handleOpen = () => {
      setOpen(true);
    }

    //definition of handle close
    const handleClose = () => {
      setOpen(false);
    }
    return (
      <div className="container">

        <Header />


        <div className="row">
          <LeftPanel />

          <div className="col-sm-6">
            <div className="contentCenter">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className=""> MaterialUI_MDB</h2>

                  <Button variant="contained" color="primary" style={{ display: 'flex', justifyContent: 'right' }} onClick={handleOpen}>open Modal</Button>
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={open}
                    onClose={handleClose}
                  >
                    <div style={modalStyle} className={classes.paper}>
                      User-interface modes are special states in which the same system has somewhat different user interfaces.
                      Each mode may come with different commands, or the same command (or action) can produce different results
                      depending on the mode of system. In other words, in different modes, the same input will have different
                      results.

                    </div>

                    
                  </Modal>
                  <br/>
                  <button type="button" class="btn-close"  aria-label="Close"></button>



                </div>
              </div>


            </div>
          </div>

          <RightPanel />
        </div>


        <Footer />

      </div>

    )
  }



