import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		calculateBasketTotal();
	}, [basket])

	const calculateBasketTotal = () => {
		let price = 0;
		basket.forEach(item => {
			price+=item.price;
		});
		setTotal(price);
	}

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
