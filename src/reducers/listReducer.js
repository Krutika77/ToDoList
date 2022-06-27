import { v1 as uuidv1 } from "uuid";

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.todo.title,
          time: action.todo.time,
          id: uuidv1(),
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
