import React, { useContext } from "react";
import TodosContext from "../todo-context/todo-context";

export default function TodoItem({ todo }) {
  const { dispatchTodos } = useContext(TodosContext);

  const handleChangeCheckbox = todo => {
    dispatchTodos({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    })
  }

  const handleRemoveItem = todo => {
    dispatchTodos({
      type: "REMOVE_TODO",
      id: todo.id
    })
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete}
          onChange={() => handleChangeCheckbox(todo)}
        />
      </label>
      {todo.task}
      <button type="button" onClick={() => handleRemoveItem(todo)}>Remove</button>
    </li>
  );
}