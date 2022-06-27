import React, { createContext, useReducer, useEffect } from "react";
import { listReducer } from "../reducers/listReducer";

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [todos, dispatch] = useReducer(listReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <ListContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
