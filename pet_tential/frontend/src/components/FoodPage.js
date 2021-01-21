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


export default class FoodPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                
              <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Food Log
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Meal Type" name="MealType" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth type="date" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Comment" name="Comment" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth type="number" label="Treats" name="Treats" size="small" variant="outlined" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button color="primary" fullWidth type="submit" variant="contained">
                    Post
                  </Button>
                </Grid>
              </Grid>
            </form>
        );
    }
}
