import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import CartToggleAmount from "./CartToggleAmount";
import { FaTrash } from "react-icons/fa";
import styled from 'styled-components';
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <div className="cart-image--name">
            <div>
              <figure>
                <img src={image} alt={id} />
              </figure>
            </div>
            <div>
              <p>{name}</p>
            </div>
            <div className="color-div">
              <p>color</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}>
              </div>
            </div>
          </div>

          {/* price   */}
          <div className="cart-hide price-column">
            <p>
              <FormatPrice price={price} />
            </p>
          </div>

          {/* Quantity  */}
          <CartToggleAmount
            amount={amount}
            setdecrease={() => setDecrease(id)}
            setincrease={() => setIncrease(id)}
          />

          {/* //Subtotal */}
          <div className="cart-hide">
            <p>
              <FormatPrice price={price * amount} />
            </p>
          </div>

          <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .remove_icon{
  cursor:pointer;
  }

  .grid {
    display: grid;
    margin-top: 3rem;
    gap: 9rem;
    max-width: 80rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
  }

  .grid-five-column {
    grid-template-columns: repeat(5, 1fr);
  }

  .price-column {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }

  .cart-image--name {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: -20rem;
    flex-direction: column;
    text-transform: capitalize;

    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      justify-content: center;
    }

    .color-style {
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
    }
  }

  @media (max-width: 798px) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default CartItem;
