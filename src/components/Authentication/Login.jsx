import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function submitHandler(event) {
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
    <>
      <Card>
        <Card.Body>
          <h2>Login</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Email: </Form.Label>
              <Form.Control type="text" ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <Button disabled={isLoading} type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Forgot Password? <Link to="/forgot-password">Reset Password</Link>
      </div>
    </>
  );
}
