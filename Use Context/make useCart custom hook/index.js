// Remember custom hook. Let's extract our useContext(CartContext) in a custom hook. It will make it easy for our consumers to use it directly.
// This is just refactoring and will not have any functionality changes. But it makes life easier so let's do it.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/index.js



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
