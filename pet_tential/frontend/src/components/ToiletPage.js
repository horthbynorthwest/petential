import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography, AppBar, Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Toilet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="transparent" elevation={0}>
          <img src={require('./logo_without_words.png')} alt="logo" height={200} width={200}/>
        </AppBar>
        <br />
        <Grid spacing={3} align="center">
        <h1>This page is under construction</h1>
        <br />
        <br />
        <Box width='204px' height='254px' border={2}>
        <img src={require('./hardhat.png')} alt="Hardhat" height={250} width={200} align="center" />
        </Box>
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