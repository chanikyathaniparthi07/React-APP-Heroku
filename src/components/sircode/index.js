import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Aboutus from './Aboutus';

import App from './App';
import FV from './components';
//import RestApi from './Pages/RestApi/RestApi';

const routing = (
  <Router>
    <div className="container nav">
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="nav-item active">
              <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/restapi" className="nav-link">Rest Ap</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fv" className="nav-link">FV</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/fv" component={FV} />
             
             
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));