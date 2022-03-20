import React, { useRef, useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContainer } from "../../Styles/Authentication/Register.styled";
import Form from "./Form/Form";
import { useTheme } from "styled-components";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  // Use loading state to prevent the user from accidentally signing up twice
  const [isLoading, setIsLoading] = useState(false);
  // useHistory doesn't exist in React Router v6; use useNavigate instead
  // const history = useHistory();
  const navigate = useNavigate();
  const theme = useTheme();

  async function handleSubmit(e) {
    console.log("Inside Handle Submit");
    e.preventDefault();

    // Check if the user re-entered their password correctly
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // Set the error and return from handleSubmit
      return setErrorMessage("Passwords do not match");
    }

    try {
      setErrorMessage("");
      // Prevent the user from clicking the button
      setIsLoading(true);
      await signup(
        emailRef.current.value,
        nameRef.current.value,
        passwordRef.current.value
      );
      // history.push("/");
      navigate("/products");
    } catch {
      setErrorMessage("Failed to create an account");
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
      <Form header="register" subheader="Please fill in the information below:">
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" ref={nameRef} placeholder="Name" required />
          </div>
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
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Email</label>
            <input
              id="confirm-password"
              type="password"
              ref={passwordConfirmRef}
              placeholder="Confirm password"
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            Register
          </button>
        </form>
      </Form>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    </RegisterContainer>
  );
}
