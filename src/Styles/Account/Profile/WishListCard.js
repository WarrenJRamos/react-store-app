import styled from 'styled-components';

const WishCard = styled.div`
  padding: 10px;
  width: 17em;
  height: 337px;
  box-sizing: border-box;
  border: none;
  color: ${(props) => props.theme.colors.colorTimberWolf};
  /* background: ${(props) => props.theme.colors.colorBlack}; */
  transition: all 0.3s ease-in-out;
  .img-container {
    img {
      /* height: 319px; */
      height: 233px;
      width: 100%;
      object-fit: cover;
      object-position: top;
      margin-bottom: 0.5rem;
      /* filter: drop-shadow(91px 3px 140px gray); */
      opacity: 1;
    }
  }
  .bottom {
    .bottom-title {
      max-width: 85%;
      max-height: 39%;
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

export default WishCard;
