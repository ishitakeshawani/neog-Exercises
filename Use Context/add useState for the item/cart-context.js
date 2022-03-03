import { React, createContext, useContext, useState } from "react";

const CartContext = createContext({ Cartitems: 4 });

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const addtocart = () => setItems(items + 1);
  const defaultValue = { items, addtocart };
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
