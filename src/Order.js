import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
					rating={item.rating}
					hideButton
        />
      ))}
			{console.log(order.data)}
			<CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Order Total: ({order.data.basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="giftBox" id="giftBox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
