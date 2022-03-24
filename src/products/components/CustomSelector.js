import React, { useState } from "react";

import "./CustomSelector.css";

const CustomSelector = (props) => {
  const { label, items } = props;

  const [selectedValue, setSelectedValue] = useState("");

  const changeOptionHandler = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={"custom-selector " + props.className}>
      <label className={selectedValue ? "custom-selector__label-active" : ""}>
        {label}
      </label>
      <select
        id={label}
        value={selectedValue}
        onChange={changeOptionHandler}
      >
        <option hidden disabled value=""></option>
        {items.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelector;
