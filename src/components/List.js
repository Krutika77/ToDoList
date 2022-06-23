import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext.js";
import ListDetails from "./ListDetails.js";

const List = () => {
  const { todos } = useContext(ListContext);
  return todos.length ? (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          return <ListDetails todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No tasks to do.</div>
  );
};

export default List;
