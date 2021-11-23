import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import './App.css'
import Aboutus from './Aboutus';
import RestApi from './RestApi';
import table from './components/table';
import card from './components/card';
import FormValidation from './components/FormValidation';
import MaterialUI_MDB from './MaterialUI_MDB'
import MaterialUI_FV from './MaterialUI_FV';
import Aboutus2 from './Aboutus2';
import sample from './sample';
import Functional_LCH from './Functional_LCH';
import styledComponents from './styledComponents'
import card2 from './components/card2'
import TodoContainer from './TodoContainer';

const routing = (
  <Router>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="nav-item active">
              <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>

            </li >
            <li className="nav-item">
              <NavLink to="/aboutus" className="nav-link">Aboutus</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/aboutus3" className="nav-link">Aboutus3</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/aboutus2" className="nav-link">Aboutus2</NavLink>

            </li>

            <li className="nav-item">
              <NavLink to="/restapi" className="nav-link">RestApi</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/table" className="nav-link">Table</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/card" className="nav-link">card</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/formvalidation" className="nav-link">FormValidation</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/materialUIMDB" className="nav-link">MaterialUI_MDB</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/materialUI_FV" className="nav-link">MaterialUI_FV</NavLink>

            </li>
            
            <li className="nav-item">
              <NavLink to="/styledComponents" className="nav-link">StyledComponents</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/card2" className="nav-link">card2</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/class-basedLCH" className="nav-link">Class Based LCH</NavLink>

            </li>
             
            
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/restapi" component={RestApi} />
            <Route path="/table" component={table} />
            <Route path="/card" component={card} />
            <Route path="/formvalidation" component={FormValidation} />
            <Route path="/materialUIMDB" component={MaterialUI_MDB} />
            <Route path="/materialUI_FV" component={MaterialUI_FV} />
            <Route path="/aboutus" component={Aboutus2} />
            <Route path="/sample" component={sample} />
            <Route path="/styledComponents" component={styledComponents} />
            <Route path="/card2" component={card2} />
            <Route path="/class-basedLCH" component={TodoContainer} />
        
          </Switch>
        </div>

      </div>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));



