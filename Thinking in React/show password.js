// Create a password reset form
// Put a button show password near the input element.
// Clicking should show password to the user.
// Text on show password should change to hide password when password is shown.
// Click on hide password and password goes back to hidden again. 
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/showpassword.js

import { useState } from "react";
import "./styles.css";

export default function ShowPassword() {
  const [showPasswords, setShowPasswords] = useState(true);
  const showPassword = () => {
    setShowPasswords(!showPasswords);
  };
  return (
    <div>
      <input type={showPasswords ? "password" : "text"} />
      <button onClick={showPassword}>
        {showPasswords ? "Show Password" : "Hide Password"}
      </button>
    </div>
  );
}
