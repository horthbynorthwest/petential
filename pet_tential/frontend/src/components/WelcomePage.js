import React, { Component } from "react";
import CreatePackPage from "./CreatePackPage";
import JoinPackPage from "./JoinPackPage";
import Pack from "./Pack";
import FoodPage from "./FoodPage";
import WalkPage from "./WalkPage";
import BehaviourPage from "./BehaviourPage";
import ToiletPage from "./ToiletPage";
import MedicalPage from "./MedicalPage";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
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
    this.state = {
      packCode: null,
      packId: null
    };
    this.clearPackCode = this.clearPackCode.bind(this);
  }

  async componentDidMount() {
    fetch("/api/user-in-pack")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          packCode: data.code,
          packId: data.id
        });
      });
  }

  renderWelcomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Petential
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Pack
            </Button>
            <Button color="primary" to="/create" component={Link}>
              Create a Pack
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  clearPackCode() {
    this.setState({
      packCode: null,
    });
  }

  render() {
    return(
        <Router>
          <Switch>
            <Route exact path="/" render={() => {
              return this.state.packCode ? (
                <Redirect to={`/pack/${this.state.packCode}`} />
              ) : (
                this.renderWelcomePage()
              );
            }}
          />
            <Route path="/join" component={JoinPackPage} />
            <Route path="/create" component={CreatePackPage} />
            <Route path="/pack/:packCode" 
              render={(props) => {
                return <Pack {...props} leavePackCallback={this.clearPackCode} />;
              }}
            />
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