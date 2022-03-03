// Right now we are passing item value directly as 4. Let's change that value from a direct value to be something coming from state.
// Now, instead of logger, you can pass setItem. You are basically passing { item, setItem } pair.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/App.jsx


import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext, CartProvider } from "./CartContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
