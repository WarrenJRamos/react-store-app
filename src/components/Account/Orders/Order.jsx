import React from "react";
import Doc from "../../../Images/Icons/doc.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import OrderCard from "../../../Styles/Account/Orders/OrderCard";
const style = {
  position: "absolute",
  top: "57%",
  left: "51%",
  transform: "translate(-50%, -50%)",
  width: "44vw;",
  height: "55vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Order(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("price", props.totalPrice);

  return (
    <div>
      <div onClick={handleOpen}>
        <img src={Doc} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderCard>
            <div className="head">
              <div className="head-top">
                <div className="store">
                  R<span>R</span>awen
                </div>
                <span className="invoice">#{props.id}</span>
              </div>
              <div className="head-bottom">
                <span>Item</span>
                <span>QTY</span>
                <span>Cost</span>
              </div>
            </div>
            <div className="content">
              {props.orderedItems.map((item) => {
                return (
                  <div className="content-card" key={item.firebaseProductId}>
                    <div className="image">
                      <img src={item.image} />
                      <span>{item.name}</span>
                    </div>
                    <span className="qty">{item.quantity}</span>
                    <span className="price">${item.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="total">
              <div>
                T<span>o</span>tal: ${props.totalPrice}
              </div>
            </div>
          </OrderCard>
        </Box>
      </Modal>
      {/* <p>Order ID Number: {props.id}</p>
      <div>
        Items:{" "}
        {props.orderedItems.map((item) => {
          return (
            <p>
              {item.quantity}, {item.id}, {item.price}
            </p>
          );
        })}
      </div>
      <p>
        User info: {props.user.name}
        {props.user.city},{props.user.postal},{props.user.street}
      </p> */}
    </div>
  );
}
