// Now that we have context ready, let's consume it in the Cart Component.
// Notice how we don't need to pass things from App to Cart anymore.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/index.js

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "./CartContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider value={{ Cartitems: 5 }}>
      <App />
    </CartContext.Provider>
  </StrictMode>,
  rootElement
);

