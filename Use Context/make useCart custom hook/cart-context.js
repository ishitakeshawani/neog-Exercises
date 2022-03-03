import { React, createContext, useContext } from "react";

const CartContext = createContext({ Cartitems: 4 });

const CartProvider = ({ children }) => {
  const defaultValue = { Cartitems: 5, printHi: () => console.log("hi..") };
  return (
    <div>
      <CartContext.Provider value={defaultValue}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
