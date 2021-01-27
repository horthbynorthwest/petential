import React, { Component } from "react";
import { TextField, Button, Grid, Typography, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class JoinPackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packCode: "",
      error: "",
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.packButtonPressed = this.packButtonPressed.bind(this);
  }

  handleTextFieldChange(e) {
    this.setState({
      packCode: e.target.value,
    });
  }

  packButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: this.state.packCode,
      }),
    };
    fetch("/api/join-pack", requestOptions)
      .then((response) => {
        if (response.ok) {
          this.props.history.push(`/pack/${this.state.packCode}`);
        } else {
          this.setState({ error: "Pack not found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="transparent" elevation={0}>
            <img src={require('./logo_without_words.png')} alt="logo" height={200} width={200}/>
        </AppBar>
        <br></br>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">
              Join a Pack
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              error={this.state.error}
              label="Code"
              placeholder="Enter a Pack Code"
              value={this.state.packCode}
              helperText={this.state.error}
              variant="outlined"
              onChange={this.handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={this.packButtonPressed}
            >
              Join Pack
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="secondary" to="/" component={Link}>
              Back
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}