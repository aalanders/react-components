import React from "react";
import { ACTIONS } from "./Todos";
import "./Todos.css";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        className="todo__title"
        style={{ color: todo.complete ? "#AAA" : "#000" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
