import React, { useContext } from "react";
import { AccountContainer } from "../../../Styles/Account/Profile/Profile.styled";
import WishListProductCard from "./WishListProductCard";
import globalContext from "../../../Context/globalContext";
import { useAuth } from "../../../Context/AuthProvider";

export default function Wishlist() {
  const context = useContext(globalContext);
  const { currentUser } = useAuth();
  const wishList = context.wishList;
  const setWishList = context.setWishList;
  // const handleClearWishList = () => {
  //   setWishList([]);
  // };

  const WishListItems = [];
  wishList.map((wishListItem) => {
    if (wishListItem.user === currentUser.displayName) {
      WishListItems.push(
        <WishListProductCard
          key={wishListItem.product.productId}
          product={wishListItem.product}
          setWishList={setWishList}
        />
      );
    }
  });

  return (
    <AccountContainer className="wishlist">
      <h3>Wishlist</h3>
      <div className="container">{WishListItems}</div>
      {/* {wishList.length > 2 && (
        <div className="button">
          <button onClick={handleClearWishList}>Clear All</button>
        </div>
      )} */}
    </AccountContainer>
  );
}
