import React, { useEffect }from 'react';
import { useParams } from 'react-router-dom';
import{useProContext}from "./Context/ProductContext";
import PageNavigation from './components/PageNavigation';
import {TbTruckDelivery,TbReplace} from "react-icons/tb" ;
import {MdSecurity} from "react-icons/md" ;
import MyImage from './components/MyImage';
import FormatPrice from './Helper/FormatPrice';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import AddToCart from './components/AddToCart'


 

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const{isSingleLoading,singleProduct,getSingleProduct}=useProContext();
    const {id}=useParams();
    const{
      name,company,price,stars,stock,reviews,image,description}=singleProduct;
    

    //for single product api call
    useEffect(() => {
      getSingleProduct(`${API}?id=${id}`);
    }, []);

    if(isSingleLoading){
      return <div>Loading...</div>
    }
   
    
  return (
    <Wrapper>
    
    <PageNavigation title={name} />
    <div className="container">
      <div className="grid grid-two-column">
        {/* product Images  */}
        <div className="product_images">
        {<MyImage imgs={image} />}
        </div>

        {/* product dAta  */}
        <div className="product-data">
          <h2>{name}</h2>
          <div className='ratings'>
          <Rating value={stars}readOnly/>
          <p>{reviews} reviews</p>
          </div>
          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Nishi Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>

          <div className="product-data-info">
            <div>
              Available:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </div>
            <div>
              ID : <span> {id} </span>
            </div>
            <div>
              Brand :<span> {company} </span>
            </div>
          </div>
          <hr/>
          {stock > 0 && <AddToCart products={singleProduct}/>}
        </div>
        
      </div>
  
    </div>
 
  </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    
    background-color:wheatish;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .grid{
    display:grid;
    gap:2rem;
    
   
    margin:0 4rem;
  }
  .grid-two-column{
    grid-template-columns:repeat(2,1fr);
  }
  hr {
    max-width: 100%;
    width: 100%;
    /* height: 0.2rem; */
    border: 0.1rem solid #000;
    
  }

  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:0.3rem
    h2{
      text-transform: captalise;
    }
  }
  .ratings{
    display: flex;
    flex-direction: row;
    align-items:center;
    gap:1rem;
    
  }
  .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex_direction:row;
      align-items: center;
      border-bottom: 1px solid #ccc;
     
     
  }
  .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          padding: 0.3rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color:red;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: 1.5rem;
      span {
        font-weight: bold;
      }
    }
   
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 700px) {
    margin: 0 2.4rem;
    .grid-two-column{
      grid-template-columns:repeat(1,1fr);
    }
  }
`;



export default SingleProduct