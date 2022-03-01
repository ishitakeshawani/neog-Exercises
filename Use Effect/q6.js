// POST data
// CB link - https://codesandbox.io/s/post-request-exercise-forked-zfidc9?file=/src/App.js:0-1380

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import uuid from "react-uuid";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/addresses");
      setAddresses(data.addresses);
      console.log("logg", data.addresses);
      setAddresses((currentAddress) =>
        currentAddress.concat({ city: currentAddress.city })
      );
    })();
  }, [newAddress]);

  async function addData() {
    try {
      await axios.post("/api/addresses", { address: { city: newAddress } });
      setError("");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="App">
      <h1> address book </h1>
      <input
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={(event) => {
          const { value } = event.target;
          setNewAddress(value);
          console.log("new", newAddress);
        }}
      />
      <button onClick={addData}> Save Address </button>
      <p>{error}</p>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
