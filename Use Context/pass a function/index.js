// Create a simple function logger which does console.log() and nothing else. Can we pass this function in the cart? If yes, do that and consume it in Cart for now.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/App.jsx

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "./CartContext";
import App from "./App";

const printHi = () => console.log("hi..");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider value={{ Cartitems: 5, printHi }}>
      <App />
    </CartContext.Provider>
  </StrictMode>,
  rootElement
);
