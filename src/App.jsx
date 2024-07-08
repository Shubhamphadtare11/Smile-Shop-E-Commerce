import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Error from './Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle } from "./GlobalStyle";






const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    
    <Routes>
        <Route exath path="/" element={<Home/>}/>
        <Route exath path="/about" element={<About/>}/>
        <Route exath path="/contact" element={<Contact/>}/>
        <Route exath path="/products" element={<Products/>}/>
        <Route exath path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route exath path="/cart" element={<Cart />}/>
        <Route exath path="*" element={<Error/>}/>
        
        

    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
     
    </>
    
  )
}

export default App;