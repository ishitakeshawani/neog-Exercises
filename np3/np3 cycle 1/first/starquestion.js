// **Problem:** Extension of question02 - show the total price at the end of the list which would be the sum of (price * quantity) for all items
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/first.js

import { React, useState } from "react";
import "./styles.css";
import { data } from "./data.js";
export default function First() {
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

  const totalSum = () => {
    return arr.reduce((pv, cv) => cv.price * cv.quantity + pv, 0);
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
      <h3>Total price : {totalSum()}</h3>
    </div>
  );
}
