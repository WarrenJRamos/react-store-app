import React, { useRef, useState, useContext } from "react";
import { CheckoutForm } from "../../Styles/Checkout/Checkout.styled";
import { CartContext } from "../../Context/CartContextProvider";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext(CartContext);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;

  const submitOrder = async (data) => {
    console.log("API WAS CALLED, SUBMITTING ORDER");
    setIsSubmitting(true);
    await fetch(
      `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/orders.json`,
      {
        method: "POST",
        body: JSON.stringify({
          user: data,
          orderedItems: cartContext.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    submitOrder({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (isSubmitting) {
    return <p style={{ margin: "auto", fontSize: "100px" }}>Submitting data</p>;
  }

  if (didSubmit) {
    return (
      <p style={{ margin: "auto", fontSize: "100px" }}>
        You've submitted your order!
      </p>
    );
  }

  const nameControlClasses = `control
    ${formInputsValidity.name ? "" : "invalid"}`;
  const streetControlClasses = `control
    ${formInputsValidity.street ? "" : "invalid"}`;
  const postalControlClasses = `control
    ${formInputsValidity.postal ? "" : "invalid"}`;
  const cityControlClasses = `control
    ${formInputsValidity.city ? "" : "invalid"}`;

  return (
    <CheckoutForm className={"classes.form"} onSubmit={onSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <p className="error">Please enter a valid name!</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <p className="error">Please enter a valid street!</p>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && (
          <p className="error">Please enter a valid postal code!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && (
          <p className="error">Please enter a valid city!</p>
        )}
      </div>
      <div className={"classes.actions"}>
        <button onClick={props.onClick} type="button">
          Cancel
        </button>
        <button className={"classes.submit"} type="submit">
          Confirm
        </button>
      </div>
    </CheckoutForm>
  );
};

export default Checkout;
