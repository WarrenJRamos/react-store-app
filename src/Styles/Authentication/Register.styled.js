import styled from "styled-components";

const RegisterContainer = styled.div`
  /* color: rgba(27, 27, 27, 1); */
  color: white;
  max-width: 641px;
  font-family: ${(props) => props.fontFamilyFormInputs};
  height: 100vh;
  margin: 15% auto;

  .form-header {
    color: ${(props) => props.headerColor};
    text-transform: uppercase;
    font-size: 45px;
    letter-spacing: 5px;
    text-align: center;
    font-family: ${(props) => props.fontFamilyForm};
    margin-bottom: 20px;
  }

  .form-subheader {
    text-align: center;
  }

  .form-group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;

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

    .forgot-password {
      position: absolute;
      right: 12px;
      top: 37%;
      border: none;
      background-color: inherit;
      a {
      }
    }
  }

  button[type="submit"] {
    background: ${(props) => props.headerColor};
    border: none;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: white;
    font-family: ${(props) => props.fontFamilyForm};
  }

  a {
    text-decoration: none;
  }
`;

export { RegisterContainer };
