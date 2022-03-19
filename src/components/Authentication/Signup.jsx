import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  // Use loading state to prevent the user from accidentally signing up twice
  const [loading, setLoading] = useState(false);
  // useHistory doesn't exist in React Router v6; use useNavigate instead
  // const history = useHistory();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Check if the user re-entered their password correctly
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // Set the error and return from handleSubmit
      return setError("Passwords do not match");
    }

    try {
      setError("");
      // Prevent the user from clicking the button
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // history.push("/");
      navigate("/products");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
