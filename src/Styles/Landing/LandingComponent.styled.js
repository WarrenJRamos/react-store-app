import styled from "styled-components";

const LandingComponent = styled.div`
  width: 100%;
  height: 140vh;
  &.landing {
    .landing {
      &-carousel {
        width: 95%;
        position: absolute;

        .slick-prev:before {
          color: ${(props) => props.theme.colors.colorTeal};
        }
        .slick-next:before {
          color: ${(props) => props.theme.colors.colorTeal};
        }

        > div {
          object-fit: cover;
          object-position: top;
          height: 80vh;
          width: 100%;
        }
      }

      &-sale {
        position: absolute;

        width: 96%;
        top: 725px;
        height: 46vh;
        color: ${(props) => props.theme.colors.colorTeal};
        .title {
          span {
            display: flex;
            justify-content: flex-start;
            font-weight: 600;
            font-size: 23px;
            letter-spacing: 0.12em;
            line-height: 1;
            border-bottom: 1px solid rgb(88 123 127);
            padding: 16px;
          }
        }

        .sale-cards {
          display: flex;
          margin-top: 15px;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: space-evenly;
          align-items: center;
          align-content: center;
          .card-container {
            border: 1px solid ${(props) => props.theme.colors.colorTimberWolf};
            width: 382px;
            height: 373px;
            box-sizing: border-box;
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

                .cart {
                  color: ${(props) => props.theme.colors.colorMaize};
                  font-size: 1.2rem;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default LandingComponent;
