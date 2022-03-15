// Move this reducer to Context and create a CounterProvider.

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CounterProvider } from "./CounterProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  rootElement
);
