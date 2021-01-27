import React, { Component } from "react";
import { TextField, Button, Grid, Typography, AppBar } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { spacing } from '@material-ui/system';

export default class CreatePackPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: ""
    };

    this.handlePetNameChange = this.handlePetNameChange.bind(this);
    this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
  }

  handlePetNameChange(e) {
    this.setState({
      petName: e.target.value
    });
  }

  handleSubmitButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pet_name: this.state.petName,
      }),
    };
    fetch("/api/add-pack", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/pack/" + data.code));
  }


  render() {
    return (
      // <Grid container justify = "center" spacing={1}>
      <div className="bg">
        <AppBar position="static" color="transparent" elevation={0}>
              <img src={require('./logo_without_words.png')} alt="logo" height={200} width={200}/>
          </AppBar>
          <br></br>
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ maxHeight: '75vh', minWidth: '100vw'}}
        >
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              Create A Pack
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <TextField  
              label="Pet's Name" 
              name="PetName" 
              size="small" 
              variant="outlined" 
              onChange={this.handlePetNameChange} 
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmitButtonPressed}
            >
              Create A Pack
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
              Back
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}