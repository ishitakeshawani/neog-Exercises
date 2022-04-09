// **Problem:**  Take the name from user input and display the appropriate message when clicked on "show welcome message"
// If the name is an odd number of characters display ***"Hello [name]"*** and if it's even then display ***"Hi [name]"***
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/fifth.js

import { React, useState } from "react";

export const Fifth = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const showMsg = () => {
    if (name.length % 2) {
      setMsg("Hello " + name + "!");
    } else {
      setMsg("Hi " + name);
    }
  };
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={showMsg}>Show welcome msg</button>
      <p>{msg}</p>
    </div>
  );
};
