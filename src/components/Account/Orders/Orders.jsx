import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Context/AuthProvider";
import { AccountContainer } from "../../../Styles/Account/Profile/Profile.styled";
import Order from "./Order";

export default function Orders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("API WAS CALLED, GETTING ORDERS");
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/orders.json`
      );

      if (!response.ok) {
        throw new Error("No data acquired");
      }

      const responseData = await response.json();

      const loadedOrders = [];
      for (const key in responseData) {
        if (currentUser.email === responseData[key].user.email) {
          loadedOrders.push({
            id: key,
            orderedItems: responseData[key].orderedItems,
            user: responseData[key].user,
            totalPrice: responseData[key].totalPrice.toFixed(2),
          });
        }
      }
      setOrders(loadedOrders);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="loading-orders">
        <p>Loading orders...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="http-error">
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <AccountContainer className="orders">
      <h3>Orders</h3>
      <div className="orders__container">
        {/* {id, orderedItems, user} */}
        {orders.map((order) => {
          console.log(order);
          let date = new Date(order.user.date);
          const dateArray = date.toString().split(" ");
          console.log(dateArray);
          const dateRep =
            dateArray[1] + " " + dateArray[2] + "," + dateArray[3];
          return (
            <div className="content">
              <Order
                id={order.id}
                key={order.id}
                orderedItems={order.orderedItems}
                user={order.user}
                totalPrice={order.totalPrice}
              />
              <span>{dateRep}</span>
            </div>
          );
        })}
      </div>
    </AccountContainer>
  );
}
