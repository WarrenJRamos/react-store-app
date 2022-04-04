import React from "react";
import { Link } from "react-router-dom";
import { CheckoutSuccessContainer } from "../../Styles/Checkout/CheckoutSuccess.styled";

export default function CheckoutSuccess() {
  return (
    <CheckoutSuccessContainer>
      <h2>You've submitted your order!</h2>
      <Link to="/">Browse for more items</Link>
    </CheckoutSuccessContainer>
  );
}
