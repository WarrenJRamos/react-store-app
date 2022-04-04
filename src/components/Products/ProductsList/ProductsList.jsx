import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import globalContext from "../../../Context/globalContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from "../../../Styles/Products/ProductCard.styled";

import PaginationComponent from "../../Pagination/PaginationComponent";
import { useAuth } from "../../../Context/AuthProvider";
const ProductsList = (props) => {
  const { currentUser } = useAuth();
  const context = useContext(globalContext);
  const loading = context.loading;
  const wishList = context.wishList;
  console.log("Inside ProductsList: ", props);
  console.log("Inside ProductsList: ", props.products);
  // need props.products
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  // Reset to page 1 when the user changes page
  useEffect(() => {
    setCurrentPage(1);
  }, [props.pageName]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Map through currentProducts instead of props.products
  const currentProducts = props.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return <h2>loading....</h2>;
  }

  const checkIfInsideWishList = (productId) => {
    // console.log("Check if inside wishlist", wishList);
    let i = 0;
    for (const wishListItem in wishList) {
      // console.log(i, wishList[wishListItem].product.productId, productId);
      // console.log(i, wishList[wishListItem].user, currentUser.displayName);
      if (
        wishList[wishListItem].product.productId === productId &&
        wishList[wishListItem].user.email === currentUser.email
      ) {
        return true;
      }
      i++;
    }
    return false;
  };

  return (
    <>
      <PaginationComponent
        productsPerPage={productsPerPage}
        totalProducts={props.products.length}
        setCurrentPage={setCurrentPage}
        pageName={props.pageName}
      />
      <div className={`${props.classes}`}>
        <div className={`${props.classes}`}>
          {props.products ? (
            currentProducts.map((product) => {
              let isInsideWishList = false;
              if (currentUser) {
                if (checkIfInsideWishList(product.productId)) {
                  isInsideWishList = true;
                }
              }
              {
                /* console.log("MAPPING THROUGH", isInsideWishList); */
              }
              return (
                <Product
                  key={product.productId}
                  product={product}
                  isInsideWishList={isInsideWishList}
                />
              );
            })
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
      </div>
      <PaginationComponent
        productsPerPage={productsPerPage}
        totalProducts={props.products.length}
        setCurrentPage={setCurrentPage}
        pageName={props.pageName}
      />
    </>
  );
};

export default ProductsList;
