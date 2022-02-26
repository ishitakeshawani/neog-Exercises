// Take two passwords from user. Show error only if both passwords don't match.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/App.js

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [showError, setShowError] = useState(false);
  const onHandleSubmit = () => {
    if (firstInput !== secondInput) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  return (
    <div className="App">
      <input onChange={(e) => setFirstInput(e.target.value)} /> <br /> <br />
      <input onChange={(e) => setSecondInput(e.target.value)} /> <br /> <br />
      <button onClick={onHandleSubmit}>submit</button>
      {showError && <p>Password does not match</p>}
    </div>
  );
}
