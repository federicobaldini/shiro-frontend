import React from "react";

import Card from "../../shared/components/ui/Card";
import "./ProductDetailInfo.css";

const ProductDetailInfo = (props) => {
  const { product } = props;

  return (
    <Card className="product-detail-info">
      <div className="product-detail-info__title">PRODUCT DETAIL</div>
      <div className="product-detail-info__description">
        {product.shortDescription}
      </div>
      <div className="product-detail-info__detail-container">
        <Card className="product-detail-info__detail">
          Dimensions: {product.dimensions}
        </Card>
        <Card className="product-detail-info__detail">
          Weight: {product.weight}
        </Card>
        <Card className="product-detail-info__detail">
          Manufacturer: {product.manufacturer}
        </Card>
        <Card className="product-detail-info__detail">
          Materials: {product.materials}
        </Card>
      </div>
    </Card>
  );
};

export default ProductDetailInfo;
