import React, { Component } from "react";
import { render } from "react-dom";
import WelcomPage from "./welcomePage";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#135589'
    },
    secondary: {
        main: '#2A93D5'
    }
  },
});

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <MuiThemeProvider theme={theme}>
            <div className="center">
              <WelcomPage />
            </div>
          </MuiThemeProvider>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
