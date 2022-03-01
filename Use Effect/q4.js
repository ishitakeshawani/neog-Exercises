// GET data
// CB link - https://codesandbox.io/s/load-data-exercise-forked-dlzeho?file=/src/App.js

import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getData() {
    try {
      setLoading(true);
      const {
        data: { users }
      } = await axios.get("/api/users/");
      setLoading(false);
      setList(users);
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <div className="App">
      {loading && <p>loading</p>}
      <div>{error}</div>
      <button onClick={getData}>get data</button>
      <div>
        {list.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </div>
    </div>
  );
}
