import React, { useRef, useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAuth } from "../../Context/AuthProvider";
import { RegisterContainer } from "../../Styles/Authentication/Register.styled";
import Form from "./Form/Form";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setErrorMessage("");
      setIsLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setErrorMessage("Failed to reset password");
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
      <Form
        header="Password Reset"
        subheader="Please fill in the information below:"
      >
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} placeholder="Email" required />
          </div>
          <button type="submit" disabled={isLoading}>
            Reset Password
          </button>
        </form>
      </Form>

      <div className="w-100 text-center mt-3">
        Remember your password? <Link to="/login">Login</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </RegisterContainer>
  );
}
