import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{AppProvider} from "./Context/ProductContext";
import{FilterProduct} from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterProduct>
      <CartProvider>
        <App/>
      </CartProvider>
    </FilterProduct>
  </AppProvider>
);
