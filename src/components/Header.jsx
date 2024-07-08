import React,{useState}from 'react';
import styled from "styled-components";

import {NavLink} from "react-router-dom";


import {FiShoppingCart} from 'react-icons/fi';
import {CgMenu,CgClose} from 'react-icons/cg';


import { useCartContext } from "../Context/CartContext";






const Header = ({size}) => {
  const [menuIcon,setmenuIcon]= useState();
  const { cart} = useCartContext();
 
  
    let ans=0;
    
function myfun(){
    const navbar= document.querySelector('.navbar');
 
    navbar.classList.toggle("sticky",window.scrollY>0)
  
  
}
window.addEventListener('scroll',myfun)
   
  
  
  return (
    <Wrapper>
    <div className={menuIcon ? "navbar active" : "navbar"}>
    <NavLink to="/" className={menuIcon ? "logodiv" : "logodiv1"}>
      <img src='./images/logo.png' alt='my logo img' className="logo"/>
      {/* <h2>Bazaar</h2> */}
      
    </NavLink>
    <div className='navbar-links'>
     <ul className='navbar-lists'>
            <li>
                <NavLink to={"/"} className="navbar-link" onClick={()=>setmenuIcon(false)}>Home</NavLink>
            </li>
            {/* <li>
                <NavLink to={"/About"}className="navbar-link" onClick={()=>setmenuIcon(false)}>About</NavLink>
            </li> */}
            <li>
                <NavLink to={"/Products"}className="navbar-link" onClick={()=>setmenuIcon(false)}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/Contact"}className="navbar-link" onClick={()=>setmenuIcon(false)}>Contact</NavLink>
            </li>
            
            <li>
            <NavLink to={"/Cart"} className="cart-trolley-link">
                <FiShoppingCart className="cart-trolley" />
                {/* Conditional rendering based on cart existence */}
                {cart && cart.length > 0 && cart.map((item) => {
                  ans += item.amount;
                  return (
                    <span key={item.id} className="cart-total-item">{ans}</span>
                  );
                })}
              </NavLink>
            </li>
        </ul>
        <div className={menuIcon ? "active mobile-navbar-btn" : "mobile-navbar-btn"}>
        <CgMenu name="menu-outline" className='mobile-nav-icon' onClick={()=>setmenuIcon(true)}/>
        <CgClose className='mobile-nav-icon close-outline' onClick={()=>setmenuIcon(false)}/>
        </div>
        </div>
        
      </div>
      
      

      
     
     
       
     
  
  
  </Wrapper>
  )
};
const Wrapper = styled.header`
.sticky{
    position:fixed;
    display:flex;
    height:10rem;
    justify-content:space-between;
    align-items:center;
    padding:0 4.8rem;
    width:100%;
    background-color:#f9f9ff; 
    top:0;
    left:0;
    z-index:1000;
}
.navbar{
    display:flex;
    height:10rem;
    justify-content:space-between;
    align-items:center;
    padding:0 4.8rem;
    max-width:100%;
    background-color:#f9f9ff; 
   
}
.logo{
    height: 11rem;
    width:11rem;
    padding: 2rem;
}
.navbar-lists{
    display:flex;
    gap:4.8rem;
    ${""/*gap:3rem;
    list-style:none;
text-decoration:none;
font-size: 1.5rem;
*/}
    
    align-items:center;
}
.navbar-link {
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: font-weight 0.3s ease-in-out; /* Adding transition for font-weight */

    &:hover {
        font-weight: bold;
    }
}

.navbar-links{
    display:flex;
    align-items:center;
    gap:1rem;
}




.cart-trolley-link{
    position: relative;
}
.cart-trolley{
    position: relative;
    font-size: 3.5rem;
}

.cart-total-item{
    position: absolute;
    content: "";
    width: 2.5rem;
    height:2rem;
    background-color: red;
    left:1.8rem; 
    top:-3.9rem;
    border-radius: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    color:black;
    
}
.user-info{
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding: 0.3rem;
}
.mobile-navbar-btn{
    display:none;
    background-color: transparent;
    cursor: pointer;
    border: none;
}
.close-outline{
    display:none;
}
h2{
    font-weight:bold;
    background-color:grey;
    padding:1.5rem;
    border-radius:40rem;
}
@media screen and (max-width: 460px) {
    h2{
        font-weight:500;
        background-color:grey;
        padding:1rem;
        border-radius:40rem;
    }
}
@media screen and (max-width: 300px) {
    h2{
        font-weight:300;
        font-size:2.5rem;
        background-color:grey;
        padding:0.5rem;
        border-radius:40rem;
    }
}





 @media screen and (max-width: 950px) {
     
    
     
    
 .logo{
     height: 6.5rem;
     width:6.5rem;
     padding: 0.2rem;
 }
 .mobile-navbar-btn{
     display:inline-block;
     border: 2px solid black;
     top: 10rem;
     left:-30rem;
     z-index:999;
     margin-right:2rem;
                 
     }
     .mobile-nav-icon{
        font-size: 4.2rem;
     }
 .close-outline{
     display: none;
 }
 
  .navbar-lists{
     width: 100vw;
     height: 100vh;
     position: absolute;
     top: 0rem;
     left:0;
    background-color: honeydew;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     visibility: hidden;
     opacity: 0;
     
     
 }


 }
 .logodiv{
     display: none;
 }
 .active .mobile-nav-icon{
     display:none;
 }
 .active .close-outline{
     display:inline-block;
     z-index: 9999;
     
 }
 
 
 .active .navbar-lists{
     
     
  
     visibility: visible;
     opacity: 1;
     
     
     z-index: 999;
 }
 .active .navbar-link{
     font-size: 3rem;
     
 }
 .active .cart-trolley{
    
    font-size: 3.5rem;
}
.active .cart-total-item{
    position: absolute;
    content: "";
    width: 4.5rem;
    height:2.5rem;
    ${""/*background-color: slateblue;*/}
    left:1.8rem; 
    top:-4rem;
    border-radius: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    
}

@media screen and (max-width: 1200px) {
    
    .navbar{
        justify-content:space-between;
        padding:0 3.5rem;
    }
    .logo{
        height: 11rem;
        width:11rem;
        
    }

}


  
 

`;
export default Header;