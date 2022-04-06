import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  .shoppingCartButton {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    color: ${(props) => props.colorCultured};
    /* background-color: red; */
    position: relative;

    svg {
      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      color: rgb(88, 123, 127);
      right: -10px;
      top: -5px;
    }
  }
`;
