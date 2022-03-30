import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import globalContext from "../../../Context/globalContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from "../../../Styles/Products/ProductCard.styled";

import PaginationComponent from "../../Pagination/PaginationComponent";
const ProductsList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const context = useContext(globalContext);
  const setWishList = context.setWishList;

  const location = useLocation();

  // const newProducts = context.newProducts;
  const loading = context.loading;
  const currentProducts = context.currentPageProducts;
  const setFilterCategory = context.setFilterCategory;

  setFilterCategory(location.pathname);

  useEffect(() => {
    console.log("hello");
    const fetchWishList = async () => {
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
          id: key,
          productId: responseData[key].product.id,
          image: responseData[key].product.image,
          name: responseData[key].product.name,
          price: responseData[key].product.price,
          user: responseData[key].user,
        });
      }
      setWishList(loadedWishList);
      setIsLoading(false);
    };

    fetchWishList().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (loading) {
    return <h2>loading....</h2>;
  }

  return (
    <div className={`${props.classes}`}>
      <div className={`${props.classes}`}>
        {currentProducts ? (
          currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <ProductCard className="card-container">
            <div className="img-container">
              <img src={test} alt="cloting-img" />
            </div>
            <div className="bottom">
              <div className="bottom-title">
                <span>Random item name</span>
                <FavoriteBorderIcon className="fav" />
              </div>
              <div className="bottom-price">
                <span>$55.45</span>
              </div>
            </div>
          </ProductCard>
        )}
      </div>
      <PaginationComponent />
    </div>
  );
};

export default ProductsList;
