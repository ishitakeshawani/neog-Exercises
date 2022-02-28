// Component should have two things
// Text
// Hide Button
// Create a button show toast
// Clicking on this button should show Toast
// Clicking on hide button on toast should hide the toast
// UNDERSTAND : how callbacks can be passed to control state from parent component.
// CHALLENGE :
// Create different type of toasts: Error, Success, Warning etc.
// Differentiate your toast by just a prop and the design should change.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/toast.js

import { React, useState } from "react";
import "./styles.css";

export default function Toast() {
  const [show, setShow] = useState(false);
  const [className, setClassName] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="flex-col">
      {show && (
        <div className={className}>
          <div>{desc}</div>
          <button className="btn" onClick={() => setShow(false)}>
            hide
          </button>
        </div>
      )}

      <div className="app">
        <button
          className="btn"
          onClick={() => {
            setShow(true);
            setClassName("success-toast");
            setDesc("Successfully add to cart!");
          }}
        >
          success
        </button>
        <button
          className="btn"
          onClick={() => {
            setShow(true);
            setClassName("error-toast");
            setDesc("Error in adding to cart!");
          }}
        >
          error
        </button>
        <button
          className="btn"
          onClick={() => {
            setShow(true);
            setClassName("warning-toast");
            setDesc("Warning here");
          }}
        >
          warning
        </button>
      </div>
    </div>
  );
}
