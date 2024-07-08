import React from 'react'
import styled from "styled-components";

import { NavLink } from 'react-router-dom';

const HeroSection = (props) => {
  return (
    <Wrapper>
    <div className='container'>
    <div className='grid grid-two-column hero-section'>  
    <div className='hero-section-data'>
        <h1 className='intro'>Get 15% off</h1>
        <h1>on your first Online order</h1>
        <h2>Shop at Sale Prices before the Sale Starts!</h2>
        <h3>60-90% Off</h3>
        <NavLink to="/products" className="btnshop">
            <button className='btn'>Shop Now</button>

        </NavLink>

    </div>
    <div className='hero-section-pic'>
        <figure>
            <img src='images/tips-for-innovative-ideas-from-electronics-technology-industry.jpg' alt='hero' className='img-style'/>
        </figure>
        

    </div>
    </div>
    </div>
    </Wrapper>
    
    
  )
};

const Wrapper =styled.section`
.intro{
   padding: 3rem;
    border-radius: 2rem;
   background-color: rgb(98, 43, 243);
}
h1{
    font-weight:bold;
    font_size:900rem;
    margin:2rem;
}
h2{
    font-weight:400;
    font_size:350rem;
    margin:2rem;
}
h3{
    font-weight:400;
    font_size:350rem;
    margin:2rem;
}

${""/*.container{
    max-width: 130rem;
    margin: 0 auto;
    
    padding: 2rem 5rem;
    
}
    

.grid{
    display: grid;
    margin-top:3rem;
    gap: 9rem;
    max-width: 80rem;
    
    

    
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
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
    
    
} */}

.img-style{
    height: 30rem;
    min-width: 30rem;
}
.hero-section-data{
    padding: 5rem;

}
    .btnshop{
    margin-left: 2rem;
    }
.hero-section-data p{

    margin: 2rem 0;
  
}
.hero-section-data h1{

    text-transform: capitalize;
    font-weight: bold;
  
}
.hero-section-data .intro-data{

    margin-bottom: 0;
  
}
.hero-section-pic{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
figure{
    position: relative;
}

@media screen and (max-width: 1200px) {
    margin-bottom:2rem;
    .grid-two-column{
        grid-template-columns:1fr;
    }
    .grid {
      gap: 5rem;
      padding:0 3rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 90%;
      left: 15rem;
      top: -10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
    .hero-section{
        display:flex;
        justify-content:center;
        align-item;center;
        flex-direction:column;
        
    
    }
    @media screen and (max-width: 500px) {
        h1{
            font-size:2.5rem;
        }
        h2{
            font-size:1.5rem; 
        }
        h3{
            font-size:1rem; 
        }
        .img-style{
            height: 20rem;
            min-width: 15rem;
            padding:1rem;
        }
        .hero-section-data{
            padding: 3rem;
        
        }
        .btn{
            font-size:1rem;
        }

  }
  @media screen and (max-width: 340px) {
    h1{
        font-size:1.5rem;
    }
    h2{
        font-size:1rem; 
    }
    h3{
        font-size:1.5rem; 
    }
    .hero-section-pic img{
        height: 20rem;
        width: 20rem;
       
    }
    
    .hero-section-data{
        padding: 2rem;
    
    }
    
   
    

}
  
  `;

export default HeroSection;