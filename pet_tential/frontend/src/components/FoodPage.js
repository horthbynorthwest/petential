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
  import Container from "@material-ui/core/Container";
  import InputLabel from "@material-ui/core/InputLabel";
  import FormHelperText from "@material-ui/core/FormHelperText";
  import FormControl from "@material-ui/core/FormControl";
  import Radio from "@material-ui/core/Radio";
  import RadioGroup from "@material-ui/core/RadioGroup";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import { makeStyles } from '@material-ui/core/styles';

const foodItems = [
  {
      "id": 1,
      "meal_type": "breakfast",
      "date": "2021-01-21",
      "fed_at": "2021-01-21T15:37:25.276035Z",
      "comment": "Yum!",
      "treats": 4
  },
  {
      "id": 2,
      "meal_type": "Lunch",
      "date": "2021-01-22",
      "fed_at": "2021-01-21T18:12:43.011166Z",
      "comment": "Third time is the charm",
      "treats": 7
  },
  {
      "id": 3,
      "meal_type": "Dinner",
      "date": "2021-01-24",
      "fed_at": "2021-01-21T18:16:47.315402Z",
      "comment": "four-leafed clover!",
      "treats": 4
  }
];


export default class FoodPage extends Component {
    defaultTreats = 0
    
    constructor(props) {
        super(props);

        var today = new Date(),
        defaultDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            mealType: "",
            date: this.defaultDate,
            comment: "",
            treats: this.defaultTreats,
            foodList: foodItems
          };

        this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleTreatsChange = this.handleTreatsChange.bind(this);
        this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
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
              {item.date}
              {item.meal_type}
            </span>
          </li>
      ));
    };

    render() {
        return (
          <div>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Add Food
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField 
                      fullWidth 
                      label="Meal Type" 
                      name="MealType" 
                      size="small" 
                      variant="outlined" 
                      onChange={this.handleMealTypeChange} 
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                      fullWidth 
                      type="date" 
                      size="small" 
                      variant="outlined" 
                      onChange={this.handleDateChange} 
                      defaultValue={this.defaultDate} 
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
                  <Button 
                  color="primary" 
                  fullWidth 
                  type="submit" 
                  variant="contained" 
                  onClick={this.handleSubmitButtonPressed}
                  >
                    Post
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Grid container spacing={3}>
              <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Meal Log
                    </Typography>
                </Grid>
              <ul>
                {this.renderItems()}
              </ul>
            </Grid>
          </div>
        );
    }
}