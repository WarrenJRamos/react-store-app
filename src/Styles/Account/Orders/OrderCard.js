import styled from 'styled-components';

const OrderCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .head {
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #dddcdc;
    /* padding: 10px; */
    &-top {
      display: flex;
      flex-direction: column;
      .store {
        padding: 6px;
        font-weight: 700;
        font-size: 19px;
        line-height: 29px;
        background: black;
        letter-spacing: 3px;
        color: #ffffff;
        span {
          color: #e2c044;
        }
      }
      .invoice {
        font-size: 0.8125rem;
        letter-spacing: 0.5px;
      }
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.8125rem;
        letter-spacing: 0.5px;
        margin-top: 19px;
        text-transform: uppercase;
        margin-right: 13px;
      }
    }
  }

  .content {
    width: 100%;
    overflow: overlay;
    height: 80%;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &-card {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      .image {
        width: 93px;
        height: 100%;
        display: flex;
        /* justify-content: space-around; */
        flex-direction: row;
        justify-content: space-between;
        /* flex-direction: column; */
        span {
          color: #587b7f;
          font-size: 10px;
          width: 86%;
          margin-left: 5px;
          min-inline-size: fit-content;
          display: flex;
          align-items: center;
        }
      }

      .qty {
        font-size: 0.8125rem;
        letter-spacing: 0.5px;
      }

      .price {
        font-size: 0.8125rem;
        letter-spacing: 0.5px;
        display: flex;
        justify-content: flex-end;
        width: 22%;
        margin-right: 21px;
      }
    }
  }

  .total {
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    div {
      background: black;
      color: #ffffff;
      padding: 6px;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 1.8px;
      span {
        color: #e2c044;
      }
    }
  }
`;

export default OrderCard;
