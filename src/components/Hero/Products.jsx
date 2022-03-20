import React from 'react';
import ProductsImg from './ProductsImg/ProductsImg';
// import ProductsList from './ProductsList/ProductsList';
import ProductSideBar from './ProductSideBar/ProductsSideBar';

const Products = (props) => {
  return (
    <>
      {/* 'products__item products__item-img' */}
      <ProductsImg
        classes={`${props.classes}__item ${props.classes}__item-img`}
      />
      <ProductSideBar
        classes={`${props.classes}__item ${props.classes}__item-side`}
      />
      {/* <ProductsList classes='products__item products__item-list' /> */}
    </>
  );
};

export default Products;
