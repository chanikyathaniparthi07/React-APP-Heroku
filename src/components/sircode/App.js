import React, { Component } from "react";
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
//import Aboutus from ".components/Aboutus";

/* import Container from "./Components/Container/Container"; */
import User from "./components/User";

class App extends Component {
  // properties under 'App' Component
  state = {
    users: [
      { userId: 1432, userName: "jay", userEmail: "jay@gmail.com", userAge: 33, userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer" }, 
      
      { userId: 753, userName: "john.deo", userEmail: "john@gmail.com", userAge: 22, userMobile: "+(752) 235 7532", userDescription: "john is a developer" }, 

      { userId: 864, userName: "drake", userEmail: "drake@gmail.com", userAge: 62, userMobile: "+(742) 974 3574", userDescription: "drake is a student" }, 
      
      { userId: 652, userName: "paul", userEmail: "paul_jn123@gmail.com", userAge: 23, userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" }
    ], 
    showUsers: false
  }

  // methods under 'App' Component
  changeNames = (id, name , email, age, mobile, description) => {
    // alert("yes, user clicked on changeName");
    this.setState({
      users: [
        { userId: 1432, userName: "rayon", userEmail: "jay@gmail.com", userAge: 33, userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer" }, 
        
        { userId: id, userName: name, userEmail: email, userAge: age, userMobile: mobile, userDescription: description }, 
        
        { userId: 652, userName: "juloy", userEmail: "paul_jn123@gmail.com", userAge: 23, userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      users: [
        { userId: 1432, userName: "jay", userEmail: "jay@gmail.com", userAge: 33, userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer" }, 
        
        { userId: 753, userName: event.target.value, userEmail: "john@gmail.com", userAge: 22, userMobile: "+(752) 235 7532", userDescription: "john is a developer" }, 
        
        { userId: 652, userName: "paul", userEmail: "paul_jn123@gmail.com", userAge: 23, userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" }
      ]
    })
  }


  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({
      showUsers: !doesShow
    })
  }

  deleteUsersHandler = (userIndex) => {
    // fetch all the records
    const users = this.state.users;
    // delete the particular record
    users.splice(userIndex, 1);
    // re-arrange the rest of the records
    this.setState({
      users: users
    });
  }

  render() {
    // declaring the variable with null
    let users = null;

    if(this.state.showUsers === true) {
      users = (<div className="row">
        {this.state.users.map((user, index) => {
          return(<User userId={user.userId} userName={user.userName} userEmail={user.userEmail} userAge={user.userAge} userMobile={user.userMobile} userDescription={user.userDescription} userNameChange={() => this.changeNames(377, 'samuel', 'samuel@yahoo.com', 24, '+(355) 356 7632', 'samuel is executive')} userChangeName={this.changeNameHandler} deleteUserRecord={() => this.deleteUsersHandler(index)} />)
        })}
  </div>);
    } else {
      users = (<div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <p className="text-danger">no users found!</p>
          </div>
        </div>
      </div>
    </div>);
    }

    return(
      <div className="container">
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

                        <button type="button" className="btn btn-success mb-3 mr-3" onClick={this.toggleUsersHandler}> show / hide users </button>

                        <button type="button" className="btn btn-primary mb-3" onClick={this.changeNames.bind(this, 973, 'david', 'david@gmail.com', 25, '+(235) 642 3683', 'david is student')}> change name </button>
                    </div>
                  </div>

                  { /* displaying the users block based on cond., */}
                  {users}
              

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

export default App;