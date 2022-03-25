import React, { useContext } from "react";

import CartList from "../components/CartList";
import { CartContext } from "../../shared/context/cart-context";
import "./Cart.css";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <div className="cart">
      <CartList products={cart.products} />
    </div>
  );
};

export default Cart;
