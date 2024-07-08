import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";



const Products = () => {
 
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="filter-section">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
${""/*.container{
 
  margin: 0 auto;
  padding: 2rem 2rem;
  
}

  
  .grid{
    display: grid;
    gap: 9rem;
    
}*/}

.grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media screen and (max-width: 900px) {
    .container{
      
       margin: 0 2rem;
       padding: 2rem 2rem;
       
     }
     .grid{
     
      gap: 1rem;
      
  }
  .sort-filter{

  }
  } 
  @media screen and (max-width: 1280px) {
    .grid-filter-column {
      grid-template-columns: 0.2fr 0.7fr;
    }
    .filter-section{
      margin-left:0.5rem;
      padding:0.1rem;
    }
  }
  @media screen and (max-width: 590px) {
    .filter-section{
      margin-left:0.5rem;
      
      max-width:15rem;
      display:flex;
      justify-content:start;
    }
    .grid{
       gap: 0.5rem;
    }
  }
  @media screen and (max-width: 460px) {
    .filter-section{
      margin-left:0rem;
      
      max-width:13rem;
      display:flex;
      justify-content:start;
      padding:0.5rem;
      font-size:0.5rem;
    }
    .grid{
       gap: 3rem;
    }
    .main-product{
      max-width:18rem;
    }
    .product-view--sort{
      padding-right:3rem;
      
    }
    .container{
 
     
      padding: 2rem 0rem;
      
    }
    .filter-section{
      margin-left:0rem;
      
      
    }
    
}
@media screen and (max-width: 380px) {
  .filter-section{
    margin-left:0rem;
    
    max-width:13rem;
    display:flex;
    justify-content:start;
    
    font-size:0.5rem;
  }
  .grid{
     gap: 0rem;
  }
  .main-product{
    max-width:18rem;
  }
  .product-view--sort{
    padding-right:3rem;
    
  }
  .container{

   
    padding: 2rem 0rem;
    margin-left:0.5rem;
    
  }
  .filter-section{
    margin-left:0rem;
    
    
  }
 
}
  
`;


export default Products;