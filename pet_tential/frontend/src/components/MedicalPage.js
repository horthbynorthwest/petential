import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class MedicalPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid spacing={3} align="center">
        <h1>This page is under construction</h1>
        <br />
        <br />
        <img src={require('./hardhat.png')} alt="Hardhat" height={250} width={200} align="center" />
        <br />
        <br />
        <Button color="secondary" to="/" component={Link} variant="contained" align="center" >
          Back to Pack
        </Button>
        </Grid>
      </div>
    );
  }
}