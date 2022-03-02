// You can create a function with almost anything in React and compose the pieces. Functional programming remember?
// Extract the whole CartContext into its own component. It will still do the same thing as before but now it will take the value as children. We will build on this.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/CartContext.js

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
