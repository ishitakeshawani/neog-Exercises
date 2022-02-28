// Create a toggle dark mode button
// Clicking on the button should change background and text color and toggle between dark and light mode.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/darkmode.js


import { React, useState } from "react";
import "./styles.css";

export default function DarkMode() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex-col"
      style={{ background: toggle ? "black" : "white" }}
    >
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <p style={{ color: toggle ? "white" : "black" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
