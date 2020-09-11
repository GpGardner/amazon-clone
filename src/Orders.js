import React, { useState, useEffect } from "react";
import Order from "./Order";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
	}, [user]);
	
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
