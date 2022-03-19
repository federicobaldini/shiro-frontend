import React from "react";

import MenuItem from "./MenuItem";
import "./MenuList.css";

const MenuList = (props) => {
  const { categories } = props;

  return (
    <div className="menu-list">
      {categories.map((category) => {
        return <MenuItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default MenuList;
