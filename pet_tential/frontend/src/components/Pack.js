import React, { Component } from "react";

export default class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      isHost: false,
    };
    this.packCode = this.props.match.params.packCode;
    // this.getRoomDetails();
  }

render() {
    return (
      <div>
        <h3>{this.packCode}</h3>
        <p>Pet Name: {this.state.petName.toString()}</p>
        <p>Host: {this.state.isHost.toString()}</p>
      </div>
    );
  }
}