import React from 'react'
import {useProContext} from "../Context/ProductContext";
import Product from "./Product";
import styled from "styled-components";




const FeatureProduct = () => {
    const{isLoading,featuredProducts}=useProContext();
    
    if(isLoading){
        return <div>....Loading</div>
    }
  return (
     
    <Wrapper>
    <div className="container">
      
      <div className="intro-data">Check Now!</div>
      <div className="common-heading">Our Feature Services</div>
        
        
        <div className="grid grid-three-column" >
            {featuredProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })}


        </div>
      

        
        
    </div>
    </Wrapper>
    
    
  )
}

const Wrapper = styled.section`
  ${""/*.container {
    max-width: 100rem;
    padding: 2rem 0;
    background-color:skyblue;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  
  .grid{
    display: grid;
    gap: 9rem;
    
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    padding: 0rem 1.5rem;
    
}
.feature-div{
  max-width: 75rem;
  
  
} */}
padding:5rem 0;
background-color:rgba(148, 175, 181, 0.6);
.container{
  max-width: 120rem;
}
.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}
 .intro-data {
  margin-bottom:0;
  text-transform: uppercase;
  color: #5138ee;
  font-size:2rem;
}
.card {
  background-color: white;
  border-radius: 1rem;
}
.card:hover{
  transform: translatey(-2rem);
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow:hidden;
  transition:all 0.2s linear;
  ${""/*&::after{
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    background-color:rgba(173, 181, 148, 0.6);
    left:0%;
    top:0rem;
    cursor:pointer;
    
  }*/}
  &:hover::after{
    width:100%;
  }
}
  img {
    max-width: 90%;
    margin-top: 2rem;
    height: 15rem;
    transition: all 0.2s linear;
  }
  .card-data {
    padding: 0 2rem;
  }
  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  
  a {
    color:black;
    font-size:1.4rem:

   
  }
  h3,p{
    color:black;
  }
}
@media screen and (max-width: 555px) {
  .common-heading {
    font-size: 0.5rem;
    font-weight: 100;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }
}
@media screen and (max-width: 1000px) {
  
  .container{
    display: flex;
    justify-content:center;
    align-items: center;
    
    padding:2rem 8rem;
    flex-direction:column;
  }
  .common-heading {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }
   .intro-data {
    margin-bottom:0;
    text-transform: uppercase;
    color: #5138ee;
    font-size:1.5rem;
  }



}
  @media screen and (max-width: 1200px) {
    padding:5rem 5rem;
    .container{
      max-width: 90rem;
    }
    .grid-three-column{
      grid-template-columns: repeat(1,1fr);
  }

  .card{
    margin: 0 35rem;
  }
  
  img {
    max-width: 90%;
    margin-top: 2rem;
    height:17rem;
    transition: all 0.2s linear;
  }
  
 
  
  }
  @media screen and (max-width: 1400px) {
    img {
      max-width: 70%;
      margin-top: 2rem;
      height: 12rem;
      transition: all 0.2s linear;
    }
    .grid{
      gap: 5rem;
      
  }
  }






`;

export default FeatureProduct