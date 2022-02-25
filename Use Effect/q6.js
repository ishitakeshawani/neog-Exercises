// POST data
// CB link - https://codesandbox.io/s/post-request-exercise-forked-zfidc9?file=/src/App.js:0-1380

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

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
    await axios
      .post("/api/addresses", { address: { city: newAddress } })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
