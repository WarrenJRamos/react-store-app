import styled from "styled-components";

export const CheckoutForm = styled.form`
  margin: auto;
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .control {
    display: flex;
    flex-direction: column;
    width: 400px;

    label {
      color: blue;
    }

    input {
      padding: 5px 10px;
    }

    .error {
      color: red;
    }
  }
`;
