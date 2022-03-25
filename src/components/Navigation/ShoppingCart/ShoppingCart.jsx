import React, { useState, useContext } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartContainer } from "../../../Styles/Navigation/ShoppingCart/ShoppingCart.styled";
import { useTheme } from "styled-components";
import GlobalContext from "../../../Context/globalContext";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const globalContext = useContext(GlobalContext);

  const theme = useTheme();

  return (
    <ShoppingCartContainer colorCultured={theme.colors.colorCultured}>
      <button type="button" className="shoppingCartButton" onClick={handleShow}>
        <ShoppingCartIcon />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        name="end"
        style={{ backgroundColor: "#587B7F" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#e2c044" }}>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {globalContext.allProducts.map((product) => {
            return (
              <CartItem
                key={product.id}
                src={product.image}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </ShoppingCartContainer>
  );
}
