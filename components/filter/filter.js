import React, { useContext } from "react";
import TodosContext from "../todo-context/todo-context";

export default function Filter(){
  const { dispatchFilter, dispatchTodos } = useContext(TodosContext);

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL'});
  }

  const handleShowComplete = () => {
    dispatchFilter({ type: "SHOW_COMPLETE"});
  }

  const handleShowIncomplete = () => {
    dispatchFilter({ type: "SHOW_INCOMPLETE"});
  }
  
  const handleShowAllComplete = () => {
    dispatchTodos({ type: "ALL_DO_TODO"});
  }

  const handleShowAllIncomplete = () => {
    dispatchTodos({ type: "ALL_UNDO_TODO"});
  }

  const handleRemoveAll = () => {
    dispatchTodos({ type: "REMOVE_ALL"});
  }

  const handleReset = () => {
    dispatchTodos({ type: "RESET"});
  }

  return (
    <div>
      <button type="button" onClick={handleShowAll}>
        Show All
      </button>
      <button type="button" onClick={handleShowComplete}>
        Show Complete
      </button>
      <button type="button" onClick={handleShowIncomplete}>
        Show Incomplete
      </button>
      <button type="button" onClick={handleShowAllComplete}>
        All Complete
      </button>
      <button type="button" onClick={handleShowAllIncomplete}>
        All Incomplete
      </button>
      <button type="button" onClick={handleRemoveAll}>
        Remove All
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}