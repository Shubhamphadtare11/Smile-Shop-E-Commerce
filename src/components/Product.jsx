import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import styled from "styled-components";

const Product = (curElem) => {
  const { id, name, image, price, /*category*/ } = curElem;
  return (
    
    <NavLink to={`/singleproduct/${id}`}>
     
     <MainCard>
      <div className="card">
        <figure>
          {/*<figcaption className="caption">{category}</figcaption>*/}
          <img src={image} alt={name} loading="lazy"/>
          
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3 >{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price}/>}</p>
          </div>
        </div>
      </div>
      </MainCard>
      
    </NavLink>
   
  );
};


export default Product;




const MainCard=styled.section`

.card{
    box-shadow: 0 0 transparent, 0 0 transparent, 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
        padding: 5px 0;
}

`;
