import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext.js";

const Navbar = () => {
  const { todos } = useContext(ListContext);
  return (
    <div className="navbar">
      <h1> To Do List</h1>
      <p>Currently you have {todos.length} pending tasks to go through...</p>
    </div>
  );
};

export default Navbar;
