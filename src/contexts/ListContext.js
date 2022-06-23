import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";
export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { title: "Go Shopping", time: "2:30 pm", id: 1 },
    { title: "Groceries", time: "5:30 pm", id: 2 },
    { title: "Homework", time: "10:30 am", id: 3 },
  ]);
  const addTodo = (title, time) => {
    setTodos([...todos, { title, time, id: uuidv1() }]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <ListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
