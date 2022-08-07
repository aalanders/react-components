import "./Todos.css";
import Todo from "./Todo";
import React, { useReducer, useState } from "react";
import { useEffect } from "react";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const CounterWithReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // pass any information you need in reducer as payload
    // dispatch takes type (WHAT THE ACTION NEEDS TO DO) and payload (PARAMETERS TO PERFORM ACTION)
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  // MUCH CLEANER TO PASS DISPATCH so you don't have to have handlers
  // function handleToggle(id) {
  //   dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } });
  // }

  return (
    <>
      <h3>Todos with useReducer</h3>
      <div className="todos">
        <p>Add Todo:</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            cl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              dispatch={dispatch}
              // see note above
              // handleToggle={() => handleToggle(todo.id)}
            />
          );
        })}
      </div>
    </>
  );
};

// RETURNS VALUE THAT FUNCTION RETURNS
// Example of useMemo
// const doubleNumber = useMemo(() => {
//   return slowFunction(number)
// }, [number])

// Returns FUNCTION
// Example of useCallback
// const getItmes = useCallback((incrementor) => {
//   return [number + incrementor, number +1 + incrementor, number +2 + incrementor]
// }, [number])

export default CounterWithReducer;
