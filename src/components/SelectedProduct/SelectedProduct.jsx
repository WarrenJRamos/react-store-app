import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SelectedComponent } from "../../Styles/SlectedProduct/SelectedComponent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import DiamondIcon from "@mui/icons-material/Diamond";
import Radio from "@mui/material/Radio";
const SelectedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedValue, setSelectedValue] = useState("m");

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

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3333/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading, Please Wait...</h2>;

  const interest = Math.round((product.price / 4 + Number.EPSILON) * 100) / 100;
  //   const interest = (product.price / 4).toFixed(2);
  console.log(product);
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
        <div className="content-size">
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
        </div>
        <div className="content-buttons">
          <button className="cart-btn">
            <ShoppingCartIcon />
            Add to Cart
          </button>
          <div className="wish-btn">
            <span>
              <AddIcon className="add" />
            </span>
            <button>Add to Wish List</button>
          </div>
        </div>
      </div>
    </SelectedComponent>
  );
};

export default SelectedProduct;
