import React from "react";

import CartItem from "./CartItem";
import "./CartList.css";

const CartList = (props) => {
  const { products } = props;

  return (
    <div className="cart-list">
      {products.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartList;
