import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../../Context/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WishCard from "../../../Styles/Account/Profile/WishListCard";
import GlobalContext from "../../../Context/globalContext";
import { useAuth } from "../../../Context/AuthProvider";

const WishListProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { currentUser } = useAuth();
  const context = useContext(GlobalContext);
  const wishList = context.wishList;
  const setWishList = context.setWishList;
  const [removedFromWishList, setRemovedFromWishList] = useState(false);

  const fetchWishList = async () => {
    console.log("API WAS CALLED, GET WISHLIST");

    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/wishlist.json`
    );

    if (!response.ok) {
      throw new Error("No data acquired");
    }

    const responseData = await response.json();

    const loadedWishList = [];

    for (const key in responseData) {
      loadedWishList.push({
        user: responseData[key].user,
        product: {
          firebaseWishListId: key,
          firebaseProductId: responseData[key].product.firebaseProductId,
          productId: responseData[key].product.productId,
          name: responseData[key].product.name,
          price: responseData[key].product.price,
          image: responseData[key].product.image,
        },
      });
    }

    // Find the wish list item which is the same as the user and productId match
    const indexOfItemToRemove = loadedWishList.findIndex(
      (wishListItem, index) => {
        console.log(index, wishListItem.user, currentUser.displayName);
        console.log(index, wishListItem.product.productId, product.productId);
        return (
          wishListItem.user === currentUser.displayName &&
          wishListItem.product.productId === product.productId
        );
      }
    );

    console.log(indexOfItemToRemove);

    if (indexOfItemToRemove > -1) {
      const responseDelete = await fetch(
        `https://store-3a04a-default-rtdb.firebaseio.com/wishlist/${loadedWishList[indexOfItemToRemove].product.firebaseWishListId}.json`,
        {
          method: "DELETE",
        }
      );
      setRemovedFromWishList(true);

      setWishList((prev) => {
        console.log(prev);
        const updatedWishList = [...prev];
        updatedWishList.splice(indexOfItemToRemove, 1);
        console.log(updatedWishList);
        return updatedWishList;
      });
    }
  };

  const removeWishHandler = () => {
    console.log("removing from wishlist");
    // Retrieve the ENTIRE wish list from firebase
    // Find the wish list item which is the same as the user and productId match
    // Send a delete request for that element
    fetchWishList()
      .then((value) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (removedFromWishList) {
    return null;
  }

  return (
    <WishCard className="card-container">
      <button onClick={removeWishHandler}>
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
