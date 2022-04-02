import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContextProvider";
import { CartItemContainer } from "../../../Styles/Navigation/ShoppingCart/CartItem.styled";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItem(props) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const onItemClick = () => {
    navigate(`/product/${props.id}`);
    props.handleClose(false);
  };

  const onAddOneItem = () => {
    console.log("Adding item with name:", props.title);
    cartContext.addItem(
      {
        id: props.id,
        name: props.title,
        price: props.price,
        image: props.image,
        quantity: props.quantity,
      },
      "ONE"
    );
  };

  const onRemoveOneItem = () => {
    cartContext.removeItem(props.id);
  };

  const onRemoveOneItemCompletely = () => {
    cartContext.removeItem(props.id, "COMPLETE_REMOVE");
  };

  return (
    <CartItemContainer className="cart-item">
      <button
        onClick={onRemoveOneItemCompletely}
        className="cart-item--remove-completely"
      >
        <ClearIcon />
      </button>
      <button onClick={onItemClick} className="cart-item__image">
        <img src={props.src} alt="item" />
      </button>
      <h3 className="cart-item__title">
        {props.title} <span className="amount">({props.quantity})</span>
      </h3>
      <p className="cart-item__price">${props.price}</p>
      <div className="cart-item__actions">
        <button className="cart-item__actions--add" onClick={onAddOneItem}>
          <AddIcon />
        </button>
        <button
          className="cart-item__actions--remove"
          onClick={onRemoveOneItem}
        >
          <RemoveIcon />
        </button>
      </div>
    </CartItemContainer>
  );
}
