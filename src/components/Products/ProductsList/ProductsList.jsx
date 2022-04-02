import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import globalContext from "../../../Context/globalContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from "../../../Styles/Products/ProductCard.styled";

import PaginationComponent from "../../Pagination/PaginationComponent";
const ProductsList = (props) => {
  const context = useContext(globalContext);
  const loading = context.loading;
  console.log("Inside ProductsList: ", props);
  console.log("Inside ProductsList: ", props.products);

  if (loading) {
    return <h2>loading....</h2>;
  }

  // Remember to referense product.id instead of product.productId

  // If the current product id is found within the wishList (from context),
  //  then set the isInsideWishlist boolean to true
  // For Product component: isInsideWishlist={}
  return (
    <div className={`${props.classes}`}>
      <div className={`${props.classes}`}>
        {props.products ? (
          props.products.map((product) => (
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
      {/* <PaginationComponent pageName={props.pageName} /> */}
    </div>
  );
};

export default ProductsList;
