import React, { Component } from "react";
import { render } from "react-dom";
import WelcomPage from "./welcomePage";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="center">
            <WelcomPage />
          </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
