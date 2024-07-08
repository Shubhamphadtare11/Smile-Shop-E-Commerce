const FilterReducer = (state,action) => {
    switch(action.type){
           case "LOAD_FILTER_PRODUCTS":
              let PriceArr= action.payload.map((curele)=>curele.price);
              let maxPrice=Math.max(...PriceArr);
          

              return{
                ...state,
                filter_products:[...action.payload],
                all_products: [...action.payload],
                filters:{
                  ...state.filters,
                  maxPrice,
                  price:maxPrice
                  
                }
                

            };
            case "SET_GRID_VIEW":
                
                return{
                    ...state,
                    grid_view: true
    
                };
            case "SET_LIST_VIEW":
                return{
                    ...state,
                    grid_view: false
        
                };
            case "GET_SORT_VALUE":
                let userSortValue = document.getElementById("sort");
                let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
                    return {
                      ...state,
                      sorting_value: sort_value,
                    };
            case "SORTING_PRODUCTS":
                let newSortData;
                const{filter_products,sorting_value}=state
                console.log(filter_products)
                let tempSortProduct = [...filter_products];
               
                  if (sorting_value === "highest") {
                    newSortData=tempSortProduct.sort((a,b)=>{ 
                        return b.price-a.price}
                       
                    )
                   
                  }
                  if (sorting_value === "lowest") {
                    newSortData=tempSortProduct.sort((a,b)=>{ 
                        return a.price-b.price}
                       
                    )
                   
                  }
                  if (sorting_value === "a-z") {
                    newSortData=tempSortProduct.sort((a,b)=>
                        a.name.localeCompare(b.name)
                    )
                   
                  }
                  if (sorting_value === "z-a") {
                    newSortData=tempSortProduct.sort((a,b)=>
                        b.name.localeCompare(a.name)
                    )
                   
                  }
                  return {
                    ...state,
                    filter_products:newSortData
                  };


            case "UPDATE_FILTERS_VALUE":
                const { name, value } = action.payload;

                  return {
                    ...state,
                        
                    filters: {
                    ...state.filters,
                    [name]: value,
                          
                        },
                      };
           
            case "FILTER_PRODUCTS":
                let {all_products}=state
                let tempFilterProduct = [...all_products];

                const { text,category,company,color,price } = state.filters;

                  if (text) {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                    });
                    }
                  if (category!=="All") {
                    console.log(category)
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                      return curElem.category===category;
                    });
                    }
                  if (company!=="All") {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                      return curElem.company===company;
                    });
                  }
                  if (color!=="All") {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                      return curElem.colors.includes(color);
                    });
                  }
                  if (price===0) {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price===price
                    )
                  }

                  else{
                    tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price<=price
                    )
                    };
                  
                return {
                  ...state,
                  filter_products: tempFilterProduct,
                };
                case "CLEAR_FILTERS_VALUE":
                  return {
                    ...state,
                    
                    filters: {
                      ...state.filters,
                      text: "",
                      category:"All",
                      company:"All",
                      color:'All',
                     
                      price:state.filters.maxPrice,
                      minPrice:state.filters.maxPrice
                    }
                  }    
                   
                   

            default:
              {
                return state
              }
    }
  }
    export  default FilterReducer;