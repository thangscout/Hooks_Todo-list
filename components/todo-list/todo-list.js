import React from "react";
import TodoItem from "../todo-item/todo-item";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}/>
      ))}
    </ul>
  );
}