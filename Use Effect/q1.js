// Create a button and increment a counter every time that button is clicked. Using the syntax shown above, log the counter on console after every render.
// CB link - https://codesandbox.io/s/objective-lichterman-h9n7zk?file=/src/App.js

import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    console.log(`after the render,${counter}`);
  });

  function incrementCounter() {
    console.log(`from handler,${counter}`);
    setCounter(counter + 1);
    console.log(`from  2,${counter}`);
  }

  console.log(`just before render,${counter}`);

  return (
    <div className="App">
      <p>counter {counter}</p>
      <button onClick={incrementCounter}>click</button>
    </div>
  );
}
