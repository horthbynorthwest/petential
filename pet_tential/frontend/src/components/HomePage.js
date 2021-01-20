import React, { Component } from "react";
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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/food" component={FoodPage} />
          <Route path="/walk" component={WalkPage} />
          <Route path="/behaviour" component={BehaviourPage} />
          <Route path="/toilet" component={ToiletPage} />
          <Route path="/medical" component={MedicalPage} />
        </Switch>
      </Router>
    );
  }
}