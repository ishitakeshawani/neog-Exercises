// Move the cartManagement reducer to context like we did in previous session.

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartProvider";
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
