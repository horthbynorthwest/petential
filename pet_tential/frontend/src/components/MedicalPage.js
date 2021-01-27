import React, { Component } from "react";
import { AppBar } from "@material-ui/core";

export default class MedicalPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="transparent" elevation={0}>
          <img src={require('./logo_without_words.png')} alt="logo" height={200} width={200}/>
        </AppBar>
        <br></br>
        <p>This is the medical page</p>
      </div>
        
    );
  }
}