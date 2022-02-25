// GET data
// CB link - https://codesandbox.io/s/load-data-exercise-forked-dlzeho?file=/src/App.js

import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    await axios
      .get("/api/users/")
      .then((res) => {
        setLoading(false);
        setList(res.data.users);
      })
      .catch((e) => console.log("error", e));
  }
  return (
    <div className="App">
      {loading && <p>loading</p>}
      <button onClick={getData}>get data</button>
      <div>
        {list.map((user) => (
          <li> {user.name} </li>
        ))}
      </div>
    </div>
  );
}

