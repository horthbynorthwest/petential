import React, { Component } from "react";
import { render } from "react-dom";

import FoodPage from "./FoodPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FoodPage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
