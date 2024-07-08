import React from 'react'
import {BsFillGridFill} from 'react-icons/bs';
import {BsList} from 'react-icons/bs';
import styled from 'styled-components';
import {useFilterContext} from "../Context/FilterContext"
const Sort = () => {
  const {filter_products,setGridView ,setListView,grid_view,sorting}=useFilterContext()
  return (
    <Wrapper>
    {/*<div className='grid grid-three-column'>
      
      <div className='icon-div'>
      
        <button  onClick={setGridView} className={grid_view ? "active btn" : "btn"}>
          <BsFillGridFill/>
        </button>
        <button onClick={setListView} className={!grid_view ? "active btn" : "btn"}>
          <BsList/>
        </button>
      </div>
      <div>{`${filter_products.length}`} available products</div>
      <div className="sort-selection">
        
          <label htmlFor="sort"></label>
          <select name="sort" id="sort"onClick={sorting}>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
        
          </select>
        
      </div>
      </div>*/}


      <div className='sorting-list--grid'>
      
      
      
      <button  onClick={setGridView} className={grid_view ? "active sort-btn" : "sort-btn"}>
        <BsFillGridFill className='icon'/>
      </button>
      <button onClick={setListView} className={!grid_view ? "active sort-btn" : "sort-btn"}>
        <BsList className='icon'/>
      </button>
    </div>
    <div className="product-data">
    <p>{`${filter_products.length} Product Available`}</p>
    </div>
    <div className="sort-selection">
        <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className="sort-selection--style"onClick={sorting}>
          
          <option value="highest">Price(highest)</option>
          
          <option value="lowest">Price(lowest)</option>
          
          <option value="a-z">Price(a-z)</option>
    
          <option value="z-a">Price(z-a)</option>
      
        </select>
       </form>
    </div>
      

    
    </Wrapper>
  )
}
const Wrapper= styled.section`
${""/*.grid{
  display: grid;
  gap: 9rem;
  margin-top:1rem;
  
}

.grid-three-column{
  grid-template-columns: repeat(3,1fr);
}
.btn{
  background-color: grey;
    padding: 1rem;
    margin: 0 0.5rem;

    color: black;
    
    cursor: pointer;
    font-size:1rem;
    border: none;
    
    
   
}
.active{
  background-color: black;
  color: white;
}*/}
display:flex;
justify-content:space-between;
margin-top:5rem;
.sorting-list--grid{
  display:flex;
  gap:2rem;
  .sort-btn{
    padding:0.8rem 1rem;
    border:none;
    display:flex;
    justify-content:center;
    align--items:center;
    cursor:pointer;


  }
  .icon{
    font-size:1.6rem;
  }
  .active{
    background-color:black;
    color:white;
  }
}
.sort-selection .sort-selection--style{
  cursor:pointer;
  padding:0.5rem;

  option{
    padding:0.5rem;
    cursor:pointer;
    height:0.5rem;

  }
}
@media screen and (max-width: 1000px) {
  .product-data{
    display:none;
  }
  .sorting-list--grid{
    display:flex;
    flex-direction:row;
    gap:3.5rem;
  }
}
@media screen and (max-width: 300px) {
  flex-direction:column;
  gap:1.5rem;
.sort-selection .sort-selection--style{
  cursor:pointer;
  padding:0.3rem;
  margin-left:0.2rem;

  option{
    padding:0.3rem;
    cursor:pointer;
    height:0.5rem;

  }
}
}
`

export default Sort