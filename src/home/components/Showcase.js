import React, { useState } from "react";

import Card from "../../shared/components/UI/Card";
import "./Showcase.css";

const Showcase = (props) => {
  const { images } = props;

  const [actualIndex, setActualIndex] = useState(0);
  const [elements, setElements] = useState(images);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const shiftElementHandler = (offset) => {
    let newIndex = actualIndex + offset;

    setActualIndex(newIndex);
    setTransitionEnabled(true);
  };

  const transitionEndHandler = (e) => {
    if (e.propertyName === "transform") {
      let temp = [...elements];
      const lastElement = temp.shift();
      temp.push(lastElement);
      setElements(temp);
      setActualIndex(0);
      setTransitionEnabled(false);
    }
  };

  return (
    <div className="showcase">
      <div
        className="showcase-content"
        style={{
          transform: "translateX(-" + actualIndex * 53 + "rem)",
          transition: !transitionEnabled ? "none" : undefined,
        }}
        onTransitionEnd={(e) => transitionEndHandler(e)}
      >
        {elements.map((element, index) => {
          return (
            <Card
              key={element.id}
              className={
                "showcase-item" +
                (!transitionEnabled
                  ? index === 2
                    ? " showcase-item-middle"
                    : ""
                  : "") +
                (index === 3 ? " showcase-item-right" : "") +
                (index === 1 ? " showcase-item-left" : "") 
              }
            >
              <img
                className="showcase-item-image"
                src={element.path}
                alt="product"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;
