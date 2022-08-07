import "./Counter.css";

import React, { useReducer } from "react";

const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  function decrementCount() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function incrementCount() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  return (
    <div className="counter">
      <h3>Counter with Reducer</h3>
      <button onClick={() => decrementCount()}>-</button>
      <span className="count">{state}</span>
      <button onClick={() => incrementCount()}>+</button>
    </div>
  );
};

export default CounterWithReducer;
