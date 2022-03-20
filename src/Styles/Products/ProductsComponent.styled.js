import styled from 'styled-components';

const ProductsComponent = styled.div`
  width: 100vw;
  /* height: 131vh; */
  max-width: 100%;
  padding: 20px 30px 20px 30px;
  margin: 0 auto;

  &.products {
    display: grid;
    gap: 10px;
    grid-template-areas:
      'img img img img'
      'side list list list'
      'side list list list'
      'side list list list';
    /* grid-template-rows: 1fr 1fr 1fr 1fr; */
    grid-template-columns: 1fr 3fr;
    .products {
      &__item {
        &-img {
          grid-area: img;
          height: 50vh;

          .img-container {
            object-fit: cover;
            object-position: top;
            height: fit-content;
            width: fit-content;
          }
        }

        &-side {
          grid-area: side;
        }

        &-list {
          grid-area: list;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }
      }
    }
  }
`;

export default ProductsComponent;
