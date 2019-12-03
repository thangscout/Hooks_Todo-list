import React, { useReducer } from "react";
import uuid from "uuid";
import TodosContext from "../../components/todo-context/todo-context";
import Filter from "../../components/filter/filter";
import TodoList from "../../components/todo-list/todo-list";
import TodoAdd from "../../components/todo-add/todo-add";

const initialTodos = [
  {
    id: uuid(),
    task: "Learn JavaScript",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn TypeScript",
    complete: false
  },
  {
    id: uuid(),
    task: "Learn Python",
    complete: false
  }
];

const filterReducer = (state, action) => {
  switch( action.type ) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      throw new Error();
  }
};

const todosReducer = (state, action) => {
  switch( action.type ) {
    case "DO_TODO": 
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        }else {
          return todo;
        }
      });

    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id ) {
          return { ...todo, complete: false };
        }else {
          return todo;
        }
      });

    case "ALL_DO_TODO":
      return state.map(todo => {
        return { ...todo, complete: true };
      });

    case "ALL_UNDO_TODO":
      return state.map(todo => {
        return { ...todo, complete: false };
      });

    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false
      });

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "REMOVE_ALL":
      return state = [];
    
    case "RESET":
      return state = initialTodos;

    default:
      throw new Error();
  }
};

export default function Dashboard() {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);

  const filteredTodos = todos.filter(todo => {
    if ( filter === "ALL") {
      return true;
    }
    if ( filter === "COMPLETE" && todo.complete) {
      return true;
    }
    if ( filter === "INCOMPLETE" && !todo.complete) {
      return true;
    } 
    return false;
  });

  let dispatch = {
    dispatchFilter,
    dispatchTodos
  };

  return (
    <TodosContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <TodoAdd />
    </TodosContext.Provider>
  );
}