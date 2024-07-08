import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className=" grid grid-three-column">
        
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  
  
  ${""/*.container {
    max-width: 120rem;
  } 
  .grid {
    display: grid;
    gap: 3.2rem;
  }
  .grid-three-column{
    grid-template-columns: repeat(3,1fr);
}*/}
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    
    padding:1px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
    img {
      max-width: 100%;
      
      
      height: 15rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color:#f9f9ff;
   
    
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color:black;
    }
    h3 {
      color:black;
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
        text-decoration:none;
      }
    }
  }
  @media screen and (max-width: 1350px) {
    padding: 3rem 0;
    .grid-three-column{
      grid-template-columns: repeat(2,1fr);
  }
 
}
@media screen and (max-width: 1050px) {
  .grid-three-column{
    grid-template-columns: repeat(1,1fr);
}

}
 

@media screen and (max-width: 460px) {
  .section{
    max-width:18rem;
  }
}

@media screen and (max-width: 300px) {
  figure{
    width:80%;
  }

.card{
  width:95%;
}
.card-data-flex h3{
font-size:1.5rem;
}
.card-data-flex p{
  font-size:1.5rem;
  }
}
`;

export default GridView;
