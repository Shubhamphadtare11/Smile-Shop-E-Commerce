import React from 'react';
import styled from "styled-components";

import {TbTruckDelivery} from "react-icons/tb" ; 
import {MdSecurity} from "react-icons/md" ;
import {GiReceiveMoney} from "react-icons/gi" ;
import {RiSecurePaymentLine} from "react-icons/ri" ;



const Services = () => {
  return (
    <Wrapper>
    <div className='container'>
       
        <div className='grid grid-three-column services-div'>
            <div className='services-1'>
                <TbTruckDelivery className="icon"/>
                <h3>Super Fast and Free Delivery</h3>
                
            </div>
            <div className='grid grid-two-row'>
                <div className="services-colum-2">
                    <MdSecurity className="icon"/>
                    <h3>Non-contact Shipping</h3>
                </div>
            
                <div className="services-colum-2">
                    <GiReceiveMoney className="icon"/>
                    <h3>Money-back Guaranteed</h3>
                </div>

            </div>
            

            <div className='services-3'>
                <RiSecurePaymentLine className="icon"/>
                <h3>Super Secure Payment system</h3>

            </div>

        </div>
        
    </div>
    </Wrapper>
    
  )
}
const Wrapper =styled.section`
${""/*.container{
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    
}*/}
padding:5rem 0;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,103,1) 35%, rgba(0,212,255,1) 100%);
.services-div{
    
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
  }
  ${""/*.grid{
    display: grid;
    gap: 9rem;
    
    
}


.grid-two-row{
   
    grid-template-rows: repeat(2,1fr);
    
}*/}
.grid-two-row{
   
    grid-template-rows: repeat(2,1fr);
    
}

.services-1,.services-3{
    width: auto;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background-color: aquamarine;
    text-align: center;
    box-shadow: rgba(0,0,0,0.05)0px 1px 2px 0px;
    flex-direction:column;
    padding:2rem;
}


.services-colum-2{
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.05)0px 1px 2px 0px;
    padding:2rem;
}
.container h3{
    font-size: 1.5rem;
    margin-top: 1.4rem;
}
.icon{
    color: #5138ee;
    width: 5.5rem;
    height: 5.5rem;
    padding: 1.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin:1.2rem;
    
}
@media screen and (max-width: 1100px) {
    .container{
      max-width:90rem;
    }
    html{
        font-size:50%;
    }
    .grid{
        gap:2.5rem;
    }
    
    
}
@media screen and (max-width: 880px) {
    .container{
      max-width:70rem;
      b
    }
    html{
        font-size:50%;
    }
    .grid{
        gap:2.5rem;
    }
    
    
    .services-div{
        flex-direction:column;
    }
    
    
}
@media screen and (max-width: 370px) {
    .container h3{
        font-size: 1.2rem;
        margin-top: 1.4rem;
    }
    .icon{
        color: #5138ee;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        border-radius: 50%;
        background-color: #fff;
        margin:1rem;
        
    }
}







`;

export default Services