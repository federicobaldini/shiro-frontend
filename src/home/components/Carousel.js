import React, { useState } from "react";

import Card from "../../shared/components/UI/Card";
import "./Carousel.css";

const images = [
  {
    id: 1,
    path: "https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg",
  },
  {
    id: 2,
    path: "https://images.wallpaperscraft.com/image/single/interior_yellow_office_121457_3840x2160.jpg",
  },
  {
    id: 3,
    path: "https://images.wallpaperscraft.com/image/single/balcony_sofas_interior_design_apartment_room_suite_sea_ocean_landscape_penthouse_desk_tv_31421_3840x2160.jpg",
  }
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
      <Card className="carousel-image-card carousel-image-card__left">
        <img
          className="carousel-image"
          src={images[getCurrentImageIndex(imageIndex)].path}
          alt="left"
        />
      </Card>
      <Card className="carousel-image-card carousel-image-card__middle">
        <img
          className="carousel-image"
          src={images[getCurrentImageIndex(imageIndex + 1)].path}
          alt="middle"
          onClick={() => shiftImageHandler(-1)}
        />
      </Card>
      <Card className="carousel-image-card carousel-image-card__right">
        <img
          className="carousel-image"
          src={images[getCurrentImageIndex(imageIndex + 2)].path}
          alt="right"
        />
      </Card>
    </div>
  );
};

export default Carousel;
