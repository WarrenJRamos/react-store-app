import styled from "styled-components";

export const CartItemContainer = styled.article`
  &.cart-item {
    padding: 10px;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;

    &:hover {
      .cart-item__image {
        img {
          opacity: 0.8;
        }
      }
    }

    .cart-item {
      &__image {
        width: 200px;
        height: 250px;
        border: none;

        img {
          max-width: 100%;
          width: 100%;
          object-fit: cover;
          transition: all 1s ease-out;
        }
      }

      &__title {
        margin-top: 8px;
        color: white;
        font-size: 16px;
      }

      &__price {
        color: white;
        font-size: 16px;
      }

      &__actions {
        display: flex;
        gap: 10px;

        button {
          color: #e2c044;
          font-size: 17px;
          text-transform: uppercase;
          background-color: transparent;
          border: none;
          /* border-bottom: 2px solid #e2c044; */
        }
      }
    }

    /* &::after {
      content: "";
      display: block;
      margin-top: 5px;
      width: 100%;
      height: 2px;
      background-color: black;
    } */
  }
`;
