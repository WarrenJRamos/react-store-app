import styled from "styled-components";

const ProductsComponent = styled.div`
  width: 100vw;
  /* height: 131vh; */
  max-width: 100%;
  /* padding: 20px 30px 20px 30px; */
  margin: 0 auto;

  &.products {
    /* display: grid;
    gap: 10px; */
    /* background: ${(props) => props.theme.colors.colorBlack}; */
    /* grid-template-areas:
      "img img img img"
      "side list list list"
      "side list list list"
      "side list list list"; */

    /* grid-template-areas:
      "img img img img"
      "list list list"
      "list list list"
      "list list list"; */

    /* grid-template-rows: 1fr 1fr 1fr 1fr; */
    /* grid-template-columns: 1fr 3fr; */

    .products {
      &__item {
        &-img {
          background-color: black;
          /* grid-area: img; */
          height: 50vh;
          position: relative;
          background: #0f0f0f;
          border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);

            .product__header {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              height: 100%;
              text-align: center;
              text-transform: uppercase;
              font-size: 7rem;
              color: white;

              &::nth-letter(odd) {
                color: yellow;
              }
            }
          }

          .img-container {
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }
        }

        /* &-side {
          grid-area: side;
        } */

        &-list {
          /* grid-area: list; */
          /* background-color: white; */
          /* background: linear-gradient(
            rgba(0, 0, 0, 0.9),
            rgba(255, 255, 255, 0.5)
          ); */
          background-color: black;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 19px;
          padding: 37px;
        }
      }
    }
  }
`;

export default ProductsComponent;
