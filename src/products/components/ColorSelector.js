import React, { useState } from "react";

import Card from "../../shared/components/ui/Card";
import "./ColorSelector.css";

const ColorSelector = (props) => {
  const { colors } = props;

  const [selectedValue, setSelectedValue] = useState("");

  const selectColorHandler = (code) => {
    setSelectedValue(code);
  };

  return (
    <div className={"color-selector " + props.className}>
      {colors.map((color) => {
        return (
          <Card
            key={color.code}
            className={
              "color-selector__item " +
              (selectedValue === color.code
                ? "color-selector__item-active"
                : "")
            }
            onClick={() => selectColorHandler(color.code)}
          >
            <div
              className="color-selector__item-color"
              style={{ background: color.code }}
            />
            <div className="color-selector__item-name">{color.name}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default ColorSelector;
