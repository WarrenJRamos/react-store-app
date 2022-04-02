import React from "react";

export default function Order(props) {
  return (
    <div>
      <p>Order ID Number: {props.id}</p>
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
      </p>
    </div>
  );
}
