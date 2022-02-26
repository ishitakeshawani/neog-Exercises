// Password should contain a number. Show error if user misses character.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/alphanumericpassword.js

import { useState } from "react";
import "./styles.css";

export default function Alphanumericpassword() {
  const [firstInput, setFirstInput] = useState("");
  const [showError, setShowError] = useState(false);

  const onHandleSubmit = () => {
    if (!/\d/.test(firstInput)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      <input onChange={(e) => setFirstInput(e.target.value)} /> <br /> <br />
      <button onClick={onHandleSubmit}>submit</button>
      {showError && <p>Password should contains number.</p>}
    </div>
  );
}
