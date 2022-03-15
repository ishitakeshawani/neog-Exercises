import { useContext, React, createContext, useReducer } from "react";

const CounterContext = createContext();

function reducerFunc(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
}

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    counter: 0
  });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
