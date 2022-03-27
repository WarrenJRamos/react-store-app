import React from "react";
import { useLocation } from "react-router-dom";
import productsDefault from "../../../Images/Products/products1.jpg";
import mens from "../../../Images/Products/mensfixed.png";
import womens from "../../../Images/Products/womensfixed.png";
import hats from "../../../Images/Products/hatsfixed.png";
import shoes from "../../../Images/Products/shoesfixed.png";
const ProductsImg = (props) => {
  const location = useLocation();
  // console.log(location.pathname);
  let img = productsDefault;
  if (location.pathname === "/products/womens") {
    img = womens;
  } else if (location.pathname === "/products/mens") {
    img = mens;
  } else if (location.pathname === "/products/hats") {
    img = hats;
  } else if (location.pathname === "/products/shoes") {
    img = shoes;
  }
  return (
    <div className={`${props.classes}`}>
      <img src={img} alt="new-items-img" className="img-container" />
      <div className="overlay"></div>
    </div>
  );
};

export default ProductsImg;
