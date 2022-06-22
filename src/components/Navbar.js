import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext.js";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1> To Do List</h1>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
