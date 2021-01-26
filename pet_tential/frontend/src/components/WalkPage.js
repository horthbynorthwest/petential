import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  import { Grid, Button, ButtonGroup, Typography, TextField } from "@material-ui/core";
  import Container from "@material-ui/core/Container";
  import InputLabel from "@material-ui/core/InputLabel";
  import FormHelperText from "@material-ui/core/FormHelperText";
  import FormControl from "@material-ui/core/FormControl";
  import Radio from "@material-ui/core/Radio";
  import RadioGroup from "@material-ui/core/RadioGroup";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import { makeStyles } from '@material-ui/core/styles';

export default class WalkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      date: "",
      comment: "",
      duration: ""
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
  }

  handleDateChange(e) {
    this.setState({
      date: e.target.value
    });
  }

  handleTimeChange(e) {
    this.setState({
      time: e.target.value
    });
  }

  handleCommentChange(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  handleDurationChange(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  handleSubmitButtonPressed() {
    console.log(this.state);
  }


  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                Add Walk
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              fullWidth
              type="time"
              label="Time"
              name="time"
              size="small"
              variant="outlined"
              onChange={this.handleTimeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              fullWidth
              type="date"
              size="small"
              variant="outlined"
              onChange={this.handleDateChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              fullWidth
              label="Comment"
              name="Comment"
              size="small"
              variant="outlined"
              onChange={this.handleCommentChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              fullWidth
              label="Duration"
              name="duration"
              size="small"
              variant="outlined"
              onChange={this.handleDurationChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup disableElevation variant="contained" fullWidth>
            <Button
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
            onClick={this.handleSubmitButtonPressed}
            >
              Post
            </Button>
            <Button color="secondary" to="/" component={Link}  >
              Back to Pack
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}
