// In the app above create a context using the createContext() call from react.
// Use the Context.Provider to put it to root. And check it in the devtools.
// CB link - https://codesandbox.io/s/setting-up-forked-0g15p0?file=/src/index.js

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "./CartContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider value={{ item: 6 }}>
      <App />
    </CartContext.Provider>
  </StrictMode>,
  rootElement
);

