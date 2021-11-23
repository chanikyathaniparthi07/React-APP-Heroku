import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
var axios = require("axios").default;
export const MyContext = React.createContext(); // Store
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      db: {},
    };
  }
  componentDidMount() {
    axios.get("db.json").then((res) => {
      this.setState({ db: res.data });
      console.log(this.state);
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
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}
export default App;