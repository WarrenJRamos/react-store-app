import styled from 'styled-components';

export const CartItemContainer = styled.article`
  &.cart-item {
    position: relative;
    padding: 10px;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    /* flex-direction: column; */
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .cart-item {
      &--remove-completely {
        position: absolute;
        /* right: 10px; */
        top: -6px;
        border: none;
        border-radius: 10px;
        background-color: white;
        color: #878c8cc2;
        width: 30px;
        height: 35px;
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
        width: 124px;
        height: 100%;
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
        /* margin-top: 8px; */
        color: #587b7f;
        font-size: 1rem;
        text-align: left;
        width: 86%;
        line-height: 18px;
        /* font-size: 20px; */
      }

      &__qty {
        letter-spacing: 0.5px;
        font-size: 0.8rem;
        line-height: 0.8125rem;
        color: #587b7f;
      }

      &__price {
        letter-spacing: 0.5px;
        font-size: 0.8rem;
        line-height: 0.8125rem;
        color: #587b7f;
        /* font-size: 0.95rem; */
      }

      &__actions {
        display: flex;
        gap: 10px;

        button {
          font-size: 29px;
          text-transform: uppercase;
          background-color: transparent;
          border: none;
          /* border-bottom: 2px solid #e2c044; */

          &.cart-item__actions--add {
            color: #587b7f;
          }
          &.cart-item__actions--remove {
            /* color: red; */
            color: #e2c044;
          }
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
