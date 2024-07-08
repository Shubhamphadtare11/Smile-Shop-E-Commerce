import React, { useEffect, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer"; // Assuming your reducer is named CartReducer

// Function to get cart data from localStorage
const getLocalCartData = () => {
  const localData = localStorage.getItem('nishiitem');
  if (!localData || localData === '[]') {
    return [];
  } else {
    return JSON.parse(localData);
  }
};

// Initial state for the cart context
const initialState = {
  cart: getLocalCartData(), // Initialize cart with local storage data
  total_item: "", // Initialize total_item and total_price as needed
  total_price: "",
  shipping_fee: 50000, // Example shipping fee
};

// Create context for cart management
const CartContext = React.createContext();

// CartProvider component to manage cart state
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Function to add an item to the cart
  const addToCart = (id, color, amount, products) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, products } });
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Function to decrease quantity of an item in the cart
  const setDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // Function to increase quantity of an item in the cart
  const setIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Store cart data in localStorage when cart state changes
  useEffect(() => {
    localStorage.setItem('nishiitem', JSON.stringify(state.cart));
  }, [state.cart]);

  // Provide cart state and actions through context
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
