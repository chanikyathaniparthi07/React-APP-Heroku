import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const MyContext = React.createContext(); // Store

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: "jaydeep",
          password: "jaydeep123",
        
        },
        {
          userId: "ambika",
          password: "ambika123",
        },
      ],
    };
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          store: this.state,
        }}
      >
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;