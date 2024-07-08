const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, products } = action.payload;

      // Ensure state.cart is initialized correctly
      if (!state.cart) {
        state.cart = [];
      }

      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;

            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: products.name,
          color,
          amount,
          image: products.image[0].url,
          price: products.price,
          max: products.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_FROM_CART":
      let updatedCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };

    case "DECREASE":
      let decreasedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: decreasedCart,
      };

    case "INCREASE":
      let increasedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: increasedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default CartReducer;
