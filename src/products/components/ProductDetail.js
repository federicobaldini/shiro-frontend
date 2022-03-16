import React from "react";

import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/form/Button";
import ColorSelector from "./ColorSelector";
import CustomSelector from "./CustomSelector";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <Card className="product-detail">
      <div className="product-detail__image-container">
        <img
          className="product-detail__image"
          src={product.imagePath}
          alt="product"
        />
      </div>
      <div className="product-detail__info">
        <div className="product-detail__name">{product.name.toUpperCase()}</div>
        <div className="product-detail__price">{product.price}</div>
        <div className="product-detail__description">{product.description}</div>
        <form className="product-detail__form">
          <ColorSelector
            className="product-detail__colors"
            colors={product.colors}
          />
          <div className="product-detail__select-container">
            <CustomSelector
              className="product-detail__select"
              label="Size"
              items={product.sizes}
            />
            <CustomSelector
              className="product-detail__select"
              label="Quantity"
              items={[
                { name: 1, value: 1 },
                { name: 2, value: 2 },
                { name: 3, value: 3 },
              ]}
            />
          </div>
          <div className="product-detail-button-container">
            <Button className="product-detail__button">ADD TO CART</Button>
            {/*<Button className="product-detail__button">BUY NOW</Button>*/}
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ProductDetail;
