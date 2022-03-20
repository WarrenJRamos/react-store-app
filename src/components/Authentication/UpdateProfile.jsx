import React, { useRef, useState } from "react";
import { Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAuth } from "../../Context/AuthProvider";
import { RegisterContainer } from "../../Styles/Authentication/Register.styled";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setIsLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <RegisterContainer
      headerColor={theme.colors.colorMaize}
      fontFamilyForm={theme.fonts.fontFamilyForm}
      fontFamilyFormInputs={theme.fonts.fontFamilyFormInputs}
      borderColor={theme.colors.colorTimberWolf}
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                ref={emailRef}
                placeholder="New email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-confirm">Password Confirmation</label>
              <input
                id="password-confirm"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
                required
              />
            </div>
            <button disabled={isLoading} type="submit">
              Update
            </button>
          </form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </RegisterContainer>
  );
}
