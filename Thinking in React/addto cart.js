// Show a list of items with add to cart button
// Clicking on the button should add that item to cart.
// Show the cart below with items added.
// Clicking on the same item twice should add more items in cart.
// CHALLENGE : increase the count of the item in cart without adding it to list.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/addtocart.js

import { useState } from "react";
import "./styles.css";

export default function AddToCart() {
  var list = ["first", "second", "third", "fouth"];
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  return (
    <div className="app">
      <ul className="list">
        {list.map((val) => (
          <li>
            {val}{" "}
            <button
              className="btn click-btn"
              onClick={(e) => {
                setCart((prev) => [...prev, val]);
                setCartLength(cartLength + 1);
              }}
            >
              addto
            </button>{" "}
            <button
              className="btn"
              onClick={() => setCartLength(cartLength + 1)}
            >
              +
            </button>{" "}
            <button
              className="btn"
              onClick={() => setCartLength(cartLength - 1)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <br />
      <ul className="stacked-list">
        <p className="list-item">
          cart items <span>{cartLength}</span>
        </p>
        {cart.map((val) => (
          <li className="list-item">{val}</li>
        ))}
      </ul>
    </div>
  );
}
