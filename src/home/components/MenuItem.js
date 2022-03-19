import React from "react";

import Card from "../../shared/components/ui/Card";
import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
  const { category } = props;

  return (
    <Card className="menu-item">
      <Link to={1 + "/products/"}>
        <div className="menu-item__title">{category.name.toUpperCase()}</div>
      </Link>
    </Card>
  );
};

export default MenuItem;
