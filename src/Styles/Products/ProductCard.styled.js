import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.colorOnyx};
  width: 17em;
  height: 430px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.colorTimberWolf};
  background: ${(props) => props.theme.colors.colorTeal};
  .img-container {
    img {
      height: 355px;
      width: 100%;
      object-fit: cover;
      object-position: top;
      margin-bottom: 0.5rem;
    }
  }

  .bottom {
    padding: 10px;
    .bottom-title {
      line-height: 1.4;
      text-transform: none;
      font-weight: normal;
      font-size: 0.8125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .fav {
        color: ${(props) => props.theme.colors.colorLavender};
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    .bottom-price {
      text-transform: none;
      line-height: 1.4;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background: none;
        border: none;
        .cart {
          color: ${(props) => props.theme.colors.colorMaize};
          font-size: 1.2rem;
          cursor: pointer;
        }
      }
    }
  }
`;
export default ProductCard;
