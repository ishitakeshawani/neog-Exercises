// Add a submit button to password change field.
// Disable submit button if passwords don't match
// Clicking on submit should console the password field
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/disablesubmit.js

import { useState, useEffect } from "react";
import "./styles.css";

export default function DisableSubmit() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    if (firstInput !== secondInput) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [firstInput, secondInput]);

  const onHandleSubmit = () => {
    console.log(secondInput);
  };

  return (
    <div>
      <input onChange={(e) => setFirstInput(e.target.value)} /> <br /> <br />
      <input onChange={(e) => setSecondInput(e.target.value)} /> <br /> <br />
      <button disabled={disableBtn} onClick={onHandleSubmit}>
        submit
      </button>
    </div>
  );
}
