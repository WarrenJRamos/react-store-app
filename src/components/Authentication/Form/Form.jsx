import React from "react";
import { Alert } from "react-bootstrap";

export default function Form(props) {
  // console.log("form");
  // console.log(props.header);
  return (
    <div>
      <h2 className="form-header">{props.header}</h2>
      <p className="form-subheader">{props.subheader}</p>
      {props.error && <Alert variant="danger">{props.error}</Alert>}
      {props.children}
    </div>
  );
}
