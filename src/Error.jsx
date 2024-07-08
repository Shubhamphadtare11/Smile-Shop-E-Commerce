import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
    <div className='container errordiv'>
      <div className='errordiv1'>
        <div>
          <h1>404</h1>
        </div>
        <div>
          <h4>UH OH! You're lost</h4>
        </div>
       <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat, ab inventore eligendi cum ipsum natus voluptatum harum eum repellendus?</p>
      </div>
      <div><NavLink to="/">
            <button className='btn'>Home</button>

        </NavLink>
      </div>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container{
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 2rem;
  
}
.errordiv{
  
  padding:7rem 0;
}

.errordiv1{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  padding:2px 2px;
}
.btn{
  background-color: rgb(98, 43, 243);
  padding: 1.4re 2.4rem;
  color: rgb(255, 255, 255);
  background-color: none;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 6px;
}
.btn:hover, .btn:active{
  background-color: rgb(43, 243, 70);
  color: rgb(0,0,0);
}

`;

export default Error