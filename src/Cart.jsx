import React, { useEffect, useState } from 'react';
import { useCartContext } from "./Context/CartContext";
import CartItem from "./components/CartItem";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';

const Cart = () => {
  const { cart, clearCart, shipping_fee } = useCartContext();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalPrice = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
    setPrice(totalPrice);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <Wrapper>
        <div className="container">
          <div className="container1-div">
            <h3>No items in Cart</h3>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <hr />
        <div className='btn-div12'>
          <NavLink to="/products">
            <button className='btn'>CONTINUE SHOPPING</button>
          </NavLink>
          <button className='btn12 buttondiv' onClick={clearCart}>CLEAR CART</button>
        </div>
        <div className='total_price_div'>
          <div className='total_price_div_div'>
            <p>Subtotal:</p>
            <p><FormatPrice price={price} /></p>
          </div>
          <div className='total_price_div_div'>
            <p>Shipping Fee:</p>
            <p><FormatPrice price={shipping_fee} /></p>
          </div>
          <hr />
          <div className='total_price_div_div'>
            <p>Order Total:</p>
            <p><FormatPrice price={price + shipping_fee} /></p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper1=styled.section`
.container1-div{
  display:flex;
  justify-content:center;
  align-items:center;
  
  max-width:100vw;
  height:50vh;
}
h3{
  font-size:3rem;
  font-weight:bold;
}
`
const Wrapper=styled.section`
.container{
  max-width: 130rem;
  margin: 0 auto;
  
  padding: 2rem 5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
 
}
.grid{
  display: grid;
  margin-top:3rem;
  gap: 6rem;
  max-width: 80rem;
  
  
  

  
}
.grid-five-column{
  grid-template-columns: repeat(5,1fr);
}
.cart-heading {
  text-align: center;
  font-size:bold;
  text-transform: uppercase;
  
}
hr {
  max-width: 100%;
  width: 100%;
  
  border: 0.1rem solid #000;
  margin-top: 1rem;
  
}
.btn-div12{
  display:flex;
  gap:25rem;
  align-items:center;
  flex-direction:row;
  margin-top:3rem;
  cursor:pointer;
  
  

}

.btn12{
  background-color: rgb(98, 43, 243);
  padding: 0.5rem 0.5rem;
  color: rgb(255, 255, 255);
  background-color: none;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 4px;
}
.btn12:hover, .btn12:active{
 
  color: rgb(0,0,0);
  
  
}
.buttondiv{
  background-color:red;
  border:none;
}
.total_price_div{
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-end; 
  margin-top:4rem;
  padding:2rem;
  background-color:rgba(148, 175, 181, 0.6);
}
.total_price_div_div{
  display:flex;
  flex-direction:row;
  gap: 2rem;
}
@media (max-width:798px) {
  
  .cart-hide {
    display: none;
  }
  .grid{
    gap:15rem;
    
  }
  .cart_heading{
    padding-left:15rem;
  }
  
}
@media (max-width:680px) {
  .btn{
    
    font-size:1.5rem;
  }
}
@media (max-width:553px) {
  .grid{
    gap:5rem;
    
  }.cart_heading{
    padding-left:10rem;
  }

  .btn-div12{
    
    gap:1rem;
    flex-direction:column;

    
    
    
    
  
  }
  .btn{
    
    font-size:1rem;
  }
  hr {
    
    width: 100%;
    height:100%;
    
    border: 0.1rem solid #000;
    margin-top: 1rem;
    
    
  }
  .cart_heading p{
    font-size:1.5rem;

  }
  
}
`

export default Cart;
