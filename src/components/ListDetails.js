import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ListDetails = ({ todo }) => {
  const { dispatch } = useContext(ListContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}>
      <div className="title">{todo.title}</div>
      <div className="time">{todo.time}</div>
    </li>
  );
};

export default ListDetails;
