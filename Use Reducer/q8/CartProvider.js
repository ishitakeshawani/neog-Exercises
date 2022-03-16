import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useReducerFunc = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.name],
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + action.price
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item !== action.name),
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - action.price
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useReducerFunc, {
    items: [],
    quantity: 0,
    totalPrice: 0
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
