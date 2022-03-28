import styled from "styled-components";

export const CartItemContainer = styled.article`
  &.cart-item {
    position: relative;
    padding: 10px;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;

    .cart-item {
      &--remove-completely {
        position: absolute;
        right: 0px;
        top: -13px;
        border: none;
        border-radius: 10px;
        background-color: white;
        color: red;
        width: 50px;
        height: 50px;
        z-index: 10;

        &:hover {
          svg {
            transform: rotate(180deg);
          }
        }

        svg {
          transition: transform 0.5s ease-out;
          width: 100%;
          height: 100%;
        }
      }

      &__image {
        /* width: 200px;
        height: 250px; */
        border: none;

        img {
          max-width: 100%;
          width: 100%;
          object-fit: cover;
          transition: all 1s ease-out;

          &:hover {
            opacity: 0.8;
          }
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
