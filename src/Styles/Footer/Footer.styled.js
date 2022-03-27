import styled from 'styled-components';

const FootCard = styled.div`
  width: 100%;
  height: 458px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #4d4d4d;
  color: ${(props) => props.theme.colors.colorTimberWolf};
  background: ${(props) => props.theme.colors.colorBlack};

  .footer-columns {
    width: 1051px;
    height: 270px;
    display: flex;
    text-transform: uppercase;
    .title {
      display: flex;
      width: 26%;
      height: 50%;
      align-items: flex-start;
      justify-content: space-around;
      flex-direction: column;
      span {
        font-weight: 700;
        font-size: 35px;
        margin-left: 8px;
        line-height: 29px;
      }

      .icons {
        font-size: 60px;
        cursor: pointer;
      }
    }

    .column1 {
      h4 {
        font-size: 1.4em;
        font-weight: 500;
        letter-spacing: 2px;
      }
      width: 35%;
      height: 100%;
      display: flex;
      margin-left: 65px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    .column2 {
      h4 {
        font-size: 1.4em;
        font-weight: 500;
        letter-spacing: 2px;
      }
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    .column3 {
      h4 {
        font-size: 1.4em;
        font-weight: 500;
        letter-spacing: 2px;
      }
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
    }
  }
`;

export default FootCard;
