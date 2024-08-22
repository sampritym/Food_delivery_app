// ContextReducer.js
import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: action.id,
        name: action.name,
        qty: action.qty,
        price: action.price,
        finalPrice: action.finalPrice
      }];
    case 'REMOVE':
      return state.filter((_, index) => index !== action.index);
    default:
      console.log("Error in reducer");
      return state;
      case 'DROP':
        let empArray = []
        return empArray
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
