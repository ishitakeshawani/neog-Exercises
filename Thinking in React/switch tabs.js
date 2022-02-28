// Make three components: Home, About, Profile.
// Put some text in the components
// Now, create three buttons with same name
// Clicking on the button should show that component
// UNDERSTANDING : this is kind of your own router, unless we get into router implementation.
// CB link -https://codesandbox.io/s/lucid-lake-7b5nz4?file=/src/App.js

import "./styles.css";
import Home from "./Home";
import { useState } from "react";

export default function App() {
  const [desc, setdesc] = useState("");
  // const changepage = (e) => {
  //   e.preventDefault();
  //   window.location.href = "./profile";
  // };
  return (
    <div className="App">
      <button onClick={() => setdesc("this is home")}>home</button>
      <button onClick={() => setdesc("this is about")}>about</button>
      <button onClick={() => setdesc("this is profile")}>profile</button>

      <Home desc={desc} />

      {/* <button onClick={changepage}>home</button> */}
    </div>
  );
}

