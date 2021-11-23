import React from "react";
import Navbar from "./Navbar";
import Funds from "./Funds";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import SipCart from "./SipCart";
import SipAmt from "./SipAmt";
import Detail from "./detail";
import Aboutus from "./Aboutus";
import Sip from "./Sip";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var axios = require("axios").default;

export const MyContext = React.createContext(); // Store

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      db: [],
      users: [
        {
          userId: "abc",
          password: "abc123",
        },
        {
          userId: "xyz",
          password: "xyz123",
        },
      ],
      holdings:[],
      filterholdings:[]
    };
  }
  componentDidMount() {
    axios.get("db.json").then((res) => {
      this.setState({ db: res.data });
    });
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
            <Route path="/funds">
              <Funds />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/SipAmt">
              <SipAmt />
            </Route>
            <Route path="/SipCart">
              <SipCart />
            </Route>
            <Route path="/details">
              <Detail />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/sip">
              <Sip />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}
export default App;