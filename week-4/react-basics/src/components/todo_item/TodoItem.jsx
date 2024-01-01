import React from "react";
import css from "./Todoitem.css";

const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button
        className="deleteButton"
        onClick={() => props.deleteItem(props.id)}
        type="button"
      >
        DONE
      </button>
    </div>
  );
};

export default TodoItem;
