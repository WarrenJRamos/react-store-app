import styled from "styled-components";

export const CheckoutForm = styled.form`
  margin: auto;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .checkout-header {
    color: #e2c044;
    text-transform: uppercase;
    font-size: 45px;
    letter-spacing: 5px;
    text-align: center;
    font-family: ${(props) => props.fontFamilyForm};
    margin-bottom: 20px;
  }

  .control {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;

    label {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
    }

    input {
      width: 100%;
      padding: 12px 14px;
      border-radius: 5px;
      border: 1px solid ${(props) => props.borderColor};
    }

    .error {
      color: red;
    }
  }

  .checkout-actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;

    button {
      border: none;
      padding: 5px 10px;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: white;

      &.checkout-actions--cancel {
        background-color: red;
      }

      &.checkout-actions--submit {
        background-color: #e2c044;
      }
    }
  }
`;
