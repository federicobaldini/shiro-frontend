import React from "react";

import Card from "../../shared/components/UI/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <Card className="product-item">
      <img
        src={product.path}
        alt="product"
        style={{ width: "66%", height: "66%", padding: "1rem" }}
      />
      <div style={{ width: "100%", height: "33%", padding: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </Card>
  );
};

export default ProductItem;
