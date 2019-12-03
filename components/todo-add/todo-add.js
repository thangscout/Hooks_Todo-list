import React, { useState, useContext } from "react";
import TodosContext from "../todo-context/todo-context";
import uuid from "uuid";

export default function TodoAdd(){
  const [ task, setTask ] = useState('');
  const { dispatchTodos } = useContext(TodosContext);

  const handleChangeInput = event => {
    setTask(event.target.value);
  }
  
  const handleSubmit = event => {
    if (task) {
      dispatchTodos({ type: "ADD_TODO", task, id: uuid() });
    }
    setTask('');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task}
        onChange={handleChangeInput}
      />
      <button type="submit">Add Todos</button>
    </form>
  );
}