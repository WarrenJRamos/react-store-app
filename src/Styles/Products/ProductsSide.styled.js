import styled from 'styled-components';

const Productside = styled.div`
  &.side {
    border: 1px solid #f0f6f6;
    background: ${(props) => props.theme.colors.colorTeal};
    position: sticky;
    color: ${(props) => props.theme.colors.colorCultured};
    height: 49vh;
    top: 0;
    .title {
      font-weight: 400;
      display: block;
      font-size: 1rem;
      text-align: left;
      text-transform: uppercase;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      padding: 14px;
    }

    .price {
      /* flex-direction: column;
      align-items: center;
      display: flex; */
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      width: 100%;
      padding: 1rem 0px;
      border-top: 1px solid rgb(204, 204, 204);
      > span {
        display: flex;
        justify-content: space-around;
      }

      .range {
        width: 89% !important;
        margin: 12px 6% !important;
        /* height: 1.5rem !important; */
        color: #d3d0cb !important;
      }
    }

    .rating {
      width: 89% !important;
      margin: 12px 6% !important;
      height: 1.5rem !important;

      .form-select {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        text-align: center;
      }
    }
  }
`;
export default Productside;
