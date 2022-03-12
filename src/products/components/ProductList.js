import React from "react";

import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
