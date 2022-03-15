import { useReducer, useState } from "react";
import { useCounter } from "./CounterProvider";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCounter();

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 9 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        -
      </button>
    </div>
  );
}
