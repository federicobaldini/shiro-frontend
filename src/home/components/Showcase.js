import React, { useState, useEffect } from "react";

import Card from "../../shared/components/UI/Card";
import "./Showcase.css";

const Showcase = (props) => {
  const { images } = props;

  const [actualIndex, setActualIndex] = useState(0);
  const [elements, setElements] = useState(images);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [shiftRight, setShiftRight] = useState(false);
  const [shiftLeft, setShiftLeft] = useState(false);

  const shiftElementHandler = (offset) => {
    let newIndex = actualIndex + offset;
    if (offset < 0) {
      setShiftRight(true);
      setShiftLeft(false);
    } else {
      setShiftRight(false);
      setShiftLeft(true);
    }
    setActualIndex(newIndex);
    setTransitionEnabled(true);
  };

  const getNewElementId = (oldId) => {
    let newId = 0;
    if (oldId <= images.length) {
      newId = oldId + images.length;
    }
    if (oldId > images.length) {
      newId = oldId - images.length;
    }
    return newId;
  };

  const transitionEndHandler = (e) => {
    if (e.propertyName === "transform") {
      let temp = [...elements];
      if (shiftRight) {
        const lastElement = temp.shift();
        temp.push({
          id: getNewElementId(lastElement.id),
          path: lastElement.path,
          color: lastElement.color,
        });
        setElements(temp);
        setActualIndex(0);
      }
      if (shiftLeft) {
        const firstElement = temp.pop();
        temp.unshift({
          id: getNewElementId(firstElement.id),
          path: firstElement.path,
          color: firstElement.color,
        });
        setElements(temp);
        setActualIndex(0);
      }
      setTransitionEnabled(false);
    }
  };

  return (
    <div className="showcase">
      <div
        className="showcase-content"
        style={{
          transform: "translateX(" + actualIndex * 53 + "rem)",
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
                  ? (index === 2 ? " showcase-item-middle" : "") ||
                    (index === 3 ? " showcase-item-right" : "") ||
                    (index === 1 ? " showcase-item-left" : "")
                  : "")
              }
              onClick={() => {
                index === 3 && shiftElementHandler(-1);
                index === 1 && shiftElementHandler(1);
              }}
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
