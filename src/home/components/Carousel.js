import React, { useState } from "react";

import "./Carousel.css";

const images = [
  {
    id: 1,
    path: "https://taktcph.com/wp-content/uploads/2019/04/twitter-lineup.jpg",
  },
  {
    id: 2,
    path: "http://bonsaitonight.com/wp-content/uploads/2016/08/show-prep.jpg",
  },
  {
    id: 3,
    path: "https://www.mdfitalia.com/upload/product_cover/_2000x2000/hero-stable-marmo-ric-1L.jpg",
  },
  {
    id: 4,
    path: "http://bonsaitonight.com/wp-content/uploads/2016/08/show-prep.jpg",
  },
  {
    id: 5,
    path: "http://bonsaitonight.com/wp-content/uploads/2016/08/show-prep.jpg",
  },
];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const getCurrentImageIndex = (index) => {
    if (index + 1 > images.length) {
      return index - images.length;
    }
    return index;
  };

  const shiftImageHandler = (shift) => {
    if (imageIndex + shift > images.length) {
      setImageIndex(1);
    } else if (imageIndex + shift < 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex + shift);
    }
  };

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={images[getCurrentImageIndex(imageIndex)].path}
        alt="left"
      />
      <img
        className="carousel-image"
        src={images[getCurrentImageIndex(imageIndex + 1)].path}
        alt="middle"
        onClick={() => shiftImageHandler(-1)}
      />
      <img
        className="carousel-image"
        src={images[getCurrentImageIndex(imageIndex + 2)].path}
        alt="right"
      />
    </div>
  );
};

export default Carousel;
