import React from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Counter from "./components/Counter/Counter";
import WindowWidth from "./components/WindowWidth/WindowWidth";
import Resource from "./components/Resource/Resource";
import CounterWithReducer from "./components/Counter/CounterWithReducer";
import Todos from "./components/Todo/Todos";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <div className="component">
        <Calculator />
      </div>
      <div className="component">
        <WindowWidth />
      </div>
      <div className="component">
        <Counter />
      </div>
      <div className="component">
        <CounterWithReducer />
      </div>
      <div className="component">
        <Todos />
      </div>
      <div className="component">
        <Carousel />
      </div>
      <div className="component">
        <Resource />
      </div>
    </div>
  );
}

export default App;
