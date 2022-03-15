// Create a counter with + and - button but this time using useReducer()

import { useReducer, useState } from "react";
import "./styles.css";

export default function App() {
  function reducerFunc(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + action.value };
      case "decrement":
        return { ...state, counter: state.counter - action.value };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, {
    counter: 0,
  });
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
