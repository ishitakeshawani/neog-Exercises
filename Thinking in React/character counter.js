// See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.
// CB link - https://codesandbox.io/s/xenodochial-moore-k8qzky?file=/src/App.js


import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(50);

  const changeText = (e) => {
    const size = e.target.value.length;
    setCounter(50 - size);
  };

  return (
    <div className="App">
      <input onChange={changeText} /> <br />
      <h1>{counter}</h1>
    </div>
  );
}
