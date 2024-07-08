import React, { useState } from 'react';
import {FaCheck} from 'react-icons/fa';
import styled from 'styled-components';
import CartToggleAmount from './CartToggleAmount';
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../Context/CartContext";


const AddToCart = ({products}) => {
    const { addToCart } = useCartContext();
    const{colors,stock,id}=products;
    const[color,setColor]=useState(colors[0])
    const[amount,setAmount]=useState(1);

    const setdecrease=()=>{
        amount>1 ? setAmount(amount-1):setAmount(1);
    }
    const setincrease=()=>{
        amount < stock ? setAmount(amount+1):setAmount(stock);
    }
   

    
    
  return (
    <Wrapper>
    <div className='colors'>
        <p>
        Color:{colors.map((curele,index)=>{
            return (
            <button key={index} style={{background:curele}} className={color===curele?"btnstyle active": 'btnstyle'} onClick={()=>{
                setColor(curele)
            }}>
                {color===curele? <FaCheck className='checkstyle'/> : null}
                </button>);

        })}
        </p>
    </div>
    
    <CartToggleAmount amount={amount} setdecrease={setdecrease} setincrease={setincrease}/>
    <NavLink to='/cart' className='btn' onClick={() => addToCart(id, color, amount, products)}>Add To Cart</NavLink>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.colors{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:3rem;
    
}
.btnstyle{
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    background-color:#000;
    margin-left:1rem;
    opacity:0.8;
    outline:none;
    border:none;
    cursor:pointer;
    &:hover{
        opacity:1; 
    }

}
.active{
    opacity:1;   
}
.checkstyle{
    font-size:1rem;
    color:#fff;
}
.btn{
    background-color: rgb(98, 43, 243);
    padding: 1rem 1rem;
    color: rgb(255, 255, 255);
    background-color: none;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 4px;
    font-size:1.5rem;
}
.btn:hover, .btn:active{
    background-color: rgb(43, 243, 70);
    color: rgb(0,0,0);
}
`

export default AddToCart;