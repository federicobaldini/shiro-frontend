import React, { useState, useEffect, useCallback } from "react";

import Card from "../../shared/components/ui/Card";
import "./Showcase.css";

const Showcase = (props) => {
  const { images, animation } = props;
  const halfImagesLength = parseInt(images.length / 2);

  const [actualIndex, setActualIndex] = useState(0);
  const [elements, setElements] = useState(images);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [shiftRight, setShiftRight] = useState(false);
  const [shiftLeft, setShiftLeft] = useState(false);

  const shiftElementHandler = useCallback((offset) => {
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
  }, []);

  useEffect(() => {
    if (animation) {
      let interval = () => {};
      if (actualIndex === 0) {
        interval = setInterval(() => {
          shiftElementHandler(-1);
        }, 4000);
      }
      return () => clearInterval(interval);
    }
  }, [actualIndex, shiftElementHandler, animation]);

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

  const transitionEndHandler = (event) => {
    if (event.propertyName === "transform") {
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
        onTransitionEnd={transitionEndHandler}
      >
        {elements.map((element, index) => {
          return (
            <Card
              key={element.id}
              className={
                "showcase-item" +
                (!transitionEnabled
                  ? (index === halfImagesLength
                      ? " showcase-item-middle"
                      : "") ||
                    (index === halfImagesLength + 1
                      ? " showcase-item-right"
                      : "") ||
                    (index === halfImagesLength - 1
                      ? " showcase-item-left"
                      : "")
                  : "")
              }
              onClick={() => {
                index === halfImagesLength + 1 && shiftElementHandler(-1);
                index === halfImagesLength - 1 && shiftElementHandler(1);
              }}
              style={{
                backgroundImage: "url('" + element.path + "')",
                backgroundSize: "100% 100%",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;
