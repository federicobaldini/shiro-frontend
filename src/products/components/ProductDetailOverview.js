import React, { useState } from "react";

import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/form/Button";
import ColorSelector from "./ColorSelector";
import CustomSelector from "./CustomSelector";
import "./ProductDetailOverview.css";

const ProductDetailOverview = (props) => {
  const { product } = props;

  const [actualImage, setActualImage] = useState(product.imagesPath[0]);

  const changeImageHandler = (imagePath) => {
    setActualImage(imagePath);
  };

  return (
    <Card className="product-detail-overview">
      <div className="product-detail-overview__side-image-container">
        {product.imagesPath.map((imagePath) => {
          return (
            <img
              key={imagePath}
              className="product-detail-overview__side-image"
              src={imagePath}
              alt="product"
              style={imagePath === actualImage ? { opacity: "1" } : {}}
              onClick={() => changeImageHandler(imagePath)}
            />
          );
        })}
      </div>
      <div className="product-detail-overview__image-container">
        <img
          className="product-detail-overview__image"
          src={actualImage}
          alt="product"
        />
      </div>
      <div className="product-detail-overview__info">
        <div className="product-detail-overview__name">
          {product.name.toUpperCase()}
        </div>
        <div className="product-detail-overview__price">{"$" + product.price}</div>
        <div className="product-detail-overview__description">
          {product.description}
        </div>
        <form className="product-detail-overview__form">
          <ColorSelector
            className="product-detail-overview__colors"
            colors={product.colors}
          />
          <div className="product-detail-overview__select-container">
            <CustomSelector
              className="product-detail-overview__select"
              label="Size"
              items={product.sizes}
            />
            <CustomSelector
              className="product-detail-overview__select"
              label="Quantity"
              items={[
                { name: 1, value: 1 },
                { name: 2, value: 2 },
                { name: 3, value: 3 },
              ]}
            />
          </div>
          <div className="product-detail-overview-button-container">
            <Button className="product-detail-overview__button">
              ADD TO CART
            </Button>
            {/*<Button className="product-detail-overview__button">BUY NOW</Button>*/}
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ProductDetailOverview;
