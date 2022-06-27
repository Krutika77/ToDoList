import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.js";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1> To Do List</h1>
    </nav>
  );
};

export default Navbar;
