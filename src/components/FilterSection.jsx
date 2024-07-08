import {useFilterContext} from "../Context/FilterContext"
import {FaCheck} from "react-icons/fa"
import styled from "styled-components";
import FormatPrice from "../Helper/FormatPrice"
const FilterSection = () => {
    const{updateFilterValue, filters: {text,category,color,price,maxPrice,minPrice},all_products,clearFilterValue}=useFilterContext();
    const getCategoryData=(data,attbr)=>{
      let newValue=data.map((cur)=>{
        return cur[attbr]});
      if(attbr==="colors")
        return (newValue=["All",...new Set([].concat(...newValue))])
      else
        return  (newValue=["All",...new Set(newValue)])
    }
    
    const categoryData=getCategoryData(all_products,"category")
    const companyData=getCategoryData(all_products,"company")
    const colorData=getCategoryData(all_products,"colors")
    return(
     
    <Wrapper className="abcd">
        
    <div className=" filter-search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
      
    </div>



    <div className="filter-category">
      <h3>Category</h3>
    <div>
      {categoryData.map((curele,index)=>{
        return(
          <button key={index} type="button" name="category" value={curele} className={curele === category ? "active" :" "} onClick={updateFilterValue}>{curele}</button>
  )
      

        
      })}
      </div>
      </div>



      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
        
        <select name="company" id="company" className="filter-company-select"onClick={updateFilterValue}>
        {companyData.map((curele,index)=>{
          return(
            
              <option key={index}value={curele} name="company">{curele}</option>
              )
            })
        }
     
  
        </select>
        </form>
          
        


      </div>
      <div className="filter-colors colors">
        <h3> colors</h3>
        
        <div className="filter-color-style">
          {colorData.map((curele,index)=>{
            if(curele==='All')
              {return <button key={index} type="button" name="color"  value={curele} className="color-all--style"onClick={updateFilterValue}>
              {curele}
            </button>}
            return <button key={index} type="button" name="color" style={{backgroundColor:curele}} value={curele} className={color===curele ? "btnStyle active" : "btnStyle"}  onClick={updateFilterValue}>
              {color === curele ? <FaCheck/>:null}
            </button>
          
          })}
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <p><FormatPrice price={price}/></p>
        <input type="range" min={minPrice} max={maxPrice} value={price} name="price" onChange={updateFilterValue}/>
      </div>
      <div className="Filter-clear">
        <button type="submit" className="btn" onClick={clearFilterValue}>CLEAR FILTERS</button>
      </div>
     

    </Wrapper>
    )
          
          

}
const Wrapper = styled.section`

  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  overflow:hidden;


  
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: white;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color:black;
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color:black;
        font-weight:bold;
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color:red;
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  ${""/*.btn{
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
color: rgb(0,0,0);}*/}
@media screen and (max-width: 460px) {
 .abcd{ max-width:14rem;
  font-size:0.5rem;
  padding:0rem;
 }
 h3{
  font-size:1.5rem;
  padding: 1rem 0;
 
 }
 .filter-company--select {
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  
}
.filter-search {
  input {
    padding: 0.6rem 0.5rem;
    max-width: 70%;
    
  }
}
.filter-category {
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    button {
      border: none;
      background-color: white;
      text-transform: capitalize;
      cursor: pointer;
      font-size:1.3rem;
      &:hover {
        color:black;
      }
    }
    .active {
      border-bottom: 1px solid #000;
      color:black;
      font-weight:bold;
    }
  }
}
.filter-color-style > button{
  font-size:1rem;
}
.Filter-clear > button{
  font-size:1rem;
}
.filter-price{
  
  p{
    font-size:1rem;
  }
  input{
    max-width:10rem;
  }
  button{
    font-size:1rem;
  }
}
.filter-color-style {
  flex-direction:column;
  gap:1rem;
}
}
`;
export default FilterSection;