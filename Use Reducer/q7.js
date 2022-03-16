// Create a cart. Fill the initial state with products and quantity. Show the total price of things in cart.
// Now implement features:
// Increase quantity
// Remove from cart

import { useReducer } from "react";
import "./styles.css";

const itemsInCart = [
    {
      id: 1,
      name: "kala chasma",
      price: 1000
    },
    {
      id: 2,
      name: "laal chhadi",
      price: 500
    },
    {
      id: 3,
      name: "jalebi",
      price: 50
    },
    {
      id: 4,
      name: "japani joota",
      price: 10000
    }
  ];

export default function App() {

  const func = (state, action) => {
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

  const [state, dispatch] = useReducer(func, {
    items: [],
    quantity: 0,
    totalPrice: 0
  });

  // const cart = { itemsInCart, quantity: 4 }
  return (
    <div className="App">
      <h1>Items in cart are</h1>
      {state.items.map((v) => (
        <h3>{v}</h3>
      ))}
      <h3>quantity : {state.quantity}</h3>
      <h3>Total price : {state.totalPrice}</h3>
      {itemsInCart.map((val) => (
        <div>
          <h4>
            Product Name: {val.name}
            <br /> price: <span>{val.price}</span>
          </h4>
          <button
            onClick={() =>
              dispatch({
                type: "add",
                name: val.name,
                id: val.id,
                price: val.price
              })
            }
          >
            add to cart
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "remove",
                name: val.name,
                id: val.id,
                price: val.price
              })
            }
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
}
