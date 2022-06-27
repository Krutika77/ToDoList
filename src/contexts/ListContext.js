import React, { createContext, useReducer } from "react";
import { listReducer } from "../reducers/listReducer";

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [todos, dispatch] = useReducer(listReducer, []);
  return (
    <ListContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
