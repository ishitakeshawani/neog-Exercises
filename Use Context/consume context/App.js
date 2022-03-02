import { createContext, useContext } from "react";
import "./styles.css";
import { CartContext } from "./CartContext";

export function ProductListing() {
  return ["1", "2", "3", "4"].map((item) => <h2>Product {item}</h2>);
}

export function Cart() {
    // consume items using useContext
  const { Cartitems } = useContext(CartContext);
  return <h1> Items in cart {Cartitems} </h1>;
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
