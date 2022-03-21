import React from "react";
import products1 from "../../../Images/Products/mens.jpg";

const ProductsImg = (props) => {
  return (
    <div className={`${props.classes}`}>
      <img src={products1} alt="new-items-img" className="img-container" />
      <div className="overlay"></div>
    </div>
  );
};

export default ProductsImg;
