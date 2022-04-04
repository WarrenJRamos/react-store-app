import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../Context/CartContextProvider";
import { useAuth } from "../../Context/AuthProvider";
import { SelectedComponent } from "../../Styles/SlectedProduct/SelectedComponent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import DiamondIcon from "@mui/icons-material/Diamond";
import Radio from "@mui/material/Radio";
import { Snackbar } from "@mui/material";
import GlobalContext from "../../Context/globalContext";

const SelectedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedValue, setSelectedValue] = useState("m");
  const cartContext = useContext(CartContext);
  const context = useContext(GlobalContext);
  const wishList = context.wishList;
  const setWishList = context.setWishList;
  const { currentUser } = useAuth();
  const [snackbarIsActive, setSnackbarIsActive] = useState(false);
  const [wishListSnackbarIsActive, setWishListSnackbarIsActive] =
    useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const firebaseProductId = useParams().firebaseProductId;
  // console.log(id);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://store-3a04a-default-rtdb.firebaseio.com/products/${firebaseProductId}.json`
    )
      .then((res) => res.json())
      .then((product) => {
        let transformedProduct = {
          firebaseProductId: firebaseProductId,
          productId: product.id,
          category: product.category,
          description: product.description,
          image: product.image,
          name: product.name,
          price: product.price,
          rating: product.rating,
        };
        // console.log(transformedProduct);
        setProduct(transformedProduct);
        setIsLoading(false);
      });
  }, []);

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
            firebaseProductId: product.firebaseProductId,
            productId: product.productId,
            name: product.name,
            price: product.price,
            image: product.image,
          },
        }),
      }
    );
  };

  const addToWishClickHandler = () => {
    console.log("Trying to add to wish list");
    console.log("Wish List: ", wishList);
    console.log("Product", product);
    const wishListItem = wishList.find((wishListItem) => {
      console.log(wishListItem.product.productId, product.productId);
      return (
        wishListItem.product.productId === product.productId &&
        wishListItem.user === currentUser.displayName
      );
    });
    console.log(wishListItem);

    // If wishListItem exists, don't add to wishList
    if (wishListItem) {
      console.log(wishListItem);
      console.log("Already in wish list, so didn't add to wish list");
      setWishListSnackbarIsActive(true);
      setSnackbarIsActive(true);
      setTimeout(function () {
        setWishListSnackbarIsActive(false);
        setSnackbarIsActive(false);
      }, 2000);
      return;
    }

    // Add to wishList since it doesn't exist
    postWishList()
      .then((value) => {
        console.log("Successfully posted to wishlist table");
        // setIsFavorite(product.productId);
        // After adding the item in the table, also update the local wishlist
        setWishList((prev) => {
          const newWishList = [...prev];
          newWishList.push({
            user: currentUser.displayName,
            product: {
              firebaseProductId: product.firebaseProductId,
              productId: product.productId,
              name: product.name,
              price: product.price,
              image: product.image,
            },
          });
          return newWishList;
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarIsActive(false);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setSnackbarIsActive(true);
    console.log("Adding item to cart", {
      firebaseProductId: product.firebaseProductId,
      productId: product.productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    cartContext.addItem({
      firebaseProductId: product.firebaseProductId,
      productId: product.productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  if (isLoading) return <h2>Loading, Please Wait...</h2>;

  const interest = Math.round((product.price / 4 + Number.EPSILON) * 100) / 100;
  //   const interest = (product.price / 4).toFixed(2);
  // console.log(product);
  return (
    <SelectedComponent>
      <div className="img-container">
        <div>
          <img src={product.image} />
        </div>
      </div>
      <div className="content">
        <h1>{product.category}</h1>
        <span className="content-name">{product.name}</span>
        <div className="content-price">
          <span className="span1">${product.price}</span>
          <span className="span2">
            <LocalShippingIcon /> Free Shipping
          </span>
        </div>
        <div className="content-interest">
          <span className="payment">
            or 4 interest-free payments of ${interest} with
          </span>
          <span className="pay">
            <DiamondIcon />
            Pay
          </span>
        </div>
        <div className="content-desc">{product.description}</div>
        {/* <div className="content-size">
          <div className="picker">
            <Radio {...controlProps("a")} label="small" />
            <Radio {...controlProps("b")} />
            <Radio {...controlProps("c")} />
            <Radio {...controlProps("d")} />
          </div>
          <div className="chart">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div> */}
        <div className="content-buttons">
          <button className="cart-btn" onClick={handleAddToCart}>
            <ShoppingCartIcon />
            Add to Cart
          </button>
          {currentUser ? (
            <div className="wish-btn">
              <span>
                <AddIcon className="add" />
              </span>
              <button onClick={addToWishClickHandler}>Add to Wish List</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Snackbar
        open={snackbarIsActive}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={
          wishListSnackbarIsActive
            ? `${product.name} is already in wish list`
            : `Added ${product.name} to Cart`
        }
      />
    </SelectedComponent>
  );
};

export default SelectedProduct;
