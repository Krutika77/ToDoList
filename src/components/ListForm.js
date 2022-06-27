import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";

const NewListForm = () => {
  const { addTodo } = useContext(ListContext);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, time);
    setTitle("");
    setTime("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task to do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default NewListForm;
