import styled from 'styled-components';

export const SelectedComponent = styled.div`
  display: flex;
  height: auto;
  /* height: 100vh; */
  padding: 20px 30px 20px 30px;
  color: #f0f6f6;
  padding-top: 100px;
  background: #393e41;
  justify-content: space-evenly;
  align-content: center;
  color: ${(props) => props.theme.colors.colorOnyx};
  background: ${(props) => props.theme.colors.colorTimberWolf};
  /* background: ${(props) => props.theme.colors.colorOnyx}; */
  .img-container {
    width: 32%;
    /* background: ${(props) => props.theme.colors.colorTimberWolf}; */
    /* background: ${(props) => props.theme.colors.colorOnyx}; */
    padding: 10px;
    height: 62%;
  }

  .content {
    width: 50%;
    height: 70vh;
    color: #393939;
    h1 {
      font-size: 2.75rem;
      line-height: 1.23;
      font-weight: 500;
    }
    &-name {
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 400;
      font-size: 1.6rem;
      text-transform: uppercase;
    }

    &-price {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .span1 {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.5;
        margin-right: 15px;
        margin-bottom: 4px;
      }
      .span2 {
        display: inline-flex;
        gap: 5px;
        font-size: 1.3rem;
        align-items: center;
        font-size: 1.3rem;
        vertical-align: baseline;
        text-transform: uppercase;
      }
    }
    &-interest {
      cursor: pointer;
      .payment {
        font-size: 1.2rem;
        margin-right: 7px;
      }
      .pay {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }

    &-desc {
      font-size: 1.6rem;
      line-height: 1.5;
      margin-top: 10px;
      font-weight: 400;
    }
    &-size {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column-reverse;
      .picker {
        margin-top: -9px;
      }
      .css-11zohuh-MuiSvgIcon-root {
        color: #587b7f;
      }
      .css-1hbvpl3-MuiSvgIcon-root {
        fill: black;
      }
      .chart {
        gap: 32px;
        margin-left: 11px;
        font-size: 1.2rem;
        display: flex;
        font-style: italic;
        font-weight: 700;
      }
    }

    &-buttons {
      display: flex;
      margin-top: 23px;
      gap: 20px;
      font-size: 1.6rem;
      line-height: 1.5;
      align-content: center;
      align-content: flex-start;
      flex-direction: column;

      .cart-btn {
        background: #000 none;
        border-color: #000;
        color: #fff;
        display: flex;
        font-weight: 400;
        gap: 10px;
        width: 78%;
        height: 50px;
        align-items: center;
        justify-content: center;
      }

      .wish-btn {
        display: flex;
        gap: 10px;
        span {
          .add {
            font-size: 45px;
          }
        }
        button {
          box-sizing: content-box;
          background-color: transparent;
          border-left: 0;
          border-right: 0;
          border-top: 0;
          display: inline;
          gap: 10px;
          display: flex;
          padding-left: 0;
          padding-right: 0;
          align-items: center;
        }
      }
    }
  }
`;
