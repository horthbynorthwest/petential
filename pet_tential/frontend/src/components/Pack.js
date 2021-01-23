import React, { Component } from "react";

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
      <div>
        <h3>Your Pack Code is:{this.packCode}</h3>
        <p>Pet Name: {this.state.petName.toString()}</p>
        <p>Host: {this.state.isHost.toString()}</p>
      </div>
    );
  }
}