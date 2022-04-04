import styled from 'styled-components';

export const CartHeaderContainer = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  width: 92%;
  height: 25%;
  left: 10px;
  background: white;
  z-index: 100;
  .price {
    /* font-size: 30px;
    text-align: center;
    color: #587b7f; */
    font-size: 1.3rem;
    text-align: center;
    color: #070707;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: flex-start;
    text-transform: uppercase;
  }

  .cart-button {
    border-radius: 5px;
    /* color: #587b7f; */
    padding: 10px 0;
    font-size: 23px;
    border: none;

    color: white;
    text-transform: uppercase;
    border-color: #000;
  }

  .checkout-button {
    font-weight: bold;
    background: #000 none;
    /* background-color: white; */
    span {
      color: #e2c044;
    }
  }

  .clear-button {
    background-color: #f0f6f6;
    /* color: rgba(255, 0, 0, 1); */
    color: rgb(0 0 0);
    text-decoration: underline;
    text-underline-position: under;
    text-transform: uppercase;
    -webkit-text-decoration-color: rgba(0, 0, 0, 0.5);
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
`;
