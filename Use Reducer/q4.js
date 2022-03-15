// Let's see how the wiring works in React. Use useReducer() to console.log(testing successful) every time a button is clicked.

import { useReducer, useState } from "react";
import "./styles.css";

export default function App() {
  function reducerFunc(state, action) {
    console.log("being called ..", state, action.type);
    return { ...state, counter: state.counter + action.value };
  }

  const [state, dispatch] = useReducer(reducerFunc, {
    counter: 0
  });
  return (
    <div className="App">
      <h1 onClick={() => dispatch({ type: "increment", value: 9 })}>
        done by me{state.counter}
      </h1>
    </div>
  );
}
