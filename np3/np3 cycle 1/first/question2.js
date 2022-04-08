// Problem: You have a list of items with price and quantity. Create two buttons for each and every element in the data list. One will increment the quantity of the particular item, and one will decrement the quantity. Show all details of the items on the page.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/App.js

import { React, useState } from "react";
import "./styles.css";
import { data } from "./data.js";
export default function App() {
  const [arr, setArr] = useState(data);
  const increment = (id) => {
    const value = arr.map((product) =>
      id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : { ...product }
    );
    setArr(value);
  };

  const decrement = (id) => {
    const value = arr.map((product) =>
      id === product.id
        ? { ...product, quantity: product.quantity - 1 }
        : { ...product }
    );
    setArr(value);
  };

  return (
    <div className="App">
      <h3>cart page</h3>
      {arr.map((val) => (
        <div key={val.id}>
          <div>
            {val.item} {val.price} &nbsp;
            <button onClick={() => increment(val.id)}>+</button>&nbsp;
            {val.quantity}&nbsp;
            <button onClick={() => decrement(val.id)}>-</button>&nbsp;
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
