import "./styles.css";
import { useCart } from "./CartContext";
import { useState } from "react";

export function ProductListing() {
  const { addtocart } = useCart();

  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2 key={item}>Product {item}</h2>
      <button onClick={addtocart}>add to cart</button>
    </div>
  ));
}

export function Cart() {
  const { items } = useCart();
  return (
    <div>
      <h1> Items in cart {items} </h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
