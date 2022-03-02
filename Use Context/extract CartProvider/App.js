import { createContext, useContext } from "react";
import "./styles.css";
import { CartContext } from "./CartContext";

export function ProductListing() {
  return ["1", "2", "3", "4"].map((item) => <h2 key={item}>Product {item}</h2>);
}

export function Cart() {
  const { Cartitems, printHi } = useContext(CartContext);
  return (
    <div>
      <h1 onClick={printHi}> Items in cart {Cartitems} </h1>
      {printHi()}
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
