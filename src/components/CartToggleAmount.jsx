import React from 'react'

import styled from 'styled-components'


const CartToggleAmount = ({amount,setdecrease,setincrease}) => {
    
  return (
    <Wrapper>
    <div className='cart-button'>
        <div className='amount-toggle'>
            <button onClick={setdecrease}className='button'>-</button>
            <div className='amount-style'>{amount}</div>
            <button onClick={setincrease}className='button'>+</button>
        </div>

    </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.card-bottom{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column ;
}
.amount-toggle{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:1.5rem;
    margin-bottom:1rem;
}
.btn{
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
.btn:hover, .btn:active{
    background-color: rgb(43, 243, 70);
    color: rgb(0,0,0);
}
.button{
    border:none;
    outline: none;
    background-color:transparent;
    cursor:pointer;
}`

export default CartToggleAmount