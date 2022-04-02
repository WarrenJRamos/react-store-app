import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../../Context/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WishCard from "../../../Styles/Account/Profile/WishListCard";
const WishListProductCard = ({ product, setWishList }) => {
  const cartContext = useContext(CartContext);

  // FIXME
  const removeFavorite = (id) => {
    setWishList((prev) => {
      return prev.filter((product) => product.productId !== id);
    });
  };

  // FIXME PRODUCTID
  return (
    <WishCard className="card-container">
      <button onClick={() => removeFavorite(product.productId)}>
        <FavoriteIcon className="icon" />
      </button>
      <div className="img-container">
        <NavLink to={`/items/${product.productId}`}>
          <img src={product.image} alt="cloting-img" />
        </NavLink>
      </div>
      <div className="bottom-div">
        <div className="bottom-title">
          <span>{product.name}</span>
        </div>

        <div className="bottom-price">
          <span>${product.price}</span>
        </div>
      </div>
    </WishCard>
  );
};

export default WishListProductCard;
