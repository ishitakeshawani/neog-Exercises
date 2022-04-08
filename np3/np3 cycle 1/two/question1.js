// Problem:  Create a subscribe form with an email and subscribe button.
// On clicking subscribe, check if the email already exists in the given array.
// if it exists show a message that the email is already subscribed, else show that you are now subscribed.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/second.js

import { React, useState } from "react";
import { data } from "./seconddata";

export const Second = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const subcribe = () => {
    console.log(data);
    const value = data.filter((val) => val.mail === email);
    if (value.length > 0 && value[0].mail === email) {
      setMsg("already existing email");
    } else {
      setMsg("subcribed!");
    }
  };
  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={subcribe}>subcribe</button>
      {msg}
    </div>
  );
};
