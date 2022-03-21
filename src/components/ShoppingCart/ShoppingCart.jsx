import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartContainer } from "../../Styles/ShoppingCart/ShoppingCart.styled";
import { useTheme } from "styled-components";

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const theme = useTheme();

  return (
    <ShoppingCartContainer colorCultured={theme.colors.colorCultured}>
      <button type="button" className="shoppingCartButton" onClick={handleShow}>
        <ShoppingCartIcon />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>CART ITEMS WILL GO HERE</Offcanvas.Body>
      </Offcanvas>
    </ShoppingCartContainer>
  );
}
