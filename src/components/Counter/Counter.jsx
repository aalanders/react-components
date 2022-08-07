import "./Counter.css";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="counter">
      <h3>Counter</h3>
      <button onClick={decrementCount}>-</button>
      <span className="count">{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
