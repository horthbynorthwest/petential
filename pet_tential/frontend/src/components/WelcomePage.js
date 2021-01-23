import React, { Component } from "react";
import CreatePackPage from "./CreatePackPage";
import JoinPackPage from "./JoinPackPage";
import Pack from "./Pack";
import HomePage from "./HomePage";
import FoodPage from "./FoodPage";
import WalkPage from "./WalkPage";
import BehaviourPage from "./BehaviourPage";
import ToiletPage from "./ToiletPage";
import MedicalPage from "./MedicalPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

export default class WelcomPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <Router>
          <Switch>
            <Route exact path="/">
              <p>This is the welcome page</p>
            </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/join" component={JoinPackPage} />
            <Route path="/create" component={CreatePackPage} />
            <Route path="/pack/:packCode" component={Pack} />
            <Route path="/food" component={FoodPage} />
            <Route path="/walk" component={WalkPage} />
            <Route path="/behaviour" component={BehaviourPage} />
            <Route path="/toilet" component={ToiletPage} />
            <Route path="/medical" component={MedicalPage} />
          </Switch>
        </Router>
      );;
  }
}