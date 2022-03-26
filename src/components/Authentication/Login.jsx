import React, { useRef, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAuth } from "../../Context/AuthProvider";
import { RegisterContainer } from "../../Styles/Authentication/Register.styled";
import Form from "./Form/Form";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  async function submitHandler(event) {
    // console.log("Inside Handle Submit");

    event.preventDefault();

    if (emailRef.current.value === "" && passwordRef.current.value === "") {
      return setErrorMessage("Email and Password must not be empty");
    }

    if (!emailRef.current.value.includes("@")) {
      return setErrorMessage("Invalid Email");
    }

    try {
      setErrorMessage("");
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      return setErrorMessage("Something went wrong. You are unable to log in");
    }

    setIsLoading(false);
  }

  return (
    <RegisterContainer
      headerColor={theme.colors.colorMaize}
      fontFamilyForm={theme.fonts.fontFamilyForm}
      fontFamilyFormInputs={theme.fonts.fontFamilyFormInputs}
      borderColor={theme.colors.colorTimberWolf}
    >
      <Form header="Login" subheader="Please fill in the information below:">
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
            <button className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </button>
          </div>
          <button type="submit" disabled={isLoading}>
            Register
          </button>
        </form>
      </Form>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Register</Link>
      </div>
    </RegisterContainer>
  );
}
