import styled from "styled-components";

const ProductCard = styled.div`
  border: 1px solid #c3c3c3;
  .top {
    div {
      display: flex;
      color: #fff;
      box-sizing: border-box;
      border: none;
      margin: auto;
      font-family: "Crimson Pro";
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
      font-size: 0.9375rem;
      line-height: 1.3rem;
      a {
        text-decoration: none;
      }
      span {
        cursor: pointer;
        border: none;
        text-decoration: none;
        color: white;
      }
    }

    button {
      .fav {
        display: flex;
        height: auto;
        padding-right: 0;
        color: ${(props) => props.theme.colors.colorTimberWolf};
        cursor: pointer;
      }
    }

    button {
      .faved {
        display: flex;
        height: auto;
        padding-right: 0;
        color: ${(props) => props.theme.colors.colorTimberWolf};
        cursor: pointer;
      }
    }
  }

  /* :hover {
    border: 1px solid #c3c3c3;
    .top {
      div {
        display: flex;
        color: #fff;
        box-sizing: border-box;
        border: none;
        margin: auto;
        font-family: 'Crimson Pro';
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
        font-size: 0.9375rem;
        line-height: 1.3rem;
        a {
          text-decoration: none;
        }
        span {
          cursor: pointer;
          border: none;
          text-decoration: none;
          color: white;
        }
      }

      button {
        .fav {
          display: flex;
          height: auto;
          padding-right: 0;
          color: ${(props) => props.theme.colors.colorTimberWolf};
          cursor: pointer;
        }
      }

      button {
        .faved {
          display: flex;
          height: auto;
          padding-right: 0;
          color: ${(props) => props.theme.colors.colorTimberWolf};
          cursor: pointer;
        }
      }
    }
  } */
  padding: 10px;
  width: 17em;
  height: 430px;
  box-sizing: border-box;
  border: none;
  color: ${(props) => props.theme.colors.colorTimberWolf};
  background: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease-in-out;
  .img-container {
    img {
      height: 319px;
      /* height: 355px; */
      width: 100%;
      object-fit: cover;
      object-position: top;
      margin-bottom: 0.5rem;
      filter: drop-shadow(91px 3px 140px gray);
      opacity: 1;
    }
  }

  .top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    font-size: 1.2rem;

    div {
      display: none;
      span {
      }
    }

    button {
      background: none;
      border: none;
      /* .fav {
        display: none;
      }
      .faved {
        display: none;
      } */
    }
  }

  .bottom {
    .bottom-title {
      max-width: 85%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      font-size: 0.9375rem;
      line-height: 1.3rem;
    }
    .bottom-price {
      text-transform: none;
      font-size: 0.9375rem;
      line-height: 1.3rem;
      text-align: center;

      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      justify-content: flex-end;

      span {
        margin-right: 25%;
      }

      form {
        input {
          display: none;
        }
      }

      :hover {
        form {
          input {
            overflow: visible;
            width: 30px !important;
            color: black;
            display: inline;
          }
        }
      }

      button {
        background: none;
        border: none;
        margin-left: 5px;
        .cart {
          color: ${(props) => props.theme.colors.colorTimberWolf};
          font-size: 1.2rem;
          cursor: pointer;
        }
      }
    }
  }
`;
export default ProductCard;
