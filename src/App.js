import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
//import Container from "./components/Container";
import RightPanel from "./components/RightPanel";
import User from "./components/User";

class App extends Component {
  state = {
    //property
    users: [

      { userId: 143, userName: "davidmalan", userEmail: "jay@gmail.com", userAge: 23, userMobile: 97576467, userDescription: "jay is boxer" },
      { userId: 143, userName: "cook", userEmail: "jay@gmail.com", userAge: 23, userMobile: 97576467, userDescription: "jay is boxer" },

      { userId: 123, userName: "roy", userEmail: "roy@gmail.com", userAge: 25, userMobile: 76876467, userDescription: "jay is cricketer" },

      { userId: 173, userName: "buttler", userEmail: "root@gmail.com", userAge: 26, userMobile: 989467, userDescription: "buttler isa good batter" }

    ],
    //property
    showUsers: false

  }
  //method
  changeName = (id, name, mail, age, mobile, description) => {
    this.setState({
      users: [

        { userId: 143, userName: "saj", userEmail: "saj@gmail.com", userAge: 23, userMobile: 97576467, userDescription: "saj is photographer" },

        { userId: 123, userName: "kall", userEmail: "kal@gmail.com", userAge: 25, userMobile: 76876467, userDescription: "kal is programmer" },

        { userId: id, userName: name, userEmail: name, userAge: age, userMobile: mobile, userDescription: description }

      ]
    }

    )
  }
  //method
  userNameHandler = (event) => {
    this.setState({
      users: [

        { userId: 143, userName: "davidmalan", userEmail: "jay@gmail.com", userAge: 23, userMobile: 97576467, userDescription: "jay is boxer" },

        { userId: 123, userName: event.target.value, userEmail: "kal@gmail.com", userAge: 25, userMobile: 76876467, userDescription: "kal is programmer" },

        { userId: 173, userName: "buttler", userEmail: "root@gmail.com", userAge: 26, userMobile: 989467, userDescription: "buttler isa good batter" }

      ]


    })
  }
  //methodd
  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers
    this.setState({
      showUsers: !doesShow
    })
  }
  deleteUserHandler = (userIndex) => {
    //fetch all records
    const users = this.state.users;
    //delete particular record
    users.splice(userIndex, 1);
    //re-arrange the rest of the records
    this.setState({
      users: users
    })
  }
  render() {
    //declaring the Vairiablee with null value
    let users = null;
    if (this.state.showUsers === true) {
      users = (<div className="row">
        {this.state.users.map((user, index) => {
          return (<User userId={user.userId} userName={user.userName}
            userEmail={user.userEmail} userAge={user.userAge} userMobile={user.userMobile}
            userDescription={user.userDescription} nameChange={this.userNameHandler} deleteUserRecord={() => this.deleteUserHandler(index)} />)
        })}

        {/*Here we r using map function so no need of all data}
              {/*<User userId={this.state.users[0].userId} userName={this.state.users[0].userName} 
              userEmail={this.state.users[0].userEmail} userAge={this.state.users[0].userAge}userMobile={this.state.users[0].userMobile} 
              userDescription={this.state.users[0].userDescription}/>

              <User userId={this.state.users[1].userId} userName={this.state.users[1].userName}
               userEmail={this.state.users[1].userEmail} userAge={this.state.users[1].userAge} userMobile={this.state.users[1].userMobile} 
              userDescription={this.state.users[1].userDescription } nameChange={this.userNameHandler} />

              <User userId={this.state.users[2].userId} userName={this.state.users[2].userName} 
              userEmail={this.state.users[2].userEmail} userAge={this.state.users[2].userAge} userMobile={this.state.users[2].userMobile} 
              userDescription={this.state.users[2].userDescription}/>*/}

      </div>);

    } else {
      users = (<div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <p className="text-danger"> No users found</p>
            </div>
          </div>
        </div>
      </div>);

    }

    return (

      <div className="container-fluid">
        {/*Header */}
        <Header />

        {/*Main content */}
        {/*LeftPanel*/}
        <div className="row">
          <LeftPanel />
          {/*container*/}
          {/*} <Container/> */}
          <div className="col-sm-6">
            <div className="contentCenter">
              <div className="">
                <button type="button" className="btn btn-success mb-3 mr-3 " onClick={this.toggleUsersHandler}>Show/Hide users</button>
                <button type="button" className="btn btn-primary mb-3 mt-10" onClick={this.changeName.bind(this, 25, "chanikya", "chanikya@gmail.com", 22, 918285, "student")}> change name </button>
              </div>

              {users}


              {/*here all the data is shifted from retun statement to render and we called that in return by "users"}
             {/* {this.state.showUsers===true?<div className="row">
              <User userId={this.state.users[0].userId} userName={this.state.users[0].userName} 
              userEmail={this.state.users[0].userEmail} userAge={this.state.users[0].userAge}userMobile={this.state.users[0].userMobile} 
              userDescription={this.state.users[0].userDescription}/>

              <User userId={this.state.users[1].userId} userName={this.state.users[1].userName}
               userEmail={this.state.users[1].userEmail} userAge={this.state.users[1].userAge} userMobile={this.state.users[1].userMobile} 
              userDescription={this.state.users[1].userDescription } nameChange={this.userNameHandler} />

              <User userId={this.state.users[2].userId} userName={this.state.users[2].userName} 
              userEmail={this.state.users[2].userEmail} userAge={this.state.users[2].userAge} userMobile={this.state.users[2].userMobile} 
              userDescription={this.state.users[2].userDescription} />
              </div>:<div className="row">
             <div className="col-sm-12">
               <div className="card">
                 <div className="card-body">
                   <p className="text-danger"> No users found</p>
                 </div>
                  </div>
                  </div>
                 </div>}*/}




            </div>
          </div>



          {/*RightPanel*/}
          <RightPanel />
        </div>
        {/*footer*/}

        <Footer />

      </div>
    );
  }
}
export default App;
