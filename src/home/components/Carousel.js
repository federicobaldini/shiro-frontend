import React, { useEffect, useState } from "react";

import Card from "../../shared/components/UI/Card";
import "./Carousel.css";

const Carousel = (props) => {
  const { show, infiniteLoop, images } = props;

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(images.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && images.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current images from props
  useEffect(() => {
    setLength(images.length);
    setIsRepeating(infiniteLoop && images.length > show);
  }, [images, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(images[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(images[index]);
    }
    return output;
  };

  const getCard = (image, index) => {
    return (
      <Card
        key={image.id}
        className={
          "carousel-card" +
          ((index === currentIndex - show || index === currentIndex
            ? " carousel-card__middle"
            : "") ||
            (index < currentIndex - show ? " carousel-card__left" : "") ||
            (index > currentIndex - show ? " carousel-card__right" : ""))
        }
        onClick={() => {
          console.log(index + " / " + currentIndex);
          index < currentIndex - show && prev();
          index > currentIndex - show && next();
        }}
      >
        <img className="carousel-image" src={image.path} alt="product" />
      </Card>
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={"carousel-content show-" + show}
            style={{
              transform: "translateX(-" + currentIndex * 53 + "rem)",
              transition: !transitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show &&
              isRepeating &&
              renderExtraPrev().map((image, index) => {
                return getCard(image, index);
              })}
            {images.map((image, index) => {
              return getCard(image, index);
            })}
            {length > show &&
              isRepeating &&
              renderExtraNext().map((image, index) => {
                return getCard(image, index);
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
