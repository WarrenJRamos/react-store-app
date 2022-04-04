import React, { useContext, useRef, useState, useEffect } from "react";
// import test from '../../../Images/Products/test.jpg';
import { NavLink } from "react-router-dom";
//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductCard from "../../../Styles/Products/ProductCard.styled";
import globalContext from "../../../Context/globalContext";
import { CartContext } from "../../../Context/CartContextProvider";
import { useAuth } from "../../../Context/AuthProvider";
import { Snackbar } from "@mui/material";

const Product = (props) => {
  const { currentUser } = useAuth();
  const context = useContext(globalContext);
  const cartContext = useContext(CartContext);
  const wishList = context.wishList;
  const setWishList = context.setWishList;
  const [snackbarIsActive, setSnackbarIsActive] = useState(false);
  // if true, it becomes a filled in heart
  const [isFavorite, setIsFavorite] = useState(null);
  const quantityInputRef = useRef();
  const [itemIsInsideWishList, setItemIsInsideWishList] = useState(
    props.isInsideWishList
  );

  const handleSnackbarClose = () => {
    setSnackbarIsActive(false);
  };

  const addToCartClickHandler = (event) => {
    event.preventDefault();
    console.log("Adding item to cart");
    setSnackbarIsActive(true);

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim() === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      return;
    }
    console.log("Adding item to cart");
    console.log({
      firebaseProductId: props.product.firebaseProductId,
      productId: props.product.productId,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image,
      quantity: enteredQuantityNumber,
    });
    cartContext.addItem({
      firebaseProductId: props.product.firebaseProductId,
      productId: props.product.productId,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image,
      quantity: enteredQuantityNumber,
    });
  };

  // Gets called when user adds item to wishlist (via addToWishClickHandler)
  const postWishList = async () => {
    console.log("API WAS CALLED, POST WISHLIST ITEM");
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/wishlist.json`,
      {
        method: "POST",
        body: JSON.stringify({
          user: currentUser.displayName,
          product: {
            firebaseProductId: props.product.firebaseProductId,
            productId: props.product.productId,
            name: props.product.name,
            price: props.product.price,
            image: props.product.image,
          },
        }),
      }
    );

    // if (response.status !== 200) {
    // }

    // const responseData = response.json();
  };

  const addToWishClickHandler = () => {
    console.log("Trying to add to wish list");
    console.log("Wish List: ", wishList);
    const wishListItem = wishList.find((wishListItem) => {
      console.log(wishListItem.product.productId, props.product.productId);
      return (
        wishListItem.product.productId === props.product.productId &&
        wishListItem.user === currentUser.displayName
      );
    });
    console.log(wishListItem);

    // If wishListItem exists, don't add to wishList
    if (wishListItem) {
      console.log(wishListItem);
      console.log("Already in wish list, so didn't add to wish list");
      return;
    }

    // Add to wishList since it doesn't exist
    postWishList()
      .then((value) => {
        console.log("Successfully posted to wishlist table");
        setIsFavorite(props.product.productId);
        // After adding the item in the table, also update the local wishlist
        setWishList((prev) => {
          const newWishList = [...prev];
          newWishList.push({
            user: currentUser.displayName,
            product: {
              firebaseProductId: props.product.firebaseProductId,
              productId: props.product.productId,
              name: props.product.name,
              price: props.product.price,
              image: props.product.image,
            },
          });
          return newWishList;
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Calls the API; deletes the wishlist item with the id
  // const deleteWishItem = async () => {
  //   const response = await fetch(`https://store-3a04a-default-rtdb.firebaseio.com/wishlist/${props.product.id}`, {
  //     method: "DELETE"
  //   })

  //   const responseData = response.json();
  // }

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
        console.log(
          index,
          wishListItem.product.productId,
          props.product.productId
        );
        return (
          wishListItem.user === currentUser.displayName &&
          wishListItem.product.productId === props.product.productId
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

      setWishList((prev) => {
        const updatedWishList = [...prev];
        updatedWishList.splice(indexOfItemToRemove, 1);
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
    setIsFavorite(null);
    setItemIsInsideWishList(false);
    // setWishList((prevWishList) => {
    //   const items = prevWishList.filter((prevWishListItem) => prevWishListItem.product.productId !== props.product.id);
    //   return items;
    // });
  };

  return (
    <ProductCard className="card-container">
      <div className="top">
        <div>
          <NavLink to={`/items/${props.product.firebaseProductId}`}>
            <span>Quick view</span>
          </NavLink>
        </div>
        {currentUser ? (
          itemIsInsideWishList || isFavorite === props.product.productId ? (
            <>
              <button onClick={() => removeWishHandler()}>
                <FavoriteIcon className="faved" />
              </button>
            </>
          ) : (
            <>
              <button onClick={() => addToWishClickHandler()}>
                <FavoriteBorderIcon className="fav" />
              </button>
            </>
          )
        ) : (
          ""
        )}
      </div>
      <div className="img-container">
        <NavLink to={`/items/${props.product.firebaseProductId}`}>
          <img src={props.product.image} alt="clothing-img" />
        </NavLink>
      </div>
      <div className="bottom">
        <div className="bottom-title">
          <span>{props.product.name}</span>
        </div>
        <div className="bottom-price">
          <span>${props.product.price}</span>
          <form onSubmit={addToCartClickHandler}>
            <label htmlFor={`quantity_${props.product.productId}`}>QTY: </label>
            <input
              ref={quantityInputRef}
              id={`quantity_${props.product.productId}`}
              style={{ width: "40px" }}
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
            />
            <button type="submit">
              <AddShoppingCartIcon className="cart" />
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={snackbarIsActive}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={`Added ${props.product.name} to Cart`}
      />
    </ProductCard>
  );
};

export default Product;
