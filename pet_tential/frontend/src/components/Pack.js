import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      isHost: false,
    };
    this.packCode = this.props.match.params.packCode;
    this.getPackDetails();
  }

  getPackDetails() {
    fetch("/api/get-pack" + "?code=" + this.packCode)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          petName: data.pet_name,
          isHost: data.is_host,
        });
      });
  }

render() {
    return (
      <Grid container spacing={1} align="center">
    
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
            Welcome to Petential
            <p>Your Pack Code is:{this.packCode}</p>
            <br />
            <p>Pet Name: {this.state.petName.toString()}</p>
               
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