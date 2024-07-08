import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
  
  
  html {
    font-size: 62.5%;
    
    overflow-x: hidden;
  }
  body{
    overflow-x: hidden;
    scrollbar-color:rgb(98 84 243)
    
    
  
  }
  body::-webkit-scrollbar {
    width: 1.5rem;
   
  }
  body::-webkit-scrollbar-track {
    background-color: transparent;
  }
  body::-webkit-scrollbar-thumb {
    border:5px solid transparent;
    border-radius: 9px;
   
  }
  h1{
    font-size:6rem;
    font-weight:900
  }
  h2{
    font-size:4.4rem;
    font-weight:300
  }
  h3{
    font-size:1.8rem;
    font-weight:400;
  }
  p,button{
    font-size:1.65rem;
    font-weight:400;
    line-height:1.5
  }
  a{
    text-decoration:none;
  }
  li{
    list-style:none;
  }
  ${""/*resuable code */}
  .container{
    max-width: 120rem;
    margin: 0 auto;
    
  }
  .grid{
    display: grid;
    gap: 9rem;   
  }
  .grid-two-column{
    grid-template-columns: repeat(2,1fr);
  }
  .grid-three-column{
    grid-template-columns: repeat(3,1fr);
  }
  .grid-four-column{
    grid-template-columns: repeat(4,1fr);
  }
  .grid-five-column{
    grid-template-columns: repeat(5,1fr);
  }
  .btn{
    background:linear-gradient(to left,#74ebd5,#9face6);;
    padding: 0.5rem 0.5rem;
    
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 4px;
  }
  .btn:hover, .btn:active{
    box-shadow:0px 20px 20px 0px rgb(132 144 255/30%);;
    transition: all 0.3s ease;
    color:black;
    
    
  }


  `;