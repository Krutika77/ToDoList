import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.js";

const List = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="todo-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Go Shopping</li>
        <li style={{ background: theme.ui }}>Groceries</li>
        <li style={{ background: theme.ui }}>Homework</li>
      </ul>
    </div>
  );
};

export default List;
