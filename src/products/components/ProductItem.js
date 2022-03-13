import React from "react";

import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/Form/Button";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { product } = props;

  const checkIsNew = () => {
    const productDate = new Date(product.releaseDate);
    const today = new Date();
    return (today.getTime() - productDate.getTime()) / (1000 * 3600 * 24) < 30;
  };

  return (
    <Card className="product-item">
      <div className="product-item__info-top">
        <div className="product-item__new">{checkIsNew() && "NEW"}</div>
        <div className="product-item__name">{product.name}</div>
      </div>
      <img
        className="product-item__image"
        src={product.imagePath}
        alt="product"
      />
      <div className="product-item__info-bottom">
        <div className="product-item__price">{product.price}</div>
        <div className="product-item__button-container">
          <Button className="product-item__button">BUY</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
