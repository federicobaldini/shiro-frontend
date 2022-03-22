import React from "react";

import MenuItem from "./MenuItem";
import "./MenuList.css";

const MenuList = (props) => {
  const { products } = props;

  return (
    <div className="menu-list">
      {products.map((product) => {
        return <MenuItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default MenuList;
