import React from "react";

import Card from "../../shared/components/ui/Card";
import "./CartItem.css";

const CartItem = (props) => {
  const { product } = props;

  return <Card className="cart-item">{product.name}</Card>;
};

export default CartItem;
