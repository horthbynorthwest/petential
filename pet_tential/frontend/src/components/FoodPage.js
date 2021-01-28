import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  import { Grid, Button, ButtonGroup, Typography, TextField, AppBar, Box, Container} from "@material-ui/core";
  import InputLabel from "@material-ui/core/InputLabel";
  import FormHelperText from "@material-ui/core/FormHelperText";
  import FormControl from "@material-ui/core/FormControl";
  import Radio from "@material-ui/core/Radio";
  import RadioGroup from "@material-ui/core/RadioGroup";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import { makeStyles } from '@material-ui/core/styles';


export default class FoodPage extends Component {

    defaultTreats = 0

    constructor(props) {
        super(props);

        this.state = {
            mealType: "",
            date: "",
            comment: "",
            treats: this.defaultTreats,
            foodList: []
          };

        this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleTreatsChange = this.handleTreatsChange.bind(this);
        this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
    }

    async componentDidMount() {
      this.refreshList();
    }

    refreshList = () => {
      // this route may change to get-food once we have code set up to return only food for particular pack
      fetch("/api/get-food")
        .then((response) => response.json())
        .then((foods) => {
          console.log(foods);
          this.setState({
            foodList: foods
          });
        });
    };

    formatDate() {
    let day = new Date().getUTCDate();
    let month = new Date().getUTCMonth() + 1;
    let year = new Date().getUTCFullYear();
    return year + '-' + month + '-' + day;
    }

    handleMealTypeChange(e) {
        this.setState({
          mealType: e.target.value,
        });
    }

    handleDateChange(e) {
        this.setState({
          date: e.target.value,
        });
    }

    handleCommentChange(e) {
        this.setState({
          comment: e.target.value,
        });
    }

    handleTreatsChange(e) {
        this.setState({
          treats: e.target.value,
        });
    }

    handleSubmitButtonPressed() {
        console.log("at the top");
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              meal_type: this.state.mealType,
              date: this.state.date,
              comment: this.state.comment,
              treats: this.state.treats,
            }),
          };
          console.log("hi");

          fetch("/api/add-food", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    renderItems = () => {
      const newItems = this.state.foodList;
      return newItems.map(item => (
          <li
            key={item.id}
           >
            <span>
              {item.date} - {item.meal_type} - {item.comment} - Treats: {item.treats}
            </span>
          </li>
      ));
    };

    render() {
        return (
          <div className="bg">
            <AppBar position="static" color="transparent" elevation={0}>
              <img src={require('./logo_without_words.png')} alt="logo" height={200} width={200}/>
            </AppBar>
            <form>
            <Container maxWidth="xs" align="center">
              <Grid container spacing={2}
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={6} align="center">
                    <Typography component="h4" variant="h4">
                        Add Food
                    </Typography>
                </Grid>
                <Grid item xs={12} width="50%">
                  <Grid container spacing={2} width="50%">
                    <Grid item xs={12} width="50%">
                      <TextField
                      fullWidth
                      label="Meal Type"
                      name="MealType"
                      size="small"
                      variant="outlined"
                      onChange={this.handleMealTypeChange}
                      />
                    </Grid>
                    <Grid item xs={12} width="50%">
                      <TextField
                      fullWidth
                      type="date"
                      size="small"
                      variant="outlined"
                      onChange={this.handleDateChange}
                      defaultValue={this.defaultDate}
                      />
                    </Grid>
                    <Grid item xs={12} width="50%">
                      <TextField
                      fullWidth
                      label="Comment"
                      name="Comment"
                      size="small"
                      variant="outlined"
                      onChange={this.handleCommentChange}
                      />
                    </Grid>
                    <Grid item xs={12} width="50%">
                      <TextField
                      fullWidth
                      type="number"
                      label="Treats"
                      name="Treats"
                      size="small"
                      variant="outlined"
                      onChange={this.handleTreatsChange}
                      defaultValue={this.defaultTreats}
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
              </Container>
            </form>
            <Container maxWidth="xs" align="center">
            <Grid container spacing={3}>
              <Grid item xs={12} align="center">
                    <br />
                    <Typography component="h4" variant="h4">
                        Meal Log
                    </Typography>
                </Grid>
              <Grid item xs={12} alignitem="left">
                <ul align="left">
                  {this.renderItems()}
                </ul>
              </Grid>
            </Grid>
            </Container>
          </div>
        );
    }
}
