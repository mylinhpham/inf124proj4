import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import coolKicks from "./components/coolKicks.jpeg";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
          <div style={{background: "grey", border :'2px solid black'}}>
          <div class="homePageImg">
              <img src={coolKicks}/>
          </div>
        <nav className="navbar navbar-expand">
          <Link to={"/tutorials"} className="navbar-brand">
            CoolKicks
          </Link>
          <div className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                      Shoes
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                      Add
                  </Link>
              </li>
          </div>
      </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
