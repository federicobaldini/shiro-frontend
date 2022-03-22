import React from "react";

import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/form/Button";
import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
  const { product } = props;

  const checkIsNew = () => {
    const productDate = new Date(product.releaseDate);
    const today = new Date();
    return (today.getTime() - productDate.getTime()) / (1000 * 3600 * 24) < 30;
  };

  return (
    <Card className="menu-item">
      <Link to={"/products/" + 1}>
        <div className="menu-item__info-top">
          <div className="menu-item__new">{checkIsNew() && "NEW"}</div>
          <div className="menu-item__name">{product.name}</div>
        </div>
        <div className="menu-item__image-container">
          <img
            className="menu-item__image"
            src={product.imagePath}
            alt="product"
          />
        </div>
        <div className="menu-item__info-bottom">
          <div className="menu-item__price">{"$" + product.price}</div>
          <div className="menu-item__button-container">
            <Button className="menu-item__button">BUY</Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default MenuItem;
