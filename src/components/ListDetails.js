import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ListDetails = ({ todo }) => {
  const { removeTodo } = useContext(ListContext);
  return (
    <li onClick={() => removeTodo(todo.id)}>
      <div className="title">{todo.title}</div>
      <div className="time">{todo.time}</div>
    </li>
  );
};

export default ListDetails;
