import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContextProvider";
import { CartHeaderContainer } from "../../../Styles/Navigation/ShoppingCart/CartHeader.styled";
import { useNavigate } from "react-router-dom";

export default function CartHeader(props) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const onReadyToCheckout = () => {
    navigate("/checkout");
    props.handleClose(false);
  };

  const onClearCart = () => {
    cartContext.clearCart();
  };

  return (
    <CartHeaderContainer>
      <button onClick={onReadyToCheckout} className="checkout-button">
        Checkout
      </button>
      <button onClick={onClearCart} className="clear-button">
        Clear Cart
      </button>
      <div>Total: ${cartContext.totalPrice.toFixed(2)}</div>
    </CartHeaderContainer>
  );
}
