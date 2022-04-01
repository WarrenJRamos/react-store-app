import styled from "styled-components";

export const CartHeaderContainer = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  .price {
    font-size: 30px;
    text-align: center;
    color: #587b7f;
    text-transform: uppercase;
  }

  .cart-button {
    border-radius: 5px;
    color: #587b7f;
    padding: 10px 0;
    font-size: 23px;
    border: none;
  }

  .checkout-button {
    font-weight: bold;
    background-color: white;
  }

  .clear-button {
    background-color: #f0f6f6;
    color: rgba(255, 0, 0, 1);
  }
`;
