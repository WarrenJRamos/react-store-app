import React from "react";
import { Link } from "react-router-dom";
import { UnableToCheckoutContainer } from "../../Styles/Checkout/UnableToCheckout.styled";

export const UnableToCheckout = () => {
  return (
    <UnableToCheckoutContainer>
      <h2>You must be signed in to checkout</h2>
      <div>
        Please <Link to="/login">Sign in</Link> or{" "}
        <Link to="/register">Register</Link>
      </div>
    </UnableToCheckoutContainer>
  );
};
