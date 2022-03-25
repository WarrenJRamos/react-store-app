import React from "react";
import { CartItemContainer } from "../../../Styles/Navigation/ShoppingCart/CartItem.styled";

export default function CartItem(props) {
  const onItemClick = () => {};
  return (
    <CartItemContainer className="cart-item">
      <button onClick={onItemClick} className="cart-item__image">
        <img src={props.src} alt="item" />
      </button>
      <h3 className="cart-item__title">{props.title}</h3>
      <p className="cart-item__price">${props.price}</p>
      <div className="cart-item__actions">
        <button className="cart-item__actions--add">Add to bag</button>
        <button className="cart-item__actions--remove">Remove</button>
      </div>
    </CartItemContainer>
  );
}
