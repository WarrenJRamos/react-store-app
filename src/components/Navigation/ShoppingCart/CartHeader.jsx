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
      <p className="price">Total: ${cartContext.totalPrice.toFixed(2)}</p>
      <button
        onClick={onReadyToCheckout}
        className="cart-button checkout-button"
      >
        Checkout now
      </button>
      <button onClick={onClearCart} className="cart-button clear-button">
        Clear cart
      </button>
    </CartHeaderContainer>
  );
}
