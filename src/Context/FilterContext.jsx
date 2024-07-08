import React, { useContext,useReducer,useEffect} from "react";
import {useProContext} from "./ProductContext";
import reducer from '../reducer/FilterReducer';
const FilterContext= React.createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category:"All",
      company:"All",
      color:'All',
      maxPrice:0,
      price:0,
      minPrice:0
    }
}
 export const FilterProduct=({children})=>{
    const {products} = useProContext();
    console.log(products)
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      },[products]);

      //to set grid view
      const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
      };
      //to set list view
      
      const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
      };
      // to get dropdown value 
      const sorting = () => {
        dispatch({ type: "GET_SORT_VALUE" });
      };
      //to sort the product based on dropdown value
      useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS"});
      },[state.sorting_value,products,state.filters]);
    

      const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
      };
      const clearFilterValue=()=>{
        return dispatch({ type: "CLEAR_FILTERS_VALUE"}); 
      }




    return(
        <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilterValue}}>
            {children}
        </FilterContext.Provider>
    )
  


 }

 export const useFilterContext=()=>{
    return(
        useContext(FilterContext)
    )
 }