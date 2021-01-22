import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <Grid container spacing={1} align="center">
              <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                  Welcome to Petential
                </Typography>
             </Grid>
              <Grid item xs={12} align="center">
                <Button style={{minWidth: '183px', minHeight: '30px'}} color="primary" variant="contained" to="/food" component={Link}>
                  Food
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button style={{minWidth: '183px', minHeight: '30px'}} color="primary" variant="contained" to="/walk" component={Link}>
                  Walk
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button style={{minWidth: '183px', minHeight: '30px'}} color="primary" variant="contained" to="/medical" component={Link}>
                  Medical
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button style={{minWidth: '183px', minHeight: '30px'}} color="primary" variant="contained" to="/toilet" component={Link}>
                  Toilet Training
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/behaviour" component={Link}>
                Behaviour Training
                </Button>
              </Grid>
            </Grid>
    );
  }
}