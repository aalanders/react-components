import React, { useState } from "react";

export default function CounterWithNotes() {
  // with Hooks you cannot use an object as state with two keys
  // and expect it to update only the state you pass it,
  // with hooks it doesn't merge an object - it overrides all the old state
  // If you want to use an object you have to spread out prevState when you setState
  // setState(prevState => return { ...prevState, count: prevState.count -1})
  // but it's better to just have a different state for each (state for theme and count)

  // default state is calculated each time component renders (different
  // from Class components where it was only calculated once in constructor)
  // so if the default state is complex, pass useState a function like
  // useState(() => { return 4 })
  // so then it's only ran ONCE
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  // If we just did count + 1, then count would only be the value when
  // the function was rendered, it wouldn't be changed so it would override
  // Using the prevCount (function version) it passes the count around correctly
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span className="count">{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
